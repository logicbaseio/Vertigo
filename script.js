/* ==================== DATA ==================== */
const SERVICES = [
  {slug:'creative-direction',name:'Creative Direction',tag:'The big idea, and the taste to protect it.',
   desc:'Every brand people remember has a point of view. We define yours: the concept, the tone, the rules of the world your brand lives in. Then we direct every single asset so it all feels like it came from one dangerous mind.',
   deliv:['Brand & campaign concepts','Creative platforms & big ideas','Art direction & visual systems','Tone of voice & messaging frameworks','Creative QA across all output'],
   steps:[['Immersion','We live inside your brand, audience and category until we can argue both sides of it in our sleep.'],['Concept sprints','AI-accelerated ideation gives us volume; human taste picks the one idea worth betting real money on.'],['Direction','We codify the idea into a playbook and direct every team and asset against it. No drift, no dilution.']]},
  {slug:'content-creation',name:'Content Creation',tag:'Always-on content engineered for the feed.',
   desc:'A content engine that never runs dry. We blend AI production pipelines with on-the-ground creators in the UK and Pakistan to ship platform-native content daily, without the soulless template look your audience scrolls straight past.',
   deliv:['Short-form video (Reels, TikTok, Shorts)','Photography & AI-assisted visuals','Copywriting & captions','Content calendars & batching systems','UGC sourcing & creator briefs'],
   steps:[['Content OS','We build your pillars, formats and calendar. A repeatable system, not random acts of posting.'],['Batch & build','Shoot days plus AI pipelines produce weeks of content in days, not months.'],['Publish & learn','Performance data feeds next month\'s batch. The engine compounds while you sleep.']]},
  {slug:'copywriting',name:'Copywriting',tag:'Words that sell while you sleep.',
   desc:'Direct-response copy with teeth. We mine the exact words your buyers already use, then weaponize them across ads, landing pages, emails and scripts. No clever-for-clever\'s-sake. Every line earns its place or gets cut.',
   deliv:['Direct-response ad copy & hooks','Website & landing page copy','Email sequences & funnels','Video scripts & VSLs','Brand voice & messaging guides'],
   steps:[['Mine','We dig through reviews, sales calls and competitor ads for the exact language that makes your buyers nod.'],['Write','Drafts built on proven persuasion frameworks, sharpened until they could sell over the phone.'],['Test','Hooks, headlines and angles split-tested in market. The data picks the winner, not opinions.']]},
  {slug:'campaign-design',name:'Campaign Design',tag:'Launches that bend the algorithm and the culture.',
   desc:'From product drops to seasonal pushes, we design end-to-end campaigns: the idea, the assets, the rollout choreography and the measurement plan. Built to peak loudly and decay slowly.',
   deliv:['Campaign strategy & rollout maps','Hero films & key visuals','Multi-channel asset kits','Landing pages & funnels','Post-campaign analysis'],
   steps:[['Angle','We find the cultural tension your campaign can own outright.'],['World-build','Every touchpoint designed as one coherent story arc, not a folder of disconnected assets.'],['Choreograph','Teasers, drops, amplification. Sequenced for maximum gravity.']]},
  {slug:'video-animations',name:'Video Animations',tag:'Motion that stops thumbs mid-scroll.',
   desc:'2D, 3D and AI-generated motion design: explainers, product films, brand idents and animated systems. We treat motion as a brand asset, not an afterthought bolted on at the end.',
   deliv:['2D/3D animation & motion identity','AI-generated film & VFX','Product explainers & demos','Logo animations & idents','Animated ad variations at scale'],
   steps:[['Boards','Script, style frames and animatics signed off before a single frame renders.'],['Production','A hybrid human + AI pipeline that cuts render timelines from months to days.'],['Versioning','One master, dozens of platform-perfect cuts and ratios.']]},
  {slug:'brand-design',name:'Brand Design',tag:'Identities built to be recognized at altitude.',
   desc:'Naming, logo, type, color, motion and voice. Full identity systems designed to flex across every channel, plus brand guidelines your future team will actually open.',
   deliv:['Logo & identity systems','Typography & color architecture','Brand guidelines & asset libraries','Packaging & collateral','Rebrand & brand refresh programs'],
   steps:[['Strategy','Positioning, audience and competitive whitespace first. Always.'],['Design','Identity routes explored wide with AI, refined narrow by hand.'],['Systemize','Guidelines, templates and a living asset library that keeps it consistent at any scale.']]},
  {slug:'media-buying',name:'Media Buying',tag:'Performance spend with a creative brain.',
   desc:'Paid social, search and programmatic, planned and bought by people who actually understand creative. Your budget amplifies great work instead of compensating for weak work.',
   deliv:['Meta, TikTok, Google & YouTube ads','Full-funnel media planning','Creative testing frameworks','Tracking, attribution & dashboards','Weekly optimization & reporting'],
   steps:[['Architecture','Account structure, audiences and measurement built clean from day one.'],['Test','Structured creative and audience experiments. Never random boosting.'],['Scale','Winners get budget. The data feeds the creative team in real time.']]},
  {slug:'social-growth-acceleration',name:'Social Growth Acceleration',tag:'Every platform, one mission: compounding virality.',
   desc:'Our signature program. We deploy your brand across every relevant social platform with a virality-engineered content system: trend interception, hook science, creator collabs and cross-platform momentum loops that turn followers into a flywheel.',
   deliv:['Multi-platform growth strategy','Virality-engineered content sprints','Trend interception & rapid response','Creator & community collabs','Cross-platform momentum loops','Growth analytics & weekly war-rooms'],
   steps:[['Audit & angle','We find your repeatable hook. The format only your brand can own.'],['Saturate','Coordinated daily output across TikTok, IG, YouTube, X and LinkedIn. Without mercy.'],['Accelerate','Winning formats get doubled down, paid fuel and creator amplification until growth compounds.']]}
];
const BUDGETS = ['Under $2k','$2k – $5k','$5k – $15k','$15k – $50k','$50k+','Not sure yet'];
const TIMES = ['ASAP','Within a month','1–3 months','Just exploring'];

