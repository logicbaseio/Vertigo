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
  {slug:'atlas-foods',wide:true,client:'Atlas Foods',title:'Atlas Foods: from shelf filler to shelf killer',
   cat:'Brand Design / Campaign',lift:'+412% LAUNCH-WEEK SALES',
   svcs:['brand-design','campaign-design','creative-direction'],
   problem:'A 40-year-old food brand bleeding share to cheaper private labels. Loved by nobody under 45, with six straight months of declining shelf velocity.',
   idea:'Stop selling heritage. Sell hunger. We rebuilt the identity around appetite itself: loud crops, a neon-fresh palette and packaging you can read from across the aisle, launched like a drop, not a press release.',
   exec:'Full rebrand in six weeks. AI-accelerated packaging variations tested with real shoppers before print, a creator-led launch week and retail media tuned store by store.',
   stats:[['+412%','Launch-week sales'],['28M','Campaign impressions'],['6 wks','Brief to shelf']],
   quote:'They pitched an idea so strange we almost said no. It became our best-performing campaign in nine years.',who:'Sara Ahmed, CMO, Atlas Foods',
   visHTML:'<div class="vis-inner" style="background:radial-gradient(circle at 25% 30%,#5BFA1E 0%,#2E8F08 28%,#0B0C0B 70%);display:grid;place-items:center"><svg viewBox="0 0 200 200" width="42%" opacity=".9"><circle cx="100" cy="100" r="86" fill="none" stroke="#FAFAF6" stroke-width="1" stroke-dasharray="6 10"/><circle cx="100" cy="100" r="52" fill="none" stroke="#5BFA1E" stroke-width="2"/><circle cx="100" cy="100" r="14" fill="#FAFAF6"/></svg></div>',
   bg:'radial-gradient(circle at 70% 30%,#2E8F08 0%,transparent 55%)'},
  {slug:'kayo-fitness',client:'Kayo Fitness',title:'Kayo Fitness: zero to 1.2M followers in 90 days',
   cat:'Social Growth Acceleration',lift:'0 → 1.2M IN 90 DAYS',
   svcs:['social-growth-acceleration','content-creation','copywriting'],
   problem:'A boutique fitness app with world-class coaching and 4,000 followers nobody saw. Great product, invisible brand.',
   idea:'One ownable format: 60-second savage workouts with a hook engineered for the first 1.5 seconds. Posted daily, everywhere, without mercy.',
   exec:'A 90-day saturation sprint across TikTok, Reels and Shorts. An AI-assisted editing pipeline shipping 90+ cuts a month, with trend interception inside hours, not weeks.',
   stats:[['1.2M','Followers in 90 days'],['380M','Total video views'],['+38%','Trial-to-paid lift']],
   quote:'Vertigo moves at a speed I didn\'t think agencies could move at. Concepts on Monday, content live by Friday.',who:'James Whitfield, Founder, Kayo Fitness',
   visHTML:'<div class="vis-inner" style="background:linear-gradient(135deg,#131512,#1B1E1B 55%,#2E8F08);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:900;font-size:clamp(2.4rem,6vw,4.4rem);color:transparent;-webkit-text-stroke:1.5px #5BFA1E">0→1.2M</div></div>',
   bg:'radial-gradient(circle at 30% 60%,#1B1E1B 0%,transparent 60%)'},
  {slug:'orbita',client:'Orbita',title:'Orbita: the product film that explained itself',
   cat:'Video Animations / Content',lift:'11M ORGANIC VIEWS',
   svcs:['video-animations','content-creation','creative-direction'],
   problem:'An AI hardware product nobody could explain in under three minutes. Long demos, glazed eyes, dead waitlist.',
   idea:'Don\'t explain it. Make it feel inevitable. A 90-second product film shot like science fiction and scored like a trailer.',
   exec:'A hybrid 3D + AI VFX pipeline, 14 platform-specific cuts and a seeding plan with 22 tech creators before public launch.',
   stats:[['11M','Organic views'],['140k','Waitlist signups'],['9','Countries trending']],
   quote:'The only partner we\'ve had that treats AI as a craft tool, not a shortcut. The work actually feels more human.',who:'Noor Khan, Brand Lead, Orbita',
   visHTML:'<div class="vis-inner" style="background:conic-gradient(from 200deg at 60% 40%,#FAFAF6,#EAFBDF 30%,#8C918C 60%,#FAFAF6);display:grid;place-items:center"><div style="width:36%;aspect-ratio:1;border-radius:50%;background:#0B0C0B;display:grid;place-items:center;color:#5BFA1E;font-family:var(--mono);font-size:.7rem;letter-spacing:.2em">ORBITA</div></div>',
   bg:'radial-gradient(circle at 65% 40%,#3a4a35 0%,transparent 55%)'},
  {slug:'mona-skincare',client:'Mona Skincare',title:'Mona Skincare: ugly-smart ads, beautiful ROAS',
   cat:'Media Buying / Copywriting',lift:'3.1x BLENDED ROAS',
   svcs:['media-buying','copywriting','content-creation'],
   problem:'Rising CPMs, falling ROAS and an ad account full of pretty creative that won compliments and lost money.',
   idea:'Ugly-smart creative: UGC-first, claim-led, with hooks mined directly from 1,200 customer reviews. Less polish, more proof.',
   exec:'A structured creative testing framework shipping 60 new ads a month, with landing pages rebuilt to match the exact click they came from.',
   stats:[['3.1x','Blended ROAS'],['-44%','Cost per acquisition'],['60','Ads tested monthly']],
   quote:'They killed our favourite ads and we got rich. I\'ve made peace with it.',who:'Lena Farooq, Head of Growth, Mona',
   visHTML:'<div class="vis-inner" style="background:repeating-linear-gradient(45deg,#EAFBDF 0 26px,#FAFAF6 26px 52px);display:grid;place-items:center"><div style="font-family:var(--disp);font-weight:600;font-size:1.5rem;color:#0B0C0B;background:linear-gradient(135deg,#8CFF62,#5BFA1E);padding:.7rem 1.6rem;border-radius:100px;transform:rotate(-4deg)">mona.</div></div>',
   bg:'radial-gradient(circle at 40% 30%,#2E4a22 0%,transparent 55%)'},
  {slug:'paperplane',client:'Paperplane',title:'Paperplane: an identity that helped close $8M',
   cat:'Brand Design / Direction',lift:'IDENTITY IN 6 WEEKS',
   svcs:['brand-design','creative-direction'],
   problem:'A travel startup with a forgettable wordmark, zero visual gravity and a Series A raise eight weeks out.',
   idea:'An identity built on the fold: one crease motif running through logo, type and motion. Simple enough to recognize at 12px, strange enough to remember.',
   exec:'Identity system, motion language and full pitch collateral, designed and delivered in six weeks flat for the raise.',
   stats:[['6 wks','To full identity'],['$8M','Series A closed'],['1','Crease, everywhere']],
   quote:'Investors started meetings by complimenting the deck. That had never happened before.',who:'Omar Siddiqui, CEO, Paperplane',
   visHTML:'<div class="vis-inner" style="background:#0B0C0B;display:grid;place-items:center"><svg viewBox="0 0 240 140" width="62%"><path d="M10 120 L120 18 L150 60 L230 120 Z" fill="none" stroke="#5BFA1E" stroke-width="2"/><path d="M10 120 L120 18 L120 120 Z" fill="#1B1E1B"/><circle cx="120" cy="18" r="5" fill="#FAFAF6"/></svg></div>',
   bg:'radial-gradient(circle at 60% 50%,#1E2A18 0%,transparent 60%)'}
];

const VOICES = [
  {quote:'They pitched an idea so strange we almost said no. It became our best-performing campaign in nine years.',name:'Sara Ahmed',role:'CMO, Atlas Foods',res:'+412% SALES',av:'SA'},
  {quote:'Vertigo moves at a speed I didn\'t think agencies could move at. Concepts on Monday, content live by Friday.',name:'James Whitfield',role:'Founder, Kayo Fitness',res:'0→1.2M IN 90D',av:'JW'},
  {quote:'The only partner we\'ve had that treats AI as a craft tool, not a shortcut. The work actually feels more human.',name:'Noor Khan',role:'Brand Lead, Orbita',res:'11M VIEWS',av:'NK'},
  {quote:'They killed our favourite ads and we got rich. I\'ve made peace with it.',name:'Lena Farooq',role:'Head of Growth, Mona',res:'3.1x ROAS',av:'LF'}
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

