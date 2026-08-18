import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, BriefcaseBusiness, CheckCircle2, ChevronDown, ExternalLink, FileText, Mail, Menu, X, Database, ShieldCheck, Users, BarChart3, Layers3} from 'lucide-react';
import './styles.css';

const work = [
  {
    title:'Danfo Digital Solutions',
    type:'Group Case Study · HubSpot Account Health',
    tag:'Churn Prevention',
    summary:'A last-mile logistics SaaS account showing silent-churn signals one month before renewal.',
    facts:['6 / 22 active users','12% renewal probability','₦1.8M ARR at risk','73 days since CSM check-in'],
    approach:'Interpreted adoption, engagement, sentiment and stakeholder signals; identified champion loss and competitive risk; structured a proactive recovery plan.',
    file:'/work-samples/Danfo_Digital_Solutions_Complete_Report.pdf'
  },
  {
    title:'Champion Resignation Response',
    type:'Individual Assignment · TAM',
    tag:'Account Risk',
    summary:'A 24-hour response framework for an account whose internal product champion has resigned.',
    facts:['Account health review','Stakeholder mapping','Senior stakeholder outreach','Internal escalation'],
    approach:'The response prioritises context first, relationship continuity second, and coordinated internal escalation within the first 24 hours.',
    file:'/work-samples/Goodness_Chizurum_CSM_TAM_Assignment.pdf'
  },
  {
    title:'Pre-boarding Strategy',
    type:'Individual Assignment · Customer Onboarding',
    tag:'Onboarding',
    summary:'A practical view of what must happen before a CRM customer enters the formal onboarding phase.',
    facts:['Stakeholder mapping','Technical readiness','First Value','Risk prevention'],
    approach:'Defines pre-boarding as the point where the CS team establishes strategic clarity, validates technical readiness and prevents avoidable onboarding failure.',
    file:'/work-samples/CSM_Assignment_4_Phase_1_Preboarding.pdf'
  },
  {
    title:'Enterprise Account Recovery — MTN × Dangote',
    type:'Group Project · Enterprise B2B Customer Success',
    tag:'TAM / Enterprise',
    summary:'An enterprise case built around RICE prioritisation, reactive remediation, proactive value and a 30/60/90-day execution roadmap.',
    facts:['₦480M enterprise account','RICE prioritisation','Reactive + proactive tracks','30 / 60 / 90-day roadmap'],
    approach:'Sequences outage remediation before expansion while maintaining the commercial thread, with explicit ownership across CSM and AM responsibilities.',
    file:'/work-samples/MTN_Master_Solution.pdf'
  }
];

const skills = [
  ['Customer Onboarding & Implementation', 'Designing structured journeys from pre-boarding through first value and ongoing adoption.'],
  ['Account Health & Churn Risk', 'Reading usage, engagement, sentiment and stakeholder signals to identify retention risk.'],
  ['Stakeholder Management', 'Mapping champions, decision makers and executive stakeholders to reduce single-threaded accounts.'],
  ['Technical Account Management', 'Translating technical readiness, workflow and governance issues into customer outcomes.'],
  ['CRM & Customer Data', 'HubSpot administration, account records, interaction history and customer health reporting.'],
  ['Reporting & Success Metrics', 'Excel, Power BI and KPI reporting for onboarding progress, engagement and service performance.']
];

const tools = ['HubSpot','Zoho CRM','ChurnZero','Airtable','Gainsight','Zendesk','Intercom','ClickUp','Notion','Miro','Monday.com','Excel','Power BI','Google Sheets','Slack','Microsoft Teams','Zoom'];