const CASES = [
  {slug:'atlas-foods',wide:true,client:'Atlas Foods',title:'Atlas Foods: packaging that stopped the scroll',
   cat:'Brand Design / Campaign',lift:'+18% SALES UPLIFT',
   snapshot:'A legacy food brand needed a cleaner shelf story, stronger campaign assets and a packaging system that could travel across retail and social without losing recognition.',
   changes:['Rebuilt the packaging hierarchy around product clarity and shelf contrast.','Launched a campaign concept that worked in-store, on Meta and in short-form video.','Created a lightweight asset system the in-house team could repeat without redesigning it every week.'],
   timeline:[['Week 1','Research and audit'],['Week 2-3','Identity and packaging'],['Week 4-5','Campaign production'],['Week 6','Retail rollout']],
   problem:'A long-standing grocery brand was losing momentum in key store formats and had a visual system that looked dated next to newer competitors.',
   idea:'We simplified the packaging language and built a campaign around appetite, not heritage, so the brand read faster both on shelf and online.',
   exec:'The team shipped refreshed pack variants, campaign cut-downs and retail-ready assets in six weeks, with every output kept within the same visual rules.',
   stats:[['+18%','Sales uplift in launch window'],['+24%','Ad recall lift'],['6 wks','From brief to rollout']],
   quote:'The work was straightforward, which is exactly what the brand needed. The team gave us a cleaner system and a campaign our sales people could actually use.',who:'Sara Ahmed, Marketing Director, Atlas Foods',
   visHTML:'<div class="vis-inner" style="background:radial-gradient(circle at 25% 30%,#5BFA1E 0%,#2E8F08 28%,#0B0C0B 70%);display:grid;place-items:center"><svg viewBox="0 0 200 200" width="42%" opacity=".9"><circle cx="100" cy="100" r="86" fill="none" stroke="#FAFAF6" stroke-width="1" stroke-dasharray="6 10"/><circle cx="100" cy="100" r="52" fill="none" stroke="#5BFA1E" stroke-width="2"/><circle cx="100" cy="100" r="14" fill="#FAFAF6"/></svg></div>',
   bg:'radial-gradient(circle at 70% 30%,#2E8F08 0%,transparent 55%)'},
  {slug:'kayo-fitness',client:'Kayo Fitness',title:'Kayo Fitness: turning short video into a growth channel',
   cat:'Social Growth / Content',lift:'+61% APP TRIALS',
   snapshot:'A fitness app with strong product-market fit needed a repeatable content engine and a clearer social voice that could keep up with weekly launches.',
   changes:['Defined a content format the founder could appear in consistently without each post feeling improvised.','Built a batch-production workflow for hooks, edits and captions.','Added weekly performance reviews so the team could double down on what actually converted.'],
   timeline:[['Week 1','Content audit'],['Week 2','Format testing'],['Week 3-6','Production system'],['Week 7-12','Optimization']],
   problem:'The app was good, but the social presence was inconsistent and the team had no repeatable system for converting attention into trials.',
   idea:'We focused on one simple format and made it easy to ship every week, keeping the creative sharp without turning it into a production circus.',
   exec:'The account moved to a weekly batching model, with short-form edits, creator clips and landing-page alignment handled as one pipeline.',
   stats:[['+61%','App trial growth'],['+29%','Organic reach'],['12 wks','To stable cadence']],
   quote:'The process was practical. We stopped chasing random trends and finally had a content rhythm the team could sustain.',who:'James Whitfield, Founder, Kayo Fitness',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#131512,#1B1E1B 55%,#2E8F08);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:900;font-size:clamp(2.4rem,6vw,4.4rem);color:transparent;-webkit-text-stroke:1.5px #5BFA1E">growth</div></div>',
   bg:'radial-gradient(circle at 30% 60%,#1B1E1B 0%,transparent 60%)'},
  {slug:'orbita',client:'Orbita',title:'Orbita: making a complex product easier to understand',
   cat:'Video / Launch Content',lift:'4.8M VIDEO VIEWS',
   snapshot:'A hardware launch needed a clear story, stronger visuals and a set of edit variants the sales team could use across channels.',
   changes:['Turned the product explanation into a 90-second launch film.','Built platform cuts for web, paid social and founder-led selling.','Created motion assets for the site and pitch deck.'],
   timeline:[['Week 1','Messaging'],['Week 2','Storyboard'],['Week 3-4','Production'],['Week 5','Launch assets']],
   problem:'The original demos were too dense, and prospects were dropping out before they understood the value.',
   idea:'We made the product feel simple by showing how it behaved in the real world rather than over-explaining the feature set.',
   exec:'A single hero film became the source for landing-page loops, sales clips and creator seeding assets.',
   stats:[['4.8M','Video views'],['+19%','Demo completion'],['5 wks','Launch asset cycle']],
   quote:'They gave us a cleaner story and a better launch package than we had planned internally.',who:'Noor Khan, Brand Lead, Orbita',
   visHTML:'<div class="vis-inner" style="background:conic-gradient(from 200deg at 60% 40%,#FAFAF6,#EAFBDF 30%,#8C918C 60%,#FAFAF6);display:grid;place-items:center"><div style="width:36%;aspect-ratio:1;border-radius:50%;background:#0B0C0B;display:grid;place-items:center;color:#5BFA1E;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em">ORBITA</div></div>',
   bg:'radial-gradient(circle at 65% 40%,#3a4a35 0%,transparent 55%)'},
  {slug:'mona-skincare',client:'Mona Skincare',title:'Mona Skincare: performance creative that held its own in paid media',
   cat:'Media Buying / Copywriting',lift:'2.1X BLENDED ROAS',
   snapshot:'Paid media spend was climbing, creative fatigue was setting in, and the account needed a more disciplined test plan.',
   changes:['Rebuilt ad angles from real customer language.','Separated prospecting and retargeting creative so the account could test properly.','Reworked landing pages to match the ad promise and reduce drop-off.'],
   timeline:[['Week 1','Account audit'],['Week 2','Creative map'],['Week 3-5','Testing sprint'],['Week 6+','Optimization']],
   problem:'The account had too many pretty ads and not enough ads that could carry a buying decision.',
   idea:'We pushed the team toward clearer hooks, simpler proof points and cleaner testing rather than relying on broad brand polish.',
   exec:'New ad sets and matching landing pages were shipped in short cycles, with performance reviewed weekly instead of once a month.',
   stats:[['2.1x','Blended ROAS'],['-19%','CPA reduction'],['14','Creative tests per month']],
   quote:'It felt measured rather than noisy. The new system helped us know what to keep and what to cut.',who:'Lena Farooq, Head of Growth, Mona Skincare',
   visHTML:'<div class="vis-inner" style="background:repeating-linear-gradient(45deg,#EAFBDF 0 26px,#FAFAF6 26px 52px);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:600;font-size:1.5rem;color:#0B0C0B;background:linear-gradient(135deg,#8CFF62,#5BFA1E);padding:.7rem 1.6rem;border-radius:100px;transform:rotate(-4deg)">mona.</div></div>',
   bg:'radial-gradient(circle at 40% 30%,#2E4a22 0%,transparent 55%)'},
  {slug:'paperplane',client:'Paperplane',title:'Paperplane: an identity system built for fundraising',
   cat:'Brand Design / Direction',lift:'8-WEEK IDENTITY BUILD',
   snapshot:'A travel startup needed a sharper identity and pitch system before a funding round, with everything delivered fast and consistent.',
   changes:['Defined a visual motif that worked across logo, deck and motion.','Built investor-facing slides and a cleaner narrative structure.','Packaged the identity so the internal team could extend it after launch.'],
   timeline:[['Week 1','Positioning'],['Week 2-3','Identity routes'],['Week 4-5','Deck and motion'],['Week 6-8','Rollout']],
   problem:'The brand looked functional but forgettable, which is a bad place to be when you are asking people for money.',
   idea:'We used the fold as a simple visual idea so the brand had one memorable shape running through every touchpoint.',
   exec:'Identity, motion language and fundraising collateral were produced as one system rather than separate exercises.',
   stats:[['8 wks','To full system'],['$8M','Funding secured'],['+27%','Deck engagement']],
   quote:'The deck was easier to present because the brand finally had a clear point of view behind it.',who:'Omar Siddiqui, CEO, Paperplane',
   visHTML:'<div class="vis-inner" style="background:#0B0C0B;display:grid;place-items:center"><svg viewBox="0 0 240 140" width="62%"><path d="M10 120 L120 18 L150 60 L230 120 Z" fill="none" stroke="#5BFA1E" stroke-width="2"/><path d="M10 120 L120 18 L120 120 Z" fill="#1B1E1B"/><circle cx="120" cy="18" r="5" fill="#FAFAF6"/></svg></div>',
   bg:'radial-gradient(circle at 60% 50%,#1E2A18 0%,transparent 60%)'},
  {slug:'encytro',client:'Encytro',title:'Encytro: a compliance site that explained trust quickly',
   cat:'B2B Website / Lead Gen',lift:'+34% DEMO REQUESTS',
   snapshot:'A PCI compliance company needed a clearer story for procurement teams and a conversion-focused website with less jargon.',
   changes:['Simplified the service architecture so buyers could find answers faster.','Rewrote the site around risk, trust and implementation speed.','Added clearer calls to action for demos and security reviews.'],
   timeline:[['Week 1','Messaging audit'],['Week 2','Site map'],['Week 3-4','Copy and design'],['Week 5','Launch']],
   problem:'The old site was technically accurate but too dense for busy buyers who needed a fast confidence check.',
   idea:'We turned the site into a plain-English sales tool that answered security, compliance and procurement questions without wasting time.',
   exec:'The new site shipped with cleaner navigation, tighter proof points and a stronger demo funnel.',
   stats:[['+34%','Demo requests'],['-22%','Bounce rate'],['5 wks','Launch time']],
   quote:'We needed clarity more than cleverness. The new site made it easier for sales to start the conversation.',who:'Darren Cole, Commercial Director, Encytro',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#0B0C0B,#1B1E1B 55%,#5BFA1E);display:grid;place-items:center"><div style="font-family:var(--mono);font-size:1rem;letter-spacing:.25em;color:#FAFAF6;border:1px solid rgba(255,255,255,.18);padding:1rem 1.2rem;border-radius:999px">ENCYTRO</div></div>',
   bg:'radial-gradient(circle at 70% 35%,#1c251d 0%,transparent 55%)'},
  {slug:'my-mummy-australia',client:'My Mummy Australia',title:'My Mummy Australia: turning expertise into booked calls',
   cat:'Content / Funnel',lift:'+41% WEBINAR SIGNUPS',
   snapshot:'A business coaching brand needed a clearer funnel and more credible content that felt like advice from a real operator, not a motivational poster.',
   changes:['Built a clearer lead magnet and booking flow.','Shifted the content strategy toward practical, step-by-step posts.','Created templates the founder could use without rewriting every caption from scratch.'],
   timeline:[['Week 1','Offer review'],['Week 2','Funnel design'],['Week 3-4','Content system'],['Week 5','Launch']],
   problem:'The brand had audience attention, but it was not converting consistently into booked calls or webinar attendance.',
   idea:'We made the value proposition concrete and the content more useful, so the audience had a reason to respond.',
   exec:'The new funnel, content cadence and booking journey were launched together to avoid a leaky handoff between posts and sales.',
   stats:[['+41%','Webinar signups'],['+18%','Booked calls'],['3.2x','Lead-to-call rate']],
   quote:'The advice became more actionable and the results followed. We stopped sounding generic.',who:'Melissa Hart, Founder, My Mummy Australia',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(160deg,#F0F1EC,#EAFBDF 52%,#5BFA1E);display:grid;place-items:center"><div style="font-family:var(--disp);font-size:clamp(1.4rem,4vw,2.6rem);font-weight:700;color:#0B0C0B">MY MUMMY</div></div>',
   bg:'radial-gradient(circle at 35% 55%,#dce8d2 0%,transparent 55%)'},
  {slug:'alpmed-clinic',client:'Alpmed Clinic',title:'Alpmed Clinic: a more direct path to consultation bookings',
   cat:'Healthcare / Local Growth',lift:'+29% CONSULTS',
   snapshot:'A body aesthetics and surgery clinic needed clearer service pages, stronger local intent and a cleaner path to consultations.',
   changes:['Separated service lines so each treatment had its own landing page.','Simplified the consultation booking flow.','Added trust signals and FAQs where patients were making decisions.'],
   timeline:[['Week 1','Discovery'],['Week 2','Content and IA'],['Week 3','Design'],['Week 4-5','Launch']],
   problem:'The website was too broad and did not help patients move from interest to consultation with enough confidence.',
   idea:'We made each treatment page more specific and more reassuring so the next step felt obvious.',
   exec:'The launch focused on service clarity, local SEO structure and conversion points that matched patient questions.',
   stats:[['+29%','Consult bookings'],['+17%','Organic traffic'],['-14%','Drop-off rate']],
   quote:'Patients were spending less time hunting for information, which is exactly what we wanted.',who:'Dr. Aisha Rahman, Clinic Director, Alpmed Clinic',
   visHTML:'<div class="vis-inner" style="background:radial-gradient(circle at 30% 35%,#EAFBDF 0%,#FAFAF6 45%,#5BFA1E 100%);display:grid;place-items:center"><div style="width:40%;aspect-ratio:1;border-radius:50%;background:#0B0C0B"></div></div>',
   bg:'radial-gradient(circle at 60% 30%,#d4e3cd 0%,transparent 55%)'},
  {slug:'pizza-hut',client:'Pizza Hut',title:'Pizza Hut: a regional campaign built around lunch urgency',
   cat:'Food Brand / Campaign',lift:'+12% LUNCH ORDERS',
   snapshot:'A regional food campaign needed a sharper offer, stronger creative and a cleaner path from social to store or delivery.',
   changes:['Built fast-turnaround creative for lunch and evening peaks.','Clarified the offer so it read quickly on mobile.','Aligned social ads with landing-page and app destinations.'],
   timeline:[['Week 1','Offer planning'],['Week 2','Creative production'],['Week 3','Paid launch'],['Week 4','Iteration']],
   problem:'The campaign was competing in a crowded category where the default message blended into everything else.',
   idea:'We focused on the actual decision window—what people order when they are hungry and short on time.',
   exec:'Short-form assets, offer messaging and paid placements were coordinated around local lunch and dinner demand.',
   stats:[['+12%','Lunch orders'],['+21%','App clicks'],['4 wks','Campaign cycle']],
   quote:'The messaging was simple, which made it easier for the market team to run with it.',who:'Daniel Reed, Regional Marketing Manager, Pizza Hut',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#c61d2b,#f04d2d 55%,#0B0C0B);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:800;font-size:clamp(1.2rem,3vw,2rem);color:#FAFAF6">PIZZA HUT</div></div>',
   bg:'radial-gradient(circle at 65% 45%,#4b1b17 0%,transparent 55%)'},
  {slug:'waldor-watches',client:'Waldor Watches',title:'Waldor Watches: a product story with cleaner commercial intent',
   cat:'Ecommerce / Brand',lift:'+26% AOV',
   snapshot:'A watches and wallets brand needed better product storytelling and a sharper ecommerce system that could support higher-value carts.',
   changes:['Reworked product pages to highlight materials, detail and gifting use cases.','Built better upsell paths for watches and wallets together.','Created social assets that felt premium without becoming stiff.'],
   timeline:[['Week 1','Catalog review'],['Week 2','Site and UX'],['Week 3-4','Content production'],['Week 5','Store launch']],
   problem:'The site sold products, but it did not do enough to justify the premium positioning or increase basket size.',
   idea:'We made the product pages feel more editorial while keeping the purchase path short.',
   exec:'The ecommerce refresh focused on product photography, better cross-sells and tighter copy around quality and gifting.',
   stats:[['+26%','Average order value'],['+17%','Conversion rate'],['5 wks','Store refresh']],
   quote:'The product pages finally felt like they matched the price point.',who:'Hannah Lewis, Ecommerce Lead, Waldor Watches',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#1B1E1B,#0B0C0B 55%,#8C918C);display:grid;place-items:center"><div style="width:110px;height:110px;border-radius:50%;border:2px solid #5BFA1E;display:grid;place-items:center;color:#FAFAF6;font-family:var(--mono);letter-spacing:.18em">W</div></div>',
   bg:'radial-gradient(circle at 30% 40%,#2a2d2a 0%,transparent 55%)'},
  {slug:'rock-n-rose',client:'Rock n Rose',title:'Rock n Rose: making skincare feel practical, not performative',
   cat:'Skincare / Health',lift:'+31% SUBSCRIPTIONS',
   snapshot:'A skincare and wellness brand needed clearer education, stronger retention messaging and a friendlier acquisition story.',
   changes:['Built ingredient-led landing pages for the hero products.','Shifted email and social content toward simple education.','Added subscription nudges at the right point in the customer journey.'],
   timeline:[['Week 1','Audience review'],['Week 2','Messaging'],['Week 3-4','Content rollout'],['Week 5','Retention pass']],
   problem:'The existing marketing leaned too hard into aesthetics and not enough into repeat purchase logic.',
   idea:'We made the brand more useful by explaining how the products fit into a normal routine.',
   exec:'The team shipped clearer product education, retention emails and repeat-purchase prompts across key pages.',
   stats:[['+31%','Subscription signups'],['+14%','Repeat purchases'],['-9%','Refund rate']],
   quote:'The brand felt more grounded and the customers responded to that immediately.',who:'Priya Shah, Brand Manager, Rock n Rose',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#FAFAF6,#EAFBDF 40%,#5BFA1E);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:700;font-size:1.5rem;color:#0B0C0B">rock n rose</div></div>',
   bg:'radial-gradient(circle at 40% 40%,#dfe8d2 0%,transparent 55%)'},
  {slug:'simmons-capital',client:'Simmons Capital',title:'Simmons Capital: a clearer story for high-intent investors',
   cat:'Finance / Lead Gen',lift:'+44% QUALIFIED INQUIRIES',
   snapshot:'An investment firm needed a more credible digital presence and a lead path that appealed to sophisticated prospects without overexplaining the product.',
   changes:['Reworked the narrative around strategy, trust and process.','Built a more disciplined lead-gen funnel for high-intent visitors.','Added proof points and team credibility across the site.'],
   timeline:[['Week 1','Positioning'],['Week 2','Page structure'],['Week 3-4','Design and copy'],['Week 5','Launch']],
   problem:'The old site was broad and did not help visitors understand why they should enquire.',
   idea:'We clarified the proposition, improved the information hierarchy and made the firm feel more concrete and investable.',
   exec:'The site now routes prospects from the homepage into the right service and contact paths with less friction.',
   stats:[['+44%','Qualified inquiries'],['+23%','Time on site'],['5 wks','Site relaunch']],
   quote:'The site finally matched the level of the business. It was easier for prospects to understand what we do.',who:'Thomas Evans, Partner, Simmons Capital',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#0B0C0B,#1B1E1B 55%,#5BFA1E);display:grid;place-items:center"><div style="font-family:var(--mono);color:#FAFAF6;letter-spacing:.28em">SIMMONS</div></div>',
   bg:'radial-gradient(circle at 60% 35%,#202620 0%,transparent 55%)'}
];

const VOICES = [
  {quote:'The work was straightforward, which is exactly what the brand needed. The team gave us a cleaner system and a campaign our sales people could actually use.',name:'Sara Ahmed',role:'Marketing Director, Atlas Foods',res:'+18% SALES UPLIFT',av:'SA'},
  {quote:'We stopped chasing random trends and finally had a content rhythm the team could sustain.',name:'James Whitfield',role:'Founder, Kayo Fitness',res:'+61% TRIALS',av:'JW'},
  {quote:'The site finally matched the level of the business. It was easier for prospects to understand what we do.',name:'Thomas Evans',role:'Partner, Simmons Capital',res:'+44% INQUIRIES',av:'TE'},
  {quote:'The messaging was simple, which made it easier for the market team to run with it.',name:'Daniel Reed',role:'Regional Marketing Manager, Pizza Hut',res:'+12% ORDERS',av:'DR'},
  {quote:'Patients were spending less time hunting for information, which is exactly what we wanted.',name:'Dr. Aisha Rahman',role:'Clinic Director, Alpmed Clinic',res:'+29% CONSULTS',av:'AR'}
];

/* ==================== RENDER LISTS ==================== */
const svcList = document.getElementById('svcList');
SERVICES.forEach((s,i)=>{
  const a = document.createElement('a');
  a.href = '#/services/'+s.slug;
  a.className = 'svc-row';
  a.innerHTML = `<span class="idx">S.0${i+1}</span><span class="nm">${s.name}</span><span class="tg">${s.tag}</span><span class="go">→</span>`;
  svcList.appendChild(a);
});
document.getElementById('footSvcs').innerHTML = SERVICES.map(s=>`<a href="#/services/${s.slug}">${s.name}</a>`).join('');

const workGrid = document.getElementById('workGrid');
CASES.forEach((c,i)=>{
  const a = document.createElement('a');
  a.href = '#/work/'+c.slug;
  a.className = 'case rv'+(c.wide?' wide':'')+(i%2?' rv-d1':'');
  a.innerHTML = `<div class="vis">${c.visHTML}</div>
    <span class="lift">${c.lift}</span>
    <div class="meta"><div><h3>${c.client}</h3><span class="cat">${c.cat}</span></div><span class="open-tag">OPEN CASE →</span></div>`;
  workGrid.appendChild(a);
});

/* ==================== ROUTER ==================== */
const pages = {home:document.getElementById('page-home'),service:document.getElementById('page-service'),case:document.getElementById('page-case'),start:document.getElementById('page-start')};
let pendingScroll = null;

function show(page){
  Object.values(pages).forEach(p=>p.classList.remove('on'));
  pages[page].classList.add('on');
  window.scrollTo({top:0,behavior:'instant'});
  document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
}
function route(){
  const h = location.hash;
  const ms = h.match(/^#\/services\/([\w-]+)/);
  const mc = h.match(/^#\/work\/([\w-]+)/);
  if(ms){ renderService(ms[1]); show('service'); }
  else if(mc){ renderCase(mc[1]); show('case'); }
  else if(h.startsWith('#/start')){ show('start'); resetFormView(); }
  else { show('home'); document.title='Vertigo, AI-Native Creative Marketing Agency';
    if(pendingScroll){ const t=document.getElementById(pendingScroll); pendingScroll=null; if(t) setTimeout(()=>t.scrollIntoView({behavior:'smooth'}),60);} }
  closeMenu();
}
window.addEventListener('hashchange',route);

document.addEventListener('click',e=>{
  const sc = e.target.closest('[data-scroll]');
  if(sc){
    e.preventDefault();
    const id = sc.getAttribute('data-scroll');
    if(pages.home.classList.contains('on')){
      const t=document.getElementById(id); if(t) t.scrollIntoView({behavior:'smooth'});
      closeMenu();
    } else { pendingScroll=id; if(location.hash==='#/'||location.hash===''){route();} else {location.hash='#/';} }
  }
});

/* ==================== SERVICE PAGE RENDER ==================== */
function renderService(slug){
  const i = SERVICES.findIndex(s=>s.slug===slug);
  const s = SERVICES[i] || SERVICES[0];
  document.getElementById('sIdx').textContent = 'S.0'+(i+1);
  document.getElementById('sCrumb').textContent = 'Services / 0'+(i+1);
  document.getElementById('sName').textContent = s.name;
  document.getElementById('sTag').textContent = s.tag;
  document.getElementById('sDesc').textContent = s.desc;
  document.getElementById('sDeliv').innerHTML = s.deliv.map(d=>`<li>${d}</li>`).join('');
  document.getElementById('sSteps').innerHTML = s.steps.map(st=>`<div class="svc-step"><h4>${st[0]}</h4><p>${st[1]}</p></div>`).join('');
  document.getElementById('sCta').href = '#/start?service='+s.slug;
  document.getElementById('sOthers').innerHTML = SERVICES.filter(o=>o.slug!==s.slug).map(o=>`<a class="chip-link" href="#/services/${o.slug}">${o.name}</a>`).join('');
  document.title = s.name+' · Vertigo';
}

/* ==================== CASE PAGE RENDER ==================== */
function renderCase(slug){
  const i = CASES.findIndex(c=>c.slug===slug);
  const c = CASES[i] || CASES[0];
  document.getElementById('csBg').style.background = c.bg;
  document.getElementById('csCrumb').textContent = 'Work / Case 0'+(i+1);
  document.getElementById('csTitle').textContent = c.title;
  document.getElementById('csChips').innerHTML = `<span class="cs-chip hot">${c.lift}</span>` + c.cat.split(' / ').map(x=>`<span class="cs-chip">${x}</span>`).join('');
  document.getElementById('csProblem').textContent = c.problem;
  document.getElementById('csIdea').textContent = c.idea;
  document.getElementById('csExec').textContent = c.exec;
  document.getElementById('csSnapshot').textContent = c.snapshot || '';
  document.getElementById('csChanges').innerHTML = (c.changes || []).map(item=>`<li>${item}</li>`).join('');
  document.getElementById('csTimeline').innerHTML = (c.timeline || []).map(step=>`<div class="cs-step"><span class="k">${step[0]}</span><h4>${step[1]}</h4><p>${step[2] || ''}</p></div>`).join('');
  document.getElementById('csQuote').textContent = '"'+c.quote+'"';
  document.getElementById('csQuoteWho').textContent = c.who;
  document.getElementById('csStats').innerHTML = c.stats.map(s=>`<div class="cs-stat"><div class="n">${s[0]}</div><div class="l">${s[1]}</div></div>`).join('');
  document.getElementById('csSvcs').innerHTML = c.svcs.map(sl=>{
    const s = SERVICES.find(x=>x.slug===sl); return `<a class="chip-link" href="#/services/${sl}">${s.name}</a>`;
  }).join('');
  const next = CASES[(i+1)%CASES.length];
  document.getElementById('csNext').setAttribute('href','#/work/'+next.slug);
  document.getElementById('csNext').removeAttribute('data-route');
  document.getElementById('csNextTitle').textContent = next.title;
  document.title = c.client+' · Vertigo Case Study';
}

/* ==================== NAV ==================== */
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click',()=>{ navLinks.classList.toggle('open'); document.body.classList.toggle('menu-open'); });
function closeMenu(){ navLinks.classList.remove('open'); document.body.classList.remove('menu-open'); }
navLinks.addEventListener('click',e=>{ if(e.target.closest('a')) closeMenu(); });

/* ==================== SCROLL FX ==================== */
const spiralG = document.getElementById('spiralG');
const giantText = document.getElementById('giantText');
const altFill = document.getElementById('altFill');
const altRead = document.getElementById('altRead');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
let ticking=false;
function onScroll(){
  if(ticking) return; ticking=true;
  requestAnimationFrame(()=>{
    const y = scrollY;
    nav.classList.toggle('scrolled', y>40);
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max>0 ? y/max : 0;
    altFill.style.width = (p*100)+'%';
    altRead.textContent = Math.round(p*35000).toLocaleString().padStart(6,'0')+' FT';
    if(spiralG && !reduce){ spiralG.style.transformOrigin='400px 400px'; spiralG.style.transform = `rotate(${y*0.06}deg)`; }
    if(giantText && !reduce){
      const r = giantText.getBoundingClientRect();
      if(r.top < innerHeight && r.bottom > 0){
        const k = 1 - Math.min(1,Math.max(0,(r.top)/(innerHeight)));
        giantText.style.transform = `translateY(${(1-k)*14}%)`;
      }
    }
    ticking=false;
  });
}
addEventListener('scroll',onScroll,{passive:true}); onScroll();

/* reveal */
const obs = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); obs.unobserve(e.target);
    e.target.querySelectorAll?.('[data-count]')?.forEach(countUp);
    if(e.target.hasAttribute?.('data-count')) countUp(e.target);
  }});
},{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>obs.observe(el));

