import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, BriefcaseBusiness, CheckCircle2, ExternalLink, FileText, Mail, Menu, X, Database, ShieldCheck, Users, BarChart3, Layers3, PlayCircle, Download} from 'lucide-react';
import './styles.css';

const work = [
  {title:'Danfo Digital Solutions',type:'Group Case Study · HubSpot Account Health',tag:'Churn Prevention',summary:'A last-mile logistics SaaS account showing silent-churn signals one month before renewal.',facts:['6 / 22 active users','12% renewal probability','₦1.8M ARR at risk (~$1,335 USD)','73 days since CSM check-in'],approach:'Interpreted adoption, engagement, sentiment and stakeholder signals; identified champion loss and competitive risk; structured a proactive recovery plan.',file:'/work-samples/Danfo_Digital_Solutions_Complete_Report.pdf'},
  {title:'Champion Resignation Response',type:'Individual Assignment · TAM',tag:'Account Risk',summary:'A 24-hour response framework for an account whose internal product champion has resigned.',facts:['24-hour response plan','4 stakeholder groups','3 recovery tracks','30-day stabilization'],approach:'The response prioritises context first, relationship continuity second, and coordinated internal escalation within the first 24 hours.',file:'/work-samples/Goodness_Chizurum_CSM_TAM_Assignment.pdf'},
  {title:'Pre-boarding Strategy',type:'Individual Assignment · Customer Onboarding',tag:'Onboarding',summary:'A practical view of what must happen before a CRM customer enters the formal onboarding phase.',facts:['4 pre-boarding phases','3 readiness checks','2 stakeholder maps','1 first-value plan'],approach:'Defines pre-boarding as the point where the CS team establishes strategic clarity, validates technical readiness and prevents avoidable onboarding failure.',file:'/work-samples/CSM_Assignment_4_Phase_1_Preboarding.pdf'},
  {title:'Enterprise Account Recovery — MTN × Dangote',type:'Group Project · Enterprise B2B Customer Success',tag:'TAM / Enterprise',simulated:true,summary:'An enterprise case built around RICE prioritisation, reactive remediation, proactive value and a 30/60/90-day execution roadmap.',facts:['₦480M enterprise account (~$355,600 USD)','RICE prioritisation','Reactive + proactive tracks','30 / 60 / 90-day roadmap'],approach:'Sequences outage remediation before expansion while maintaining the commercial thread, with explicit ownership across CSM and AM responsibilities.',file:'/work-samples/MTN_Master_Solution.pdf'}
];

const skills = [
  ['Customer Onboarding & Implementation','Designing structured journeys from pre-boarding through first value and ongoing adoption.'],
  ['Account Health & Churn Risk','Reading usage, engagement, sentiment and stakeholder signals to identify retention risk.'],
  ['Stakeholder Management','Mapping champions, decision makers and executive stakeholders to reduce single-threaded accounts.'],
  ['Technical Account Management','Translating technical readiness, workflow and governance issues into customer outcomes.'],
  ['CRM & Customer Data','HubSpot administration, account records, interaction history and customer health reporting.'],
  ['Reporting & Success Metrics','Excel, Power BI and KPI reporting for onboarding progress, engagement and service performance.']
];

const tools=['HubSpot','Zoho CRM','ChurnZero','Airtable','Gainsight','Zendesk','Intercom','ClickUp','Notion','Miro','Monday.com','Excel','Power BI','Google Sheets','Slack','Microsoft Teams','Zoom'];

const aboutText=[
  "My path into customer success wasn't linear, and that's exactly what makes me good at it. I've sat on the technical side of the house—service desk, NOC monitoring, data analysis—where I learned to read systems, spot anomalies, and translate \"something feels off\" into a ticket, a root cause, and a fix. I've also sat closer to the relationship—onboarding new users, managing executive priorities, running academic operations—where I learned that adoption isn't a checkbox; it's a habit you have to build with someone.",
  "That combination is what I bring to every account: the technical fluency to understand what's actually happening under the hood and the relationship instincts to know what a customer needs to hear—and when.",
  "I think about Customer Success the way it was meant to be practiced: not as support with a friendlier title, but as a discipline built on onboarding frameworks that get customers to first value fast, health scoring that catches risk before it becomes churn, and QBRs that prove ROI instead of just reporting activity. I care about NRR and expansion because they're the honest scorecard of whether a customer actually got what they came for.",
  "I hold a certification in CSM/TAM practice, a B.Sc. in Biochemistry that trained me to think in root causes rather than symptoms, and a background across data, design, and operations that means I can speak to an engineer, a VP, and an end user in the same afternoon—in each of their own languages."
];

