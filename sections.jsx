// sections.jsx — features, industries, security, testimonials, pricing, FAQ, footer

const { useState: useStateS } = React;

/* ── Features grid ──────────────────────────────────────────── */
function Features() {
  const items = [
    { icon: 'file',     title: 'Document drafting & analysis',
      body: 'SOAP notes, referral letters, intake summaries, prior auths — drafted in your voice from charts you already have.' },
    { icon: 'chat',     title: 'Secure chat on internal data',
      body: 'Ask anything about your patients, policies or files. Okrana reads your tenant — never the open internet.' },
    { icon: 'workflow', title: 'Intake & triage automations',
      body: 'New patient forms get routed, summarized and pre-charted before anyone clicks. No more transcription.' },
    { icon: 'waves',    title: 'Meeting & email summaries',
      body: 'Daily standup, RCM review, faxed insurance updates — pulled into one place every morning.' },
    { icon: 'badge',    title: 'Compliance audit & reporting',
      body: 'Continuous PHI scan across SMS, email and chart notes. Quarterly reports your compliance officer can sign.' },
    { icon: 'book',     title: 'Custom-trained on your practice',
      body: 'Your protocols, your billing rules, your formulary. Okrana learns how your clinic actually works.' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><span className="dot"></span>What Okrana does, all day</span>
          <h2 className="h1">A teammate that never sleeps, <span className="h-italic">never leaks.</span></h2>
        </div>
        <div className="grid-3">
          {items.map(it => (
            <div className="card" key={it.title}>
              <span className="card__icon"><Icon name={it.icon} size={18} stroke={1.6} /></span>
              <h3 className="card__title">{it.title}</h3>
              <p className="card__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Industry use cases (tabs) ──────────────────────────────── */
const INDUSTRIES = [
  {
    id: 'med',
    name: 'Medical clinics',
    desc: 'Primary care, specialty, urgent care',
    meta: 'PRIMARY USE CASE',
    head: 'Chart faster. Document properly. Get to lunch.',
    points: [
      'Auto-drafted SOAP notes from the visit summary',
      'Patient-friendly explanations at the right reading level',
      'Pre-charting from intake forms before the patient walks in',
      'Insurance prior-auth letters in 90 seconds, not 90 minutes',
      'PHI never leaves your Azure tenant — BAA on day one',
    ],
    visual: 'med',
  },
  {
    id: 'law',
    name: 'Law firms',
    desc: 'Solo to mid-size, especially regulated practice',
    meta: 'PRIVILEGED & PRIVATE',
    head: 'Privilege you can prove.',
    points: [
      'Document review across thousands of files without leaving your tenant',
      'Deposition prep with citations to the exact source page',
      'Auto-redact client identifiers before any external share',
      'Audit trail for every query — privilege defensible at deposition',
      'On-prem deployment option for the most sensitive matters',
    ],
    visual: 'law',
  },
  {
    id: 'fin',
    name: 'Financial advisors',
    desc: 'RIAs, family offices, CPAs',
    meta: 'SUITABILITY & SOC 2',
    head: 'Suitability notes, written for you.',
    points: [
      'Client meeting summaries with action items, suitability notes captured',
      'Plain-English explainers of complex products for clients',
      'Books-and-records-ready storage with full audit trail',
      'Quarterly reviews drafted from your CRM + custodian data',
    ],
    visual: 'fin',
  },
  {
    id: 'dent',
    name: 'Dental & specialty',
    desc: 'Dental, orthodontic, chiropractic, derm',
    meta: 'CHAIR-SIDE READY',
    head: 'The chairside scribe that listens.',
    points: [
      'Dictation that turns into a charted note before you wash your hands',
      'Treatment plan letters drafted in the patient’s language',
      'Recall and reactivation messaging tuned to your tone',
    ],
    visual: 'med',
  },
];

function UseCases() {
  const [active, setActive] = useStateS('med');
  const cur = INDUSTRIES.find(i => i.id === active);
  return (
    <section className="section" id="industries" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><span className="dot"></span>Built for regulated work</span>
          <h2 className="h1">Made for the practices <span className="h-italic">that can’t afford a leak.</span></h2>
        </div>

        <div className="uc">
          <div className="uc__tabs" role="tablist">
            {INDUSTRIES.map(i => (
              <button
                key={i.id}
                role="tab"
                aria-selected={active === i.id}
                className="uc__tab"
                onClick={() => setActive(i.id)}
              >
                <span className="tname">{i.name}</span>
                <span className="tdesc">{i.desc}</span>
              </button>
            ))}
          </div>

          <div className="uc__panel">
            <div>
              <span className="meta">{cur.meta}</span>
              <h3 className="h2">{cur.head}</h3>
              <ul>
                {cur.points.map(p => (
                  <li key={p}>
                    <Icon name="check" size={16} stroke={2} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <UseCaseVisual variant={cur.visual} />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCaseVisual({ variant }) {
  if (variant === 'med') {
    return (
      <div className="uc__visual">
        <span className="mono" style={{ color: 'var(--ink-3)' }}>chart_draft.md · live</span>
        <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 10, padding: 14, fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', flex: 1 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', marginBottom: 8 }}>SUBJECTIVE</div>
          <p style={{ margin: 0 }}>47F w/ T2DM, c/o fatigue × 3 wks, R hallux ulcer not healing × 5 d. Denies fever, chills.</p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', margin: '12px 0 8px' }}>OBJECTIVE</div>
          <p style={{ margin: 0 }}>A1C <strong>7.4%</strong> (↓ 8.4%), BP 132/86, T 98.4°F. R hallux 1.5 cm Wagner Gr 2.</p>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--ink-3)', margin: '12px 0 8px' }}>ASSESSMENT</div>
          <p style={{ margin: 0 }}>1) T2DM, improving control. 2) Diabetic foot ulcer<span className="cursor"></span></p>
        </div>
        <div className="mono" style={{ color: 'var(--leaf)', fontSize: 11 }}>✓ written to chart · Maria Chen · 05/22</div>
      </div>
    );
  }
  if (variant === 'law') {
    return (
      <div className="uc__visual">
        <span className="mono" style={{ color: 'var(--ink-3)' }}>case · matters/4827 · privilege scan</span>
        {['Confidential settlement memo', 'Client engagement letter', 'Deposition transcript — vol 2', 'Expert witness CV', 'Internal strategy memo']
          .map((t, i) => (
            <div key={t} style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 8, padding: '10px 12px', fontSize: 13, display: 'flex', justifyContent: 'space-between', color: 'var(--ink-2)' }}>
              <span>{t}</span>
              <span className="mono" style={{ color: 'var(--leaf)', fontSize: 11 }}>{i === 4 ? 'PRIVILEGED' : 'on tenant'}</span>
            </div>
          ))}
      </div>
    );
  }
  return (
    <div className="uc__visual">
      <span className="mono" style={{ color: 'var(--ink-3)' }}>q2 review · 18 clients</span>
      <div style={{ background: 'white', border: '1px solid var(--line)', borderRadius: 10, padding: 14, fontSize: 13, color: 'var(--ink-2)', flex: 1 }}>
        <p style={{ margin: '0 0 10px' }}>Hi <strong>Mr. Garcia</strong>,</p>
        <p style={{ margin: '0 0 10px' }}>Quick recap of our June check-in: your retirement glide path is on schedule, and we’ve trimmed the energy overweight as discussed.</p>
        <p style={{ margin: 0 }}>Action items on my side: rebalance the 529 by July 1, and revisit the umbrella policy at our August call<span className="cursor"></span></p>
      </div>
    </div>
  );
}

/* ── Security & compliance ──────────────────────────────────── */
function Security() {
  const items = [
    { icon: 'azure',  h: 'Hosted in your Azure tenant', p: 'Okrana runs inside an isolated Azure subscription you control. We can deploy into your existing tenant if you have one, or set you up with a dedicated one in 48 hours.' },
    { icon: 'lock',   h: 'Zero data retention',           p: 'Prompts and responses are flushed after each session. No training on your data — ever. Period.' },
    { icon: 'shield', h: 'BAA included on day one',       p: 'Business Associate Agreement is part of the standard contract, not a six-month enterprise negotiation.' },
    { icon: 'eye',    h: 'Full audit log',                p: 'Every prompt, every retrieval, every export — captured, timestamped, exportable for your compliance officer.' },
    { icon: 'server', h: 'On-prem option',                p: 'For the most sensitive practices, run Okrana entirely behind your firewall on hardware we ship and support.' },
    { icon: 'badge',  h: 'SOC 2 Type II',                 p: 'Annual audit by an independent firm. Reports available under NDA.' },
  ];
  return (
    <section className="section section--dark" id="security">
      <div className="container sec-grid">
        <div>
          <span className="eyebrow"><span className="dot"></span>Security & compliance</span>
          <h2 className="h1" style={{ marginTop: 14 }}>
            We built Okrana the way <span className="h-italic">a hospital would.</span>
          </h2>
          <p className="lede" style={{ color: 'rgba(246,244,239,.78)', marginTop: 14 }}>
            Most AI vendors bolt on “HIPAA mode” after the fact. We started with the BAA, then designed the product. Here’s what that actually means in practice:
          </p>

          <div className="sec-list">
            {items.map(i => (
              <div key={i.h} className="sec-item">
                <span className="icon"><Icon name={i.icon} size={20} stroke={1.6} /></span>
                <div>
                  <h4>{i.h}</h4>
                  <p>{i.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="diag">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong style={{ color: 'var(--accent-ink)', letterSpacing: '.04em' }}>// tenant diagnostic</strong>
              <span style={{ color: 'rgba(246,244,239,.5)' }}>clinic-az-7 · live</span>
            </div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Azure region</span><span className="val">westus2 · single-tenant</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Data retention</span><span className="val">0 days</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">BAA status</span><span className="val">active · v3.2</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Encryption</span><span className="val">AES-256 · TLS 1.3</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">External egress</span><span className="val">blocked</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Training on your data</span><span className="val">never</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Audit log</span><span className="val">streaming → splunk</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">PHI access controls</span><span className="val">RBAC + MFA</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Insurance (cyber)</span><span className="val">$5M · AZ-licensed</span></div>
            <div className="diag__row"><span className="dot ok"></span><span className="label">Support</span><span className="val">Scottsdale, 85260 · 24/7</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ───────────────────────────────────────────── */
function Testimonials() {
  const qs = [
    { q: 'We finished a SOC 2 audit in three weeks because the audit trail was already in there. I’ve never seen software help me with paperwork before.', n: 'Dr. Lena Rivas, DO', t: 'Medical director · Sunrise Family Medicine', av: 'LR' },
    { q: 'The team uses Okrana for everything — chart drafts, intake summaries, even drafting recall texts. ChatGPT got banned, and nobody complained because Okrana is just… better at what we actually do.', n: 'Priya Shah', t: 'Practice manager · Mesa OB-GYN', av: 'PS' },
    { q: 'I sleep at night knowing our PHI hasn’t left the tenant. That’s worth the whole subscription.', n: 'Marcus Hale', t: 'CPO · Hale & Burrows LLP', av: 'MH' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><span className="dot"></span>Trusted by practices that can’t afford to wing it</span>
          <h2 className="h1">Quiet software. <span className="h-italic">Loud results.</span></h2>
        </div>
        <div className="grid-3">
          {qs.map(q => (
            <div className="quote-card" key={q.n}>
              <blockquote>“{q.q}”</blockquote>
              <div className="who">
                <span className="av">{q.av}</span>
                <div>
                  <div className="name">{q.n}</div>
                  <div className="title">{q.t}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ─────────────────────────────────────────────────── */
function Pricing() {
  const tiers = [
    {
      tier: 'Solo',
      amount: '$249',
      cadence: '/seat/mo',
      desc: 'For independent providers and 1–3 person clinics getting AI into their workflow.',
      cta: 'Start a 14-day trial',
      feats: [
        'Up to 3 seats',
        '5,000 AI tasks / month',
        'Chart drafting, intake, summaries',
        'BAA + SOC 2 reports included',
        'Email support',
      ],
    },
    {
      tier: 'Practice',
      amount: '$899',
      cadence: '/mo · up to 12 seats',
      desc: 'For established clinics that want Okrana embedded in their daily workflow.',
      cta: 'Book a demo',
      feats: [
        'Up to 12 seats, $79 each thereafter',
        'Unlimited AI tasks',
        'EHR + intake form integrations',
        'Custom training on your protocols',
        'Compliance audit dashboard',
        'Priority support · 4-hour SLA',
      ],
      feat: true,
    },
    {
      tier: 'Tenant',
      amount: 'Custom',
      cadence: 'annual',
      desc: 'Multi-location practices, on-prem deployments, or anyone who needs a dedicated Azure tenant.',
      cta: 'Talk to founders',
      feats: [
        'Dedicated Azure tenant or on-prem',
        'Custom integrations (Epic, Athena, Cerner)',
        'Named compliance liaison',
        'Quarterly business reviews',
        '24/7 phone support from Scottsdale',
        '$5M cyber insurance pass-through',
      ],
    },
  ];

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section__head section__head--center">
          <span className="eyebrow"><span className="dot"></span>Pricing</span>
          <h2 className="h1">Priced for the practice, <span className="h-italic">not the enterprise.</span></h2>
          <p className="lede" style={{ textAlign: 'center' }}>No PHI tax. No per-API-call surprises. The BAA is included in every tier — including the 14-day trial.</p>
        </div>

        <div className="price-grid">
          {tiers.map(t => (
            <div key={t.tier} className={`price-card ${t.feat ? 'price-card--feat' : ''}`}>
              {t.feat && <span className="feat-flag">Most clinics</span>}
              <div>
                <div className="tier">{t.tier}</div>
                <div className="amount" style={{ marginTop: 8 }}>
                  {t.amount}<small>{t.cadence}</small>
                </div>
              </div>
              <p className="pdesc">{t.desc}</p>
              <ul>
                {t.feats.map(f => (
                  <li key={f}><Icon name="check" size={14} stroke={2.2} /><span>{f}</span></li>
                ))}
              </ul>
              <a className={`btn ${t.feat ? 'btn--light' : 'btn--primary'}`} href="#demo">
                {t.cta} <Icon name="arrow" size={14} stroke={1.8} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useStateS(0);
  const items = [
    { q: 'Is Okrana actually HIPAA-compliant, or do I have to do extra work?',
      a: 'Okrana ships HIPAA-ready out of the box. The BAA is signed in your standard onboarding, not a six-month enterprise procurement. Your data lives in an isolated Azure tenant — we never use it to train models and we never see it.' },
    { q: 'What models does Okrana use under the hood?',
      a: 'A mix of Azure OpenAI Service (GPT-4 class) for general reasoning and our own fine-tuned models for medical and legal tasks. All inference happens inside your Azure tenant under BAA. We don’t route any traffic to public OpenAI, Anthropic or Google endpoints.' },
    { q: 'How is this different from “HIPAA mode” on ChatGPT or Claude?',
      a: 'Generic AI products bolt compliance on top of a consumer product. Okrana was built for clinics from line one — the audit log, the retention policy, the integrations and the customer support team are designed around the way regulated practices actually work.' },
    { q: 'Can you integrate with my EHR?',
      a: 'Yes. We have direct integrations with Athena, Epic, eClinicalWorks, Cerner and DrChrono, plus a generic HL7/FHIR connector for everything else. Most clinics are live in under a week.' },
    { q: 'Where is the company based, and who do I call when something breaks?',
      a: 'We’re built in Scottsdale, Arizona (85260). Our support team is in-house — no offshore contractors, no chatbot tickets. Tenant plans get a named compliance liaison and a 24/7 number.' },
    { q: 'What happens to my data if I cancel?',
      a: 'Your tenant is yours. Cancel and you get an export of every file, every prompt log and every model artifact, plus a 30-day grace period before anything is deleted.' },
  ];
  return (
    <section className="section" id="faq" style={{ background: 'var(--bg-2)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 56, alignItems: 'start' }}>
        <div style={{ position: 'sticky', top: 100 }}>
          <span className="eyebrow"><span className="dot"></span>Common questions</span>
          <h2 className="h1" style={{ marginTop: 14 }}>The honest answers.</h2>
          <p className="lede" style={{ marginTop: 14 }}>Couldn’t find what you’re looking for? Hit the chat in the corner or email <strong>hello@okrana.ai</strong>.</p>
        </div>

        <div className="faq">
          {items.map((it, i) => (
            <div key={it.q} className={`faq__item ${open === i ? 'open' : ''}`}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{it.q}</span>
                <span className="plus">+</span>
              </button>
              <div className="faq__a"><div className="faq__a-inner">{it.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Footer CTA + footer ─────────────────────────────────────── */
function FooterCTA() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta__bg"></div>
          <div style={{ maxWidth: '60%' }}>
            <span className="eyebrow" style={{ color: 'rgba(246,244,239,.7)' }}><span className="dot"></span>Next step</span>
            <h2 className="h1" style={{ marginTop: 14 }}>
              See Okrana on your <span className="h-italic">own files,</span> in 20 minutes.
            </h2>
            <p style={{ marginTop: 12, color: 'rgba(246,244,239,.78)', fontSize: 17, maxWidth: '52ch' }}>
              Bring one redacted chart or one anonymized case. We’ll have it drafted, summarized and audited before our coffee gets cold.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="#demo" className="btn btn--light btn--lg">
              Book a demo <Icon name="arrow" size={14} stroke={1.8} />
            </a>
            <span className="mono" style={{ color: 'rgba(246,244,239,.55)' }}>or call <strong style={{ color: 'var(--warm)' }}>(480) 555-0142</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Wordmark />
            <p className="muted" style={{ marginTop: 14, fontSize: 14, maxWidth: '36ch' }}>
              The private BAA AI for regulated practices. Built in Scottsdale, Arizona.
            </p>
            <span className="zip-pill" style={{ marginTop: 14 }}>
              <Icon name="map" size={12} stroke={1.7} /> 85260 · Scottsdale, AZ
            </span>
          </div>
          <div className="footer__col">
            <h5>Product</h5>
            <ul>
              <li>Features</li>
              <li>Integrations</li>
              <li>Pricing</li>
              <li>Changelog</li>
              <li>API</li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>For</h5>
            <ul>
              <li>Medical clinics</li>
              <li>Law firms</li>
              <li>Financial advisors</li>
              <li>Dental & specialty</li>
            </ul>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Security</li>
              <li>BAA & legal</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© 2026 Okrana Inc. All rights reserved.</span>
          <span>Privacy · Terms · BAA · SOC 2 (under NDA)</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Features, UseCases, Security, Testimonials, Pricing, FAQ, FooterCTA, Footer });