function countUp(el){
  if(el.dataset.done) return; el.dataset.done=1;
  const target=+el.dataset.count, dec=+(el.dataset.decimal||0), suf=el.dataset.suffix!==undefined?el.dataset.suffix:(dec?'':'+');
  const t0=performance.now(), dur=1400;
  function tick(t){
    const k=Math.min(1,(t-t0)/dur), e=1-Math.pow(1-k,3);
    let v=target*e; v = dec? (v/10).toFixed(1) : Math.round(v);
    el.textContent = v+suf;
    if(k<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ==================== FLIPPER WORD ==================== */
const flipper = document.getElementById('flipper');
if(flipper && !reduce){
  const words=[...flipper.children]; let fi=0;
  setInterval(()=>{ words[fi].classList.remove('on'); fi=(fi+1)%words.length; words[fi].classList.add('on'); },2400);
}

/* ==================== CURSOR ==================== */
const cursor=document.getElementById('cursor');
let cx=0,cy=0,tx=0,ty=0;
addEventListener('mousemove',e=>{ tx=e.clientX; ty=e.clientY; cursor.classList.add('on'); });
(function loop(){ cx+=(tx-cx)*.18; cy+=(ty-cy)*.18; cursor.style.left=cx+'px'; cursor.style.top=cy+'px'; requestAnimationFrame(loop); })();
document.addEventListener('mouseover',e=>{ cursor.classList.toggle('big', !!e.target.closest('a,button,.svc-row,.case,.pick,.v-item')); });

/* ==================== VOICES ==================== */
const vList=document.getElementById('vList'), vCard=document.getElementById('vCard');
const vQuote=document.getElementById('vQuote'), vName=document.getElementById('vName'), vRole=document.getElementById('vRole'), vAv=document.getElementById('vAv'), vProg=document.getElementById('vProg');
let vi=0, vTimer=null, vStart=0;
const V_DUR=6000;
VOICES.forEach((v,i)=>{
  const b=document.createElement('button'); b.type='button'; b.className='v-item'+(i===0?' on':'');
  b.innerHTML=`<div><div class="nm">${v.name}</div><div class="rl">${v.role}</div></div><span class="res">${v.res}</span>`;
  b.onclick=()=>setVoice(i,true);
  vList.appendChild(b);
});
function paintVoice(){
  const v=VOICES[vi];
  vQuote.textContent='"'+v.quote+'"'; vName.textContent=v.name; vRole.textContent=v.role; vAv.textContent=v.av;
  [...vList.children].forEach((el,j)=>el.classList.toggle('on',j===vi));
}
function setVoice(i,manual){
  vCard.classList.add('swap');
  setTimeout(()=>{ vi=i%VOICES.length; paintVoice(); vCard.classList.remove('swap'); },280);
  vStart=performance.now();
  if(manual){ clearInterval(vTimer); startVoiceTimer(); }
}
function startVoiceTimer(){
  if(reduce){ vProg.style.width='100%'; return; }
  vTimer=setInterval(()=>setVoice(vi+1),V_DUR);
}
(function vLoop(t){
  if(!reduce){ const k=Math.min(1,(performance.now()-vStart)/V_DUR); vProg.style.width=(k*100)+'%'; }
  requestAnimationFrame(vLoop);
})();
paintVoice(); vStart=performance.now(); startVoiceTimer();

/* ==================== START PROJECT FORM ==================== */
const F = {services:[],budget:'',time:''};
const steps=[...document.querySelectorAll('.fstep')];
let step=0;
const flFill=document.getElementById('flFill'), flRead=document.getElementById('flRead');
const fNav=document.getElementById('fNav'), fBack=document.getElementById('fBack'), fNext=document.getElementById('fNext');

const pickSvcs=document.getElementById('pickSvcs');
SERVICES.forEach(s=>{
  const b=document.createElement('button'); b.type='button'; b.className='pick';
  b.innerHTML=`${s.name}<span class="pk-sub">${s.tag}</span>`;
  b.dataset.val=s.slug;
  b.onclick=()=>{ b.classList.toggle('sel');
    F.services = [...pickSvcs.querySelectorAll('.sel')].map(x=>x.dataset.val); };
  pickSvcs.appendChild(b);
});
function singlePick(holder,vals,key){
  vals.forEach(v=>{
    const b=document.createElement('button'); b.type='button'; b.className='pick'; b.textContent=v;
    b.onclick=()=>{ holder.querySelectorAll('.pick').forEach(x=>x.classList.remove('sel')); b.classList.add('sel'); F[key]=v; };
    holder.appendChild(b);
  });
}
singlePick(document.getElementById('pickBudget'),BUDGETS,'budget');
singlePick(document.getElementById('pickTime'),TIMES,'time');

function setStep(n){
  steps[step].classList.remove('on'); step=n; steps[step].classList.add('on');
  const total=5; const p=Math.min(step/total,1);
  flFill.style.width=(p*100)+'%';
  flRead.textContent='ALT '+Math.round(p*35000).toLocaleString()+' FT';
  fBack.style.visibility = (step===0||step===6)?'hidden':'visible';
  fNav.style.display = step===6?'none':'flex';
  fNext.innerHTML = step===5 ? 'Confirm & take off <span class="arr">→</span>' : 'Continue <span class="arr">→</span>';
  document.querySelectorAll('.f-err').forEach(e=>e.classList.remove('on'));
  window.scrollTo({top:0,behavior:'smooth'});
}
function resetFormView(){
  const m=location.hash.match(/service=([\w-]+)/);
  if(m){ const btn=pickSvcs.querySelector(`[data-val="${m[1]}"]`);
    if(btn && !btn.classList.contains('sel')){ btn.classList.add('sel'); F.services=[...pickSvcs.querySelectorAll('.sel')].map(x=>x.dataset.val); } }
  document.title='Start a Project · Vertigo';
}
function err(n,bad){ const e=document.getElementById('err'+n); if(e) e.classList.toggle('on',bad); return !bad; }
function valid(){
  const v=id=>document.getElementById(id).value.trim();
  switch(step){
    case 0: return err(0, F.services.length===0);
    case 1: return err(1, !v('fBrand')||!v('fIndustry')||!v('fStage'));
    case 2: return err(2, !F.budget||!F.time);
    case 3: return err(3, v('fGoals').length<10);
    case 4: return err(4, !v('fName')||!/.+@.+\..+/.test(v('fEmail'))||!v('fRegion'));
  }
  return true;
}
let code='VG-0000';
function buildPass(){
  const v=id=>document.getElementById(id).value.trim();
  code='VG-'+String(Math.floor(1000+Math.random()*9000));
  const names=F.services.map(sl=>SERVICES.find(s=>s.slug===sl).name);
  document.getElementById('bpDate').textContent=new Date().toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}).toUpperCase();
  document.getElementById('bpCode').textContent=code;
  document.getElementById('bpBody').innerHTML=[
    ['Passenger',v('fName')],['Brand',v('fBrand')],
    ['Services',names.join(', ')],['Industry',v('fIndustry')],
    ['Budget',F.budget],['Timeline',F.time],
    ['Stage',v('fStage')],['Nearest office',v('fRegion')],
    ['Email',v('fEmail')],['Goals',v('fGoals')]
  ].map(([k,val])=>`<div class="bp-item"><div class="k">${k}</div><div class="v">${val||'N/A'}</div></div>`).join('');
  const bar=document.getElementById('bpBar'); bar.innerHTML='';
  for(let i=0;i<34;i++){ const b=document.createElement('i'); b.style.height=(8+Math.random()*18)+'px'; bar.appendChild(b); }
}
fNext.onclick=()=>{
  if(!valid()) return;
  if(step===4){ buildPass(); setStep(5); return; }
  if(step===5){
    document.getElementById('finalCode').textContent=code;
    const v=id=>document.getElementById(id).value.trim();
    const names=F.services.map(sl=>SERVICES.find(s=>s.slug===sl).name).join(', ');
    const body=encodeURIComponent(
`Flight code: ${code}
Brand: ${v('fBrand')} (${v('fIndustry')}, ${v('fStage')})
Services: ${names}
Budget: ${F.budget} | Timeline: ${F.time}
Region: ${v('fRegion')}
Contact: ${v('fName')}, ${v('fEmail')} ${v('fPhone')}
Goals: ${v('fGoals')}`);
    document.getElementById('mailBrief').href=`mailto:hello@vertigo.agency?subject=${encodeURIComponent('New project brief, '+code)}&body=${body}`;
    setStep(6); return;
  }
  setStep(step+1);
};
fBack.onclick=()=>{ if(step>0) setStep(step-1); };

route();