function App(){
 const [menu,setMenu]=useState(false); const [open,setOpen]=useState(null);
 const nav=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 return <div className="site">
  <header className="nav"><div className="nav-inner">
   <button className="brand" onClick={()=>nav('home')} aria-label="Home"><span>GCN</span><small>CSM · TAM</small></button>
   <nav className={menu?'nav-links open':'nav-links'}>
    <button onClick={()=>nav('about')}>About</button><button onClick={()=>nav('experience')}>Experience</button><button onClick={()=>nav('work')}>Case Studies</button><button onClick={()=>nav('skills')}>Skills</button><a href="/Goodness_Nwafor_CSM_Resume_Final.pdf" target="_blank" rel="noreferrer">Resume</a><button onClick={()=>nav('contact')}>Contact</button>
   </nav>
   <div className="nav-actions"><a href="mailto:Goodnesschizurum41@gmail.com" className="nav-cta">Let's connect <ArrowRight size={16}/></a><button className="menu-btn" onClick={()=>setMenu(!menu)} aria-label="Toggle menu">{menu?<X/>:<Menu/>}</button></div>
  </div></header>

  <main>
   <section id="home" className="hero"><div className="container hero-grid">
    <div className="hero-copy"><div className="eyebrow"><span className="status"></span>CUSTOMER SUCCESS · ONBOARDING · TAM</div>
     <h1>I help customers <em>adopt, stay and grow.</em></h1>
     <p className="hero-lead">I'm <strong>Goodness Chizurum Nwafor</strong>, a Customer Success professional combining technical fluency, customer empathy and structured execution to help customers adopt, stay and grow.</p>
     <div className="hero-actions"><button className="primary" onClick={()=>nav('meet-me')}>Meet me <ArrowRight size={18}/></button><a className="secondary" href="/Goodness_Nwafor_CSM_Resume_Final.pdf" target="_blank" rel="noreferrer">View résumé <FileText size={16}/></a></div>
     <div className="hero-proof-label">WHAT I FOCUS ON</div><div className="proof"><div><strong>Onboard</strong><span>Readiness · enablement · first value</span></div><div><strong>Understand</strong><span>Usage · sentiment · stakeholders</span></div><div><strong>Act</strong><span>Risk · adoption · retention</span></div></div>
    </div>
   <div className="hero-card">
  <div className="card-glow"></div>

  <img
    className="profile-photo"
    src="/profile-headshot.jpg"
    alt="Goodness Chizurum Nwafor"
  />

  <p className="card-label">
    CUSTOMER SUCCESS PROFILE
  </p>

  <h2>
    Signals before symptoms.
    Systems before scripts.
    Outcomes before excuses.
  </h2>CUSTOMER SUCCESS PROFILE</p><h2>Signals before symptoms.
Systems before scripts.
Outcomes before excuses.</h2>
     <div className="signal"><span>01</span><div><b>Onboard</b><small>Readiness · enablement · first value</small></div></div><div className="signal"><span>02</span><div><b>Understand</b><small>Usage · sentiment · stakeholders</small></div></div><div className="signal"><span>03</span><div><b>Act</b><small>Risk · adoption · retention</small></div></div>
     <div className="card-footer"><span>OPEN TO OPPORTUNITIES</span><a href="mailto:Goodnesschizurum41@gmail.com">Start a conversation <ArrowRight size={14}/></a></div>
    </div>
   </div></section>

   <section className="metrics"><div className="container metric-grid"><div><span>FOCUS</span><strong>Customer lifecycle</strong><p>From pre-boarding to retention.</p></div><div><span>METHOD</span><strong>Evidence → action</strong><p>Health signals inform priorities.</p></div><div><span>STYLE</span><strong>Human + structured</strong><p>Clear communication with disciplined follow-through.</p></div></div></section>

   <section id="meet-me" className="section meet-me"><div className="container meet-grid"><div><p className="section-kicker">MEET ME</p><h2>A quick hello, before the résumé.</h2><p className="meet-copy">60 seconds on how I think about customer success — no script, just how I actually work.</p><div className="meet-photo-wrap"><img src="/meet-me-photo.jpg" alt="Goodness Chizurum Nwafor working at a desk"/></div></div><div className="video-card"><video controls preload="metadata" poster="/meet-me-photo.jpg"><source src="/meet-me.mp4" type="video/mp4"/>Your browser does not support the video element.</video><div className="video-placeholder"><PlayCircle size={22}/><span>Meet Me video will appear here when the video file is uploaded.</span></div></div></div></section>

   <section id="about" className="section"><div className="container two-col"><div><p className="section-kicker">01 · ABOUT ME</p><h2>I don't wait for the health score to turn red. I watch for the signals before the dashboard does.</h2></div><div className="body-copy">{aboutText.map(p=><p key={p}>{p}</p>)}<div className="quote">“Customer Success is not support with a friendlier title. It is the discipline of making customer value visible, measurable and repeatable.”</div><p className="about-cta"><strong>Curious what this looks like in practice?</strong> Check out my case studies below—or reach out and let's talk about your customers.</p></div></div></section>

   <section id="experience" className="section section-dark"><div className="container"><p className="section-kicker">02 · EXPERIENCE</p><div className="experience-head"><h2>Built around the customer lifecycle.</h2><p>Professional experience supported by practical training and case-based work.</p></div><div className="timeline">
    <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">NOV 2023 — PRESENT</div><h3>Customer Success & Onboarding Specialist <span>· <a href="https://www.ipi.ng/" target="_blank" rel="noreferrer">IPI Power Tech</a></span></h3><p className="company-context">Enterprise technology and digital transformation within IPI Group, a Nigerian-owned group serving corporate clients across Africa.</p><p>Managed onboarding lifecycle, service requests, escalations and account queries; maintained onboarding documentation and SOPs; built Excel and Power BI dashboards; administered HubSpot CRM; coordinated technical, operations and leadership stakeholders.</p></div>
    <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">JUN 2021 — MAR 2022</div><h3>Client Success Associate & Account Coordinator</h3><p>Coordinated post-sale onboarding sequences, handled customer inquiries and support tickets within SLA, maintained HubSpot account data and drafted client-facing communications supporting retention and engagement.</p></div>
    <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">2018 — 2021</div><h3>Customer Experience Coordinator & Stakeholder Liaison <span>· University of Agriculture, Makurdi</span></h3><p>Managed stakeholder inquiries and complaints, coordinated onboarding and orientation programmes, maintained institutional records and facilitated training seminars and workshops.</p></div>
   </div></div></section>

   <section id="work" className="section"><div className="container"><div className="section-top"><div><p className="section-kicker">03 · SELECTED WORK</p><h2>Evidence of how I think.</h2></div><p>These are presented as training assignments, case studies and work samples. Individual and group work are clearly identified.</p></div><div className="work-grid">{work.map((item,i)=><article className="work-card" key={item.title}><div className="work-top"><span className="tag">{item.tag}</span><span className="index">0{i+1}</span></div>{item.simulated&&<div className="simulated">Simulated case study — certification training exercise.</div>}<h3>{item.title}</h3><p className="type">{item.type}</p><p>{item.summary}</p><div className="facts">{item.facts.map(f=><span key={f}><CheckCircle2 size={14}/>{f}</span>)}</div><button className="read-btn" onClick={()=>setOpen(i)}>Read case <ArrowRight size={16}/></button></article>)}</div></div></section>

   <section className="section testimonials"><div className="container"><div className="section-top"><div><p className="section-kicker">RECOMMENDATIONS</p><h2>What people say.</h2></div><p>Placeholder structure for recommendations from managers, colleagues and collaborators.</p></div><div className="testimonial-grid"><article><div className="quote-mark">“</div><p>Goodness brings structure to complex customer situations and follows through until the outcome is clear.</p><b>Manager / Team Lead</b><span>Professional reference</span></article><article><div className="quote-mark">“</div><p>She combines customer empathy with strong operational discipline and communicates clearly across teams.</p><b>Colleague</b><span>Cross-functional collaborator</span></article><article><div className="quote-mark">“</div><p>A thoughtful customer advocate who understands both the human relationship and the systems behind it.</p><b>Stakeholder</b><span>Customer-facing collaboration</span></article></div></div></section>

   <section id="skills" className="section soft"><div className="container"><div className="section-top"><div><p className="section-kicker">04 · SKILLS</p><h2>What I bring to a CS team.</h2></div></div><div className="skills-grid">{skills.map(([t,d],i)=>{const Icon=[Users,ShieldCheck,Layers3,Database,BarChart3,BriefcaseBusiness][i];return <div className="skill" key={t}><Icon size={21}/><h3>{t}</h3><p>{d}</p></div>})}</div><div className="tools"><p>TOOLS & PLATFORMS</p><div>{tools.map(t=><span key={t}>{t}</span>)}</div></div></div></section>

   <section className="section frameworks"><div className="container"><div className="section-top"><div><p className="section-kicker">TOOLS I USE & SHARE</p><h2>Templates & Frameworks.</h2></div><p>Practical resources for onboarding, account health and customer planning. Resource links can be replaced with the final files later.</p></div><div className="framework-grid"><article><FileText size={22}/><h3>QBR Template</h3><p>A structured agenda for reviewing outcomes, adoption, risks and next-quarter priorities.</p><span className="coming-soon"><Download size={14}/> Coming soon</span></article><article><BarChart3 size={22}/><h3>Customer Health-Scoring Rubric</h3><p>A practical framework for combining product usage, engagement, sentiment and stakeholder signals.</p><span className="coming-soon"><Download size={14}/> Coming soon</span></article><article><Layers3 size={22}/><h3>Onboarding Checklist</h3><p>A readiness-to-first-value checklist designed to reduce avoidable onboarding friction.</p><span className="coming-soon"><Download size={14}/> Coming soon</span></article></div></div></section>

   <section className="section education"><div className="container education-grid"><div><p className="section-kicker">05 · EDUCATION & CERTIFICATION</p><h2>Continuous learning, applied practically.</h2></div><div className="edu-list">
    <div><b>Customer Success Manager / Technical Account Manager & Client Onboarding Certification</b><span>Digital Witch IT Support · 2024</span><a className="certificate-link" href="/Goodness%20Chizurum%20Nwafor%20csm%20Certificate.pdf" target="_blank" rel="noreferrer">View CSM Certificate <ExternalLink size={14}/></a></div>
    <div><b>B.Sc. Biochemistry</b><span>University of Agriculture, Makurdi · 2014–2018</span></div>
    <div><b>IT Support Certification</b><span>Digital Witch Support Community · 2023</span><a className="certificate-link" href="/Goodness%20Chizurum%20Nwafor%20Virtual%20Assistant%20certificate.pdf" target="_blank" rel="noreferrer">View IT Support Certificate <ExternalLink size={14}/></a></div>
    <div><b>Data Entry & Virtual Assistant Certification</b><span>Moon's Virtual Academy · 2023</span><a className="certificate-link" href="/MVA3.0%20Bootcamp%20Certificates-images-0.jpg" target="_blank" rel="noreferrer">View MVA Certificate <ExternalLink size={14}/></a></div>
   </div></div></section>

   <section id="contact" className="contact"><div className="container contact-inner"><div><p className="section-kicker">06 · CONTACT</p><h2>Let's build better customer experiences.</h2><p>Open to Customer Success, Onboarding and Technical Account Management opportunities.</p></div><div className="contact-links"><a href="mailto:Goodnesschizurum41@gmail.com"><Mail size={20}/><span>Email me</span><ArrowRight/></a><a href="https://linkedin.com/in/goodness-nwafor" target="_blank" rel="noreferrer"><span style={{fontWeight:800,fontSize:'18px'}}>in</span><span>LinkedIn</span><ArrowRight/></a></div></div></section>
  </main>
  <footer><div className="container footer-inner"><span>© 2026 Goodness Chizurum Nwafor</span><span>Customer Success · Onboarding · TAM</span></div></footer>
  {open!==null&&<div className="modal-backdrop" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setOpen(null)}><X/></button><span className="tag">{work[open].tag}</span>{work[open].simulated&&<div className="simulated modal-simulated">Simulated case study — certification training exercise.</div>}<h2>{work[open].title}</h2><p className="type">{work[open].type}</p><p>{work[open].summary}</p><h4>Approach</h4><p>{work[open].approach}</p><div className="facts modal-facts">{work[open].facts.map(f=><span key={f}><CheckCircle2 size={14}/>{f}</span>)}</div><a className="primary modal-link" href={work[open].file} target="_blank" rel="noreferrer">Open full work sample <FileText size={17}/></a></div></div>}
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
