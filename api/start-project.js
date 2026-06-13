const EMAIL_TO = process.env.EMAIL_TO || 'work@vertigodigital.co';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function field(label, value) {
  return `
    <tr>
      <td style="padding:10px 14px;border-bottom:1px solid #202420;color:#8C918C;font-size:12px;letter-spacing:.08em;text-transform:uppercase;">${escapeHtml(label)}</td>
      <td style="padding:10px 14px;border-bottom:1px solid #202420;color:#FAFAF6;font-size:15px;font-weight:700;">${escapeHtml(value || 'N/A')}</td>
    </tr>`;
}

function makeTextSummary(brief) {
  return [
    `Flight code: ${brief.code}`,
    `Submitted at: ${brief.submittedAt}`,
    '',
    `Name: ${brief.name}`,
    `Email: ${brief.email}`,
    `Phone: ${brief.phone || 'N/A'}`,
    `Region: ${brief.region}`,
    '',
    `Brand: ${brief.brand}`,
    `Website: ${brief.website || 'N/A'}`,
    `Industry: ${brief.industry}`,
    `Stage: ${brief.stage}`,
    '',
    `Services: ${(brief.services || []).join(', ')}`,
    `Budget: ${brief.budget}`,
    `Timeline: ${brief.timeline}`,
    '',
    'Goals:',
    brief.goals
  ].join('\n');
}

function makeHtmlSummary(brief) {
  const services = Array.isArray(brief.services) ? brief.services.join(', ') : '';
  return `
    <div style="margin:0;padding:0;background:#0B0C0B;font-family:Arial,sans-serif;color:#FAFAF6;">
      <div style="max-width:720px;margin:0 auto;padding:34px 24px;">
        <div style="display:inline-block;background:#5BFA1E;color:#0B0C0B;border-radius:999px;padding:8px 14px;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;">New Vertigo Brief</div>
        <h1 style="margin:22px 0 10px;font-size:34px;line-height:1.05;color:#FAFAF6;">Start a project request</h1>
        <p style="margin:0 0 26px;color:#8C918C;font-size:15px;line-height:1.5;">A new project brief was submitted through the Vertigo website.</p>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;background:#131512;border:1px solid #202420;border-radius:16px;overflow:hidden;">
          ${field('Flight code', brief.code)}
          ${field('Submitted at', brief.submittedAt)}
          ${field('Name', brief.name)}
          ${field('Email', brief.email)}
          ${field('Phone', brief.phone)}
          ${field('Region', brief.region)}
          ${field('Brand', brief.brand)}
          ${field('Website', brief.website)}
          ${field('Industry', brief.industry)}
          ${field('Stage', brief.stage)}
          ${field('Services', services)}
          ${field('Budget', brief.budget)}
          ${field('Timeline', brief.timeline)}
        </table>
        <div style="margin-top:22px;background:#131512;border:1px solid #202420;border-radius:16px;padding:18px 20px;">
          <div style="color:#5BFA1E;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:10px;">Goals and context</div>
          <p style="white-space:pre-wrap;margin:0;color:#FAFAF6;font-size:15px;line-height:1.6;">${escapeHtml(brief.goals)}</p>
        </div>
      </div>
    </div>`;
}

function validate(brief) {
  const required = ['code', 'name', 'email', 'brand', 'industry', 'stage', 'budget', 'timeline', 'region', 'goals'];
  const missing = required.filter(key => !String(brief[key] || '').trim());
  if (missing.length) return `Missing required fields: ${missing.join(', ')}`;
  if (!/.+@.+\..+/.test(String(brief.email))) return 'Invalid email address.';
  if (!Array.isArray(brief.services) || brief.services.length === 0) return 'At least one service is required.';
  if (String(brief.goals).trim().length < 10) return 'Goals must be at least 10 characters.';
  return null;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.EMAIL_FROM;
  if (!apiKey || !from) {
    return res.status(500).json({
      ok: false,
      error: 'Email service is not configured. Set RESEND_API_KEY and EMAIL_FROM in Vercel.'
    });
  }

  try {
    const brief = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const error = validate(brief || {});
    if (error) return res.status(400).json({ ok: false, error });

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [EMAIL_TO],
        reply_to: brief.email,
        subject: `New project brief: ${brief.brand} · ${brief.code}`,
        text: makeTextSummary(brief),
        html: makeHtmlSummary(brief)
      })
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      return res.status(502).json({
        ok: false,
        error: result.message || 'Email provider rejected the request.'
      });
    }

    return res.status(200).json({ ok: true, id: result.id || null });
  } catch (error) {
    return res.status(500).json({ ok: false, error: 'Could not send the brief.' });
  }
};
