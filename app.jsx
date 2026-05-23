// app.jsx — Okrana homepage (nav + hero + comparison demo)

const { useState, useEffect, useMemo, useRef } = React;

/* ── Icons (inline SVG, hairline style) ────────────────────── */
function Icon({ name, size = 18, stroke = 1.5 }) {
  const s = { width: size, height: size, fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round', viewBox: '0 0 24 24' };
  const p = {
    shield:   <><path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3z"/></>,
    lock:     <><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></>,
    spark:    <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M5.6 18.4l2-2M16.4 7.6l2-2"/></>,
    chat:     <><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/></>,
    file:     <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></>,
    waves:    <><path d="M3 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/><path d="M3 7c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></>,
    chart:    <><path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/></>,
    workflow: <><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><path d="M9 6h6M18 9v6M6 9v8a2 2 0 0 0 2 2h7"/></>,
    book:     <><path d="M4 19V5a2 2 0 0 1 2-2h14v18H6a2 2 0 0 1-2-2zM4 19a2 2 0 0 1 2-2h14"/></>,
    check:    <><path d="M4 12l5 5L20 6"/></>,
    arrow:    <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    azure:    <><path d="M8 4l-6 12 6 4 14-4-8-12H8z"/><path d="M14 4l-3 16"/></>,
    map:      <><path d="M9 4l-6 3v13l6-3 6 3 6-3V4l-6 3-6-3z"/><path d="M9 4v13M15 7v13"/></>,
    eye:      <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    badge:    <><circle cx="12" cy="9" r="6"/><path d="M9 14l-1.5 7L12 18l4.5 3L15 14"/></>,
    server:   <><rect x="3" y="4" width="18" height="7" rx="1"/><rect x="3" y="13" width="18" height="7" rx="1"/><circle cx="7" cy="7.5" r=".5" fill="currentColor"/><circle cx="7" cy="16.5" r=".5" fill="currentColor"/></>,
    bolt:     <><path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"/></>,
    minus:    <><path d="M5 12h14"/></>,
    warning:  <><path d="M12 3L2 21h20L12 3z"/><path d="M12 10v5M12 18v.5"/></>,
    pulse:    <><path d="M3 12h4l2-6 4 12 2-6h6"/></>,
    sliders:  <><path d="M4 6h13M4 12h8M4 18h11"/><circle cx="19" cy="6" r="2"/><circle cx="15" cy="12" r="2"/><circle cx="17" cy="18" r="2"/></>,
  };
  return <svg {...s}>{p[name] || null}</svg>;
}

/* ── Wordmark ───────────────────────────────────────────────── */
function Wordmark() {
  return (
    <span className="brand" aria-label="Okrana">
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 22 26" width="22" height="26">
          <path d="M11 1l9 3v8.6c0 5.6-3.8 10.3-9 11.4-5.2-1.1-9-5.8-9-11.4V4l9-3z"
                fill="var(--accent)" />
          <path d="M11 8.5l4 1.5v3.4c0 2.5-1.7 4.6-4 5.1-2.3-.5-4-2.6-4-5.1V10l4-1.5z"
                fill="var(--warm)" />
        </svg>
      </span>
      <span>Okrana</span>
    </span>
  );
}

/* ── Nav ────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Wordmark />
        <nav className="nav__links">
          <a href="#product">Product</a>
          <a href="#industries">Industries</a>
          <a href="#security">Security</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="nav__cta">
          <a className="btn btn--ghost" href="#login">Sign in</a>
          <a className="btn btn--primary" href="#demo">
            Book a demo <Icon name="arrow" size={14} stroke={1.8} />
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
const HERO_COPY = {
  default: {
    eyebrow: 'For clinics, firms & regulated practices',
    headline: <>The private AI assistant <span className="h-italic">for your practice.</span></>,
    sub: 'Okrana is a HIPAA-grade AI built for clinics and small practices. Azure-hosted, zero data retention, BAA included — so your patient notes, intake forms and case files never leave your walls.',
  },
  trust: {
    eyebrow: 'Private by design',
    headline: <>Patient data stays <span className="h-italic">in the room.</span></>,
    sub: 'A private AI workspace for medical clinics and regulated practices. Trained on your files, hosted in your Azure tenant, with a signed BAA on day one — never used to train anyone else’s model.',
  },
  ai: {
    eyebrow: 'A safer way to use AI at work',
    headline: <>ChatGPT is brilliant. <span className="h-italic">It’s also a leak.</span></>,
    sub: 'Okrana gives your team the assistant they already want — drafting, summaries, intake, dictation — without ever shipping PHI to OpenAI, Google or Anthropic. Yours, on your cloud, under BAA.',
  },
};

function Hero({ copyKey }) {
  const copy = HERO_COPY[copyKey] || HERO_COPY.default;
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__head">
          <div className="hero__chip">
            <span className="pill">NEW</span>
            <span>Now accepting clinics in Maricopa County</span>
            <Icon name="arrow" size={12} stroke={1.6} />
          </div>
          <span className="eyebrow"><span className="dot"></span>{copy.eyebrow}</span>
          <h1 className="h-display">{copy.headline}</h1>
          <p className="lede">{copy.sub}</p>
          <div className="hero__cta">
            <a className="btn btn--primary btn--lg" href="#demo">
              Book a 20-min demo <Icon name="arrow" size={14} stroke={1.8} />
            </a>
            <a className="btn btn--ghost btn--lg" href="#how">
              See how it works
            </a>
          </div>
          <div className="hero__sub">
            <span className="zip-pill"><Icon name="map" size={12} stroke={1.7} /> Built in Scottsdale, 85260</span>
            <span className="sep"></span>
            <span>Insured & locally supported</span>
            <span className="sep"></span>
            <span>BAA signed in 24 hrs</span>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <HeroCard />
        </div>
      </div>

      <div className="container">
        <TrustStrip />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="hero-card">
      <div className="float-chip float-chip--tl">
        <Icon name="lock" size={14} /> <strong>BAA</strong> &nbsp;active · zero retention
      </div>

      <div className="hero-card__head">
        <span className="lights"><span></span><span></span><span></span></span>
        <span className="mono">okrana · sunrise family medicine</span>
        <span></span>
      </div>

      <div className="chat">
        <div className="bubble bubble--in">
          <small>Dr. Patel</small>
          Summarize Maria Chen’s last three visits — focus on her A1C trend and the new metformin dose.
        </div>
        <div className="bubble bubble--out">
          <small>Okrana</small>
          A1C trending down: 8.4 → 7.9 → 7.4 over 9 months. Metformin increased to 1000 mg BID on 03/14. No GI side effects noted. Next labs due 06/12.
        </div>
        <div className="bubble bubble--in">
          <small>Dr. Patel</small>
          Draft a note to her in plain English, 6th-grade reading level.
        </div>
        <div className="bubble bubble--out" style={{ opacity: .9 }}>
          <small>Okrana · drafting</small>
          Hi Maria — great news from your last visit<span className="cursor"></span>
        </div>
      </div>

      <div className="hero-card__foot">
        <span className="live">Tenant: clinic-az-7 · us-west-2</span>
        <span style={{ marginLeft: 'auto' }}>Encrypted in-flight + at rest</span>
      </div>

      <div className="float-chip float-chip--br">
        <Icon name="check" size={14} className="ic" /> No data leaves your tenant
      </div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    'HIPAA',
    'SOC 2 Type II',
    'BAA included',
    'Zero retention',
    'On-prem option',
  ];
  return (
    <div className="trust-strip">
      <span className="trust-strip__label">Certified & compliant</span>
      <div className="trust-strip__items">
        {items.map(t => (
          <span key={t} className="trust-badge">
            <Icon name="check" size={14} stroke={2} /> {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Public AI vs Okrana — interactive demo ─────────────────── */
const DEMO_PROMPTS = [
  {
    id: 'intake',
    label: 'Patient intake',
    prompt: 'New patient intake: 47F, history of T2 diabetes, presenting with persistent fatigue and a non-healing toe ulcer. Draft a SOAP note skeleton.',
    bad: {
      title: 'Public ChatGPT',
      tag: 'Risky',
      body: [
        'Here is a generic SOAP note template. Note: I cannot store this patient information securely, and sharing PHI with this tool may violate HIPAA.',
        'Subjective: 47-year-old female with… [generic placeholders]',
        'Please redact identifiers before sharing further details.',
      ],
      warn: 'Inputs may be used to train future models. No BAA. Identifiers flagged to a third-party moderation pipeline.',
    },
    good: {
      title: 'Okrana',
      tag: 'BAA · zero retention',
      body: [
        'Pulling Maria Chen’s last 3 visits + lab panel from your Athena tenant…',
        'Subjective: 47F w/ T2DM (Dx 2019), c/o 3-wk fatigue + non-healing R hallux ulcer.',
        'Objective: A1C 7.4% (↓ from 8.4%), BP 132/86, R hallux 1.5 cm Grade 2 (Wagner).',
        'Assessment: T2DM uncontrolled; diabetic foot ulcer, infection r/o.',
        'Plan: Wound care referral, ABI, escalate to Dr. Patel for IV abx eval.',
      ],
      good: 'Pulled from your tenant only. Auto-routed to Dr. Patel’s queue. Audit log #4827 created.',
    },
  },
  {
    id: 'email',
    label: 'Internal email',
    prompt: 'Draft a follow-up email to Mr. Garcia about his MRI results — friendly, plain English, 6th-grade reading level.',
    bad: {
      title: 'Public ChatGPT',
      tag: 'Risky',
      body: [
        'I’d be happy to help — could you share the MRI findings and patient details?',
        '(Reminder: this tool isn’t HIPAA-compliant. Don’t paste PHI here.)',
        'Generic template only:',
        'Dear [PATIENT], I’m writing to follow up on your recent imaging…',
      ],
      warn: 'You haven’t shared the MRI report. Pasting it here would create a HIPAA exposure.',
    },
    good: {
      title: 'Okrana',
      tag: 'On your data',
      body: [
        'Hi Mr. Garcia,',
        'Good news — your MRI from last Tuesday looked normal. There’s no sign of a tear in your knee, and the swelling we saw is from inflammation, not damage.',
        'Here’s what I’d like to do next: rest it for two more weeks, ice it after walks, and try the stretches in the printout I’m attaching.',
        'If the pain isn’t better by June 4, give us a call and we’ll book a follow-up.',
        '— Dr. Patel',
      ],
      good: 'MRI report read from your Epic tenant. Reading level: 5.8. Saved to Garcia chart · drafts.',
    },
  },
  {
    id: 'compliance',
    label: 'Compliance check',
    prompt: 'Audit last week’s 84 patient messages for any that contained PHI sent over unencrypted SMS.',
    bad: {
      title: 'Public ChatGPT',
      tag: 'Risky',
      body: [
        'I don’t have access to your messages or systems.',
        'In general, you’d want to: 1) export logs, 2) search for identifiers, 3) review manually…',
        'Would you like me to write a Python script you could run yourself?',
      ],
      warn: 'No connection to your data. Can’t actually audit anything. Anything you paste here is exposed.',
    },
    good: {
      title: 'Okrana',
      tag: 'Audit run · 1.4s',
      body: [
        'Scanned 84 messages from May 13–19 across SMS + email.',
        '✓ 79 messages: appointment reminders, no PHI.',
        '⚠ 3 messages: contained partial DOB + name over SMS. Flagged.',
        '⚠ 2 messages: lab values sent unencrypted. Flagged.',
        'Drafted remediation: enable encrypted-only routing for the 5 affected patients. Ready for your approval.',
      ],
      good: 'Full audit log exported · PDF + JSON. Ready for your Compliance Officer.',
    },
  },
];

function ComparisonDemo() {
  const [active, setActive] = useState('intake');
  const current = DEMO_PROMPTS.find(p => p.id === active);
  return (
    <section className="section" id="product">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow"><span className="dot"></span>The same question, two different worlds</span>
          <h2 className="h1">Public AI <span className="h-italic">vs.</span> Okrana.</h2>
          <p className="lede">
            Your team will use AI either way. The question is whether your patient data ends up in someone else’s training set, or stays on your tenant where it belongs.
          </p>
        </div>

        <div className="demo">
          <div className="demo__head">
            <span className="mono" style={{ color: 'var(--ink-3)' }}>// try a real clinic prompt →</span>
            <div className="demo__prompts" style={{ marginTop: 0 }}>
              {DEMO_PROMPTS.map(p => (
                <button
                  key={p.id}
                  className="prompt-chip"
                  aria-pressed={active === p.id}
                  onClick={() => setActive(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="demo__prompt">
            <span className="label">PROMPT</span>
            <span>{current.prompt}</span>
          </div>

          <div className="demo__split">
            <DemoColumn variant="bad" data={current.bad} />
            <DemoColumn variant="good" data={current.good} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DemoColumn({ variant, data }) {
  const isGood = variant === 'good';
  return (
    <div className={`demo__col demo__col--${variant}`}>
      <div className="demo__colhd">
        <span className="name">
          {isGood
            ? <span style={{ display: 'inline-flex', width: 14, height: 14, background: 'var(--accent)', borderRadius: 3 }}></span>
            : <Icon name="warning" size={14} stroke={1.8} />}
          {data.title}
        </span>
        <span className={`tag ${isGood ? 'tag--good' : 'tag--bad'}`}>{data.tag}</span>
      </div>
      <div className="demo__body">
        {data.body.map((line, i) => <p key={i}>{line}</p>)}
      </div>
      {isGood
        ? <div className="demo__good"><Icon name="check" size={14} stroke={2} /> {data.good}</div>
        : <div className="demo__warn"><Icon name="warning" size={14} stroke={1.8} /> {data.warn}</div>}
    </div>
  );
}

Object.assign(window, { Icon, Wordmark, Nav, Hero, HERO_COPY, ComparisonDemo });