function App(){
  const [menu,setMenu]=useState(false);
  const [open,setOpen]=useState(null);
  const nav=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
  return <div className="site">
    <header className="nav"><div className="nav-inner">
      <button className="brand" onClick={()=>nav('home')} aria-label="Home"><span>GCN</span><small>CSM · TAM</small></button>
      <nav className={menu?'nav-links open':'nav-links'}>
        {['about','experience','work','skills','contact'].map(x=><button key={x} onClick={()=>nav(x)}>{x==='work'?'Case Studies':x[0].toUpperCase()+x.slice(1)}</button>)}
      </nav>
      <div className="nav-actions"><a href="mailto:Goodnesschizurum41@gmail.com" className="nav-cta">Let's connect <ArrowRight size={16}/></a><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    </div></header>

    <main>
      <section id="home" className="hero"><div className="container hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status"></span> CUSTOMER SUCCESS · ONBOARDING · TAM</div>
          <h1>Turning customer complexity into <em>clear outcomes.</em></h1>
          <p className="hero-lead">I'm <strong>Goodness Chizurum Nwafor</strong>, a Customer Success and Onboarding professional focused on adoption, retention, account health and practical customer enablement.</p>
          <div className="hero-actions"><button className="primary" onClick={()=>nav('work')}>Explore my work <ArrowRight size={18}/></button><a className="secondary" href="/Goodness_Nwafor_CSM_Resume_Final.pdf" target="_blank">View résumé <ExternalLink size={16}/></a></div>
          <div className="proof"><div><strong>98%</strong><span>on-time resolution</span></div><div><strong>50%</strong><span>customer satisfaction improvement</span></div><div><strong>3+</strong><span>years customer-facing experience</span></div></div>
        </div>
        <div className="hero-card"><div className="card-glow"></div><div className="profile-mark">GCN</div><p className="card-label">CUSTOMER SUCCESS PROFILE</p><h2>Proactive. Data-informed. Outcome-oriented.</h2><div className="signal"><span>01</span><div><b>Health</b><small>Usage · sentiment · risk</small></div></div><div className="signal"><span>02</span><div><b>Adoption</b><small>Enablement · first value</small></div></div><div className="signal"><span>03</span><div><b>Retention</b><small>Stakeholders · value · renewal</small></div></div></div>
      </div></section>

      <section className="metrics"><div className="container metric-grid"><div><span>FOCUS</span><strong>Customer lifecycle</strong><p>From pre-boarding to retention.</p></div><div><span>METHOD</span><strong>Evidence → action</strong><p>Health signals inform priorities.</p></div><div><span>STYLE</span><strong>Human + structured</strong><p>Clear communication with disciplined follow-through.</p></div></div></section>

      <section id="about" className="section"><div className="container two-col"><div><p className="section-kicker">01 · ABOUT</p><h2>Customer success is not just support. It is the work of making value visible.</h2></div><div className="body-copy"><p>My approach combines customer empathy with structured execution: understand the customer's desired outcomes, map the stakeholders, validate readiness, monitor health signals and act before risk becomes churn.</p><p>My portfolio demonstrates practical work across onboarding, customer health, churn prevention, stakeholder management, technical administration and enterprise account strategy.</p><div className="quote">“A CSM moves beyond a transactional relationship and becomes a true partner in the customer's business.”<span>— portfolio learning material</span></div></div></div></section>

      <section id="experience" className="section section-dark"><div className="container"><p className="section-kicker">02 · EXPERIENCE</p><div className="experience-head"><h2>Built around the customer lifecycle.</h2><p>Professional experience supported by practical training and case-based work.</p></div><div className="timeline">
        <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">NOV 2023 — PRESENT</div><h3>Customer Success & Onboarding Specialist <span>· IPI Power Tech</span></h3><p>Managed onboarding lifecycle, service requests, escalations and account queries; maintained onboarding documentation and SOPs; built Excel and Power BI dashboards; administered HubSpot CRM; coordinated technical, operations and leadership stakeholders.</p></div>
        <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">JUN 2021 — MAR 2022</div><h3>Client Success Associate & Account Coordinator</h3><p>Coordinated post-sale onboarding sequences, handled customer inquiries and support tickets within SLA, maintained HubSpot account data and drafted client-facing communications supporting retention and engagement.</p></div>
        <div className="timeline-item"><div className="timeline-dot"></div><div className="timeline-meta">2018 — 2021</div><h3>Customer Experience Coordinator & Stakeholder Liaison <span>· University of Agriculture, Makurdi</span></h3><p>Managed stakeholder inquiries and complaints, coordinated onboarding and orientation programmes, maintained institutional records and facilitated training seminars and workshops.</p></div>
      </div></div></section>

      <section id="work" className="section"><div className="container"><div className="section-top"><div><p className="section-kicker">03 · SELECTED WORK</p><h2>Evidence of how I think.</h2></div><p>These are presented as training assignments, case studies and work samples. Individual and group work are clearly identified.</p></div><div className="work-grid">{work.map((item,i)=><article className="work-card" key={item.title}><div className="work-top"><span className="tag">{item.tag}</span><span className="index">0{i+1}</span></div><h3>{item.title}</h3><p className="type">{item.type}</p><p>{item.summary}</p><div className="facts">{item.facts.map(f=><span key={f}><CheckCircle2 size={14}/>{f}</span>)}</div><button className="read-btn" onClick={()=>setOpen(i)}>Read case <ArrowRight size={16}/></button></article>)}</div></div></section>

      <section id="skills" className="section soft"><div className="container"><div className="section-top"><div><p className="section-kicker">04 · CAPABILITIES</p><h2>What I bring to a CS team.</h2></div></div><div className="skills-grid">{skills.map(([t,d],i)=>{const Icon=[Users,ShieldCheck,Layers3,Database,BarChart3,BriefcaseBusiness][i]; return <div className="skill" key={t}><Icon size={21}/><h3>{t}</h3><p>{d}</p></div>})}</div><div className="tools"><p>TOOLS & PLATFORMS</p><div>{tools.map(t=><span key={t}>{t}</span>)}</div></div></div></section>

      <section className="section education">
  <div className="container education-grid">

    <div>
      <p className="section-kicker">05 · EDUCATION & CERTIFICATION</p>
      <h2>Continuous learning, applied practically.</h2>
    </div>

    <div className="edu-list">

      <div>
        <b>
          Customer Success Manager / Technical Account Manager & Client
          Onboarding Certification
        </b>
        <span>Digital Witch IT Support · 2024</span>

        <a
          className="certificate-link"
          href="/Goodness%20Chizurum%20Nwafor%20csm%20Certificate.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View CSM Certificate <ExternalLink size={14} />
        </a>
      </div>

      <div>
        <b>B.Sc. Biochemistry</b>
        <span>University of Agriculture, Makurdi · 2014–2018</span>
      </div>

      <div>
        <b>IT Support Certification</b>
        <span>Digital Witch Support Community · 2023</span>

        <a
          className="certificate-link"
          href="/Goodness%20Chizurum%20Nwafor%20Virtual%20Assistant%20certificate.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View IT Support Certificate <ExternalLink size={14} />
        </a>
      </div>

      <div>
        <b>Data Entry & Virtual Assistant Certification</b>
        <span>Moon's Virtual Academy · 2023</span>

        <a
          className="certificate-link"
          href="/MVA3.0%20Bootcamp%20Certificates-images-0.jpg"
          target="_blank"
          rel="noreferrer"
        >
          View MVA Certificate <ExternalLink size={14} />
        </a>
      </div>

    </div>
  </div>
</section>
      <section id="contact" className="contact"><div className="container contact-inner"><div><p className="section-kicker">06 · CONTACT</p><h2>Let's build better customer experiences.</h2><p>Open to Customer Success, Onboarding and Technical Account Management opportunities.</p></div><div className="contact-links"><a href="mailto:Goodnesschizurum41@gmail.com"><Mail size={20}/><span>Email me</span><ArrowRight/></a><a href="https://linkedin.com/in/goodness-nwafor" target="_blank" rel="noreferrer"><span style={{fontWeight:800,fontSize:'18px'}}>in</span><span>LinkedIn</span><ArrowRight/></a></div></div></section>
    </main>

    <footer><div className="container footer-inner"><span>© 2026 Goodness Chizurum Nwafor</span><span>Customer Success · Onboarding · TAM</span></div></footer>

    {open!==null && <div className="modal-backdrop" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setOpen(null)}><X/></button><span className="tag">{work[open].tag}</span><h2>{work[open].title}</h2><p className="type">{work[open].type}</p><p>{work[open].summary}</p><h4>Approach</h4><p>{work[open].approach}</p><div className="facts modal-facts">{work[open].facts.map(f=><span key={f}><CheckCircle2 size={14}/>{f}</span>)}</div><a className="primary modal-link" href={work[open].file} target="_blank">Open full work sample <FileText size={17}/></a></div></div>}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
