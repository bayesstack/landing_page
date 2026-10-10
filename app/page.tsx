import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Blocks,
  Bot,
  Braces,
  Check,
  CheckCircle2,
  ChevronRight,
  CloudCog,
  Code2,
  FileCheck2,
  Fingerprint,
  Landmark,
  Layers3,
  LockKeyhole,
  Network,
  Play,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Users,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const tickerItems = [
  ['⚡', 'Student Collaboration'],
  ['🔬', 'Campus Centers of Excellence'],
  ['⌘', 'Practitioner Masterclasses'],
  ['🏢', 'Company Immersion Visits'],
  ['◫', 'Milestone Architectural Reviews'],
];

const domains = [
  {
    number: '01',
    title: 'AI Engineering & Intelligent Systems',
    text: 'Machine learning, generative AI, autonomous agents, intelligent applications, vision, and AI systems engineering.',
    href: '/domains/ai-engineering',
    icon: Bot,
    className: 'ai',
  },
  {
    number: '02',
    title: 'Cloud & Platform Engineering',
    text: 'Cloud architecture, distributed computing, platform engineering, DevOps, infrastructure-as-code, and site reliability.',
    href: '/domains/cloud-platform-engineering',
    icon: CloudCog,
    className: 'cloud',
  },
  {
    number: '03',
    title: 'Cybersecurity & Digital Trust',
    text: 'Application and network security, cloud security, threat modeling, secure system design, and defensive operations.',
    href: '/domains/cybersecurity-digital-trust',
    icon: LockKeyhole,
    className: 'cyber',
  },
  {
    number: '04',
    title: 'Financial Technology & Quantitative Systems',
    text: 'FinTech applications, payment systems, financial computing, quantitative modeling, and trading backtesting.',
    href: '/domains/fintech-quantitative-systems',
    icon: Landmark,
    className: 'fintech',
  },
];

const proofs = [
  {
    tag: 'STUDENT EXPERIENCE',
    title: 'Interactive Workspaces',
    text: 'Real browser-based code execution, unit test grading, and runtime feedback.',
    icon: TerminalSquare,
    artifact: 'workspace',
  },
  {
    tag: 'ACADEMIC READY',
    title: 'BOS-Ready Syllabus',
    text: 'Fully mapped elective curricula for Board of Studies and academic council accreditation.',
    icon: FileCheck2,
    artifact: 'syllabus',
  },
  {
    tag: 'INDUSTRY MODELED',
    title: 'Scoped Project Briefs',
    text: 'Industry-modeled specifications with explicit milestone deliverables and code standards.',
    icon: Layers3,
    artifact: 'brief',
  },
  {
    tag: 'CAPABILITY PROOF',
    title: 'Verified Student Portfolio',
    text: 'Cryptographically verified capability passports detailing commits and live demos.',
    icon: Fingerprint,
    artifact: 'passport',
  },
];

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="arrow-link">{children}<span aria-hidden="true">→</span></Link>;
}

function CodeWorkspace() {
  return (
    <div className="code-workspace" aria-label="Illustration of the BayesStack code workspace">
      <div className="workspace-topbar">
        <div className="window-dots"><span /><span /><span /></div>
        <span className="workspace-title"><Braces size={13} /> model_validator.py</span>
        <span className="workspace-live"><i /> workspace live</span>
      </div>
      <div className="workspace-body">
        <div className="file-rail" aria-hidden="true">
          <Code2 size={17} /><Blocks size={17} /><Network size={17} />
        </div>
        <div className="editor-pane">
          <div className="code-lines">
            <span><b>01</b><code><em>from</em> bayesstack <em>import</em> Validator</code></span>
            <span><b>02</b><code /></span>
            <span><b>03</b><code><em>def</em> <i>evaluate_model</i>(predictions):</code></span>
            <span><b>04</b><code>  metrics = Validator.compare(</code></span>
            <span><b>05</b><code>    predictions, threshold=<mark>0.92</mark></code></span>
            <span><b>06</b><code>  )</code></span>
            <span className="active-line"><b>07</b><code>  <em>return</em> metrics.passed</code></span>
            <span><b>08</b><code /></span>
          </div>
          <div className="terminal-panel">
            <div className="terminal-header"><span><TerminalSquare size={13} /> Test harness</span><span>3 / 3</span></div>
            <div className="test-row"><Check size={13} /> data schema validates <small>42ms</small></div>
            <div className="test-row"><Check size={13} /> precision exceeds baseline <small>76ms</small></div>
            <div className="test-row"><Check size={13} /> edge cases handled <small>31ms</small></div>
          </div>
        </div>
        <aside className="faculty-panel">
          <span className="panel-label">FACULTY GUIDE</span>
          <div className="avatar-row"><span>AK</span><div><strong>Review checkpoint</strong><small>Milestone 03</small></div></div>
          <p>Ask students to justify the threshold against real-world model risk.</p>
          <div className="progress-label"><span>Rubric progress</span><strong>84%</strong></div>
          <div className="progress-track"><span /></div>
          <button type="button">Open rubric <ChevronRight size={13} /></button>
        </aside>
      </div>
      <div className="workspace-float"><CheckCircle2 size={18} /><span><strong>All checks passed</strong><small>Ready for faculty review</small></span></div>
    </div>
  );
}

function ProofArtifact({ type }: { type: string }) {
  if (type === 'workspace') return (
    <div className="mini-artifact mini-workspace"><span className="mini-bar"><i /><i /><i /></span><code><b>✓</b> test_data_pipeline</code><code><b>✓</b> test_model_output</code><code className="running">● &nbsp; running evaluation</code></div>
  );
  if (type === 'syllabus') return (
    <div className="mini-artifact mini-syllabus"><div><span>BSE-AI-401</span><small>4 CREDITS</small></div><p>Applied Intelligent Systems</p><i /><i /><i className="short" /><strong><ShieldCheck size={13} /> BOS mapped</strong></div>
  );
  if (type === 'brief') return (
    <div className="mini-artifact mini-brief"><span className="brief-label">PROJECT / 08</span><p>Resilient payment routing</p><div><i>01</i><span /><i>02</i><span /><i>03</i></div><small>3 milestones · 6 deliverables</small></div>
  );
  return (
    <div className="mini-artifact mini-passport"><div className="passport-person"><span>AS</span><p><strong>Ananya S.</strong><small>Capability passport</small></p><CheckCircle2 size={15} /></div><div className="passport-metrics"><span><b>18</b><small>COMMITS</small></span><span><b>04</b><small>REVIEWS</small></span><span><b>02</b><small>DEMOS</small></span></div></div>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow indigo"><span className="pulse-dot" /> Institutional Learning System</div>
            <h1>Take learning beyond <span>the classroom.</span></h1>
            <p className="hero-lede">BayesStack helps educational institutions bring industry-designed programs, hands-on learning, and meaningful industry connections to their students, so they can put what they learn to work.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button primary">Discuss a Partnership <span>→</span></Link>
              <Link href="/solutions/programs" className="button secondary">Explore Programs <ArrowUpRight size={15} /></Link>
            </div>
            <div className="hero-trust">
              <div className="trust-avatars"><span>F</span><span>S</span><span>I</span></div>
              <p><strong>One connected learning system</strong><small>Faculty · Students · Industry</small></p>
            </div>
          </div>

          <div className="hero-visual" aria-label="Students collaborating in a campus technology lab">
            <div className="hero-photo-wrap">
              <Image src="/images/campus-lab.webp" alt="University students collaborating on a robotics prototype in a modern campus lab" fill priority sizes="(max-width: 900px) 94vw, 48vw" />
              <div className="photo-scrim" />
              <div className="visual-status"><span><i /> COE / ACTIVE</span><b>Intelligent Systems Lab</b></div>
              <button type="button" className="play-button" aria-label="Play campus lab overview"><Play size={17} fill="currentColor" /></button>
            </div>
            <div className="floating-card cohort-card"><Users size={17} /><div><span>COHORT 04</span><strong>32 builders</strong></div></div>
            <div className="floating-card review-card"><CheckCircle2 size={17} /><div><span>MILESTONE REVIEW</span><strong>Architecture approved</strong></div></div>
            <div className="visual-index">01 <span>/</span> 03</div>
          </div>
        </div>
        <div className="hero-footnote container"><span>Built for institutions shaping what comes next</span><i /></div>
      </section>

      <section className="problem section">
        <div className="container problem-inner">
          <p className="section-kicker">THE GAP WE CLOSE</p>
          <div>
            <h2>A curriculum is only part<br />of an education.</h2>
            <p>Students need opportunities to put knowledge into practice, tackle unfamiliar problems, explore new possibilities, and learn from people working in their fields.</p>
          </div>
        </div>
        <div className="ticker" aria-label="BayesStack learning experiences">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map(([icon, label], index) => (
              <span className={`ticker-pill ticker-${(index % 5) + 1}`} key={`${label}-${index}`}><i>{icon}</i>{label}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section programs section">
        <div className="container split-layout">
          <div className="solution-copy">
            <span className="number-badge programs-badge">01 / PROGRAMS</span>
            <h2>Programs shaped by industry. Delivered by your faculty. <span>Enabled by BayesStack.</span></h2>
            <p>Industry practitioners shape what students learn and how they apply it. BayesStack equips your faculty with the curriculum, teaching materials, assessments, and digital tools to deliver an engaging, hands-on learning experience.</p>
            <div className="feature-tags"><span><CheckCircle2 size={14} /> BOS-ready curriculum</span><span><CheckCircle2 size={14} /> Faculty enablement</span></div>
            <ArrowLink href="/solutions/programs">How It Works</ArrowLink>
          </div>
          <CodeWorkspace />
        </div>
      </section>

      <section className="solution-section labs section alt-bg">
        <div className="container split-layout visual-first">
          <div className="editorial-visual lab-visual">
            <Image src="/images/campus-lab.webp" alt="Student team debugging an intelligent robotics system in a university lab" fill sizes="(max-width: 900px) 94vw, 46vw" />
            <div className="image-label"><span>LAB NOTE / 07</span><strong>From idea to working prototype.</strong></div>
            <div className="image-metric"><b>12</b><span>active<br />projects</span></div>
          </div>
          <div className="solution-copy">
            <span className="number-badge labs-badge">02 / LABS</span>
            <h2>Give ambitious student work room to grow.</h2>
            <p>BayesStack helps universities establish and operate Centers of Excellence where students undertake mentored technical projects, explore emerging ideas, develop prototypes, and showcase what they&apos;ve built.</p>
            <div className="feature-tags"><span><CheckCircle2 size={14} /> Mentored projects</span><span><CheckCircle2 size={14} /> Campus showcase</span></div>
            <ArrowLink href="/solutions/labs">Explore Labs</ArrowLink>
          </div>
        </div>
      </section>

      <section className="solution-section partnerships section">
        <div className="container split-layout">
          <div className="solution-copy">
            <span className="number-badge partnerships-badge">03 / PARTNERSHIPS</span>
            <h2>Make industry more than a guest lecture.</h2>
            <p>BayesStack brings students and industry practitioners closer through technical masterclasses, project reviews, online expert access, industry challenges, and curated experiences beyond campus.</p>
            <div className="feature-tags"><span><CheckCircle2 size={14} /> Expert reviews</span><span><CheckCircle2 size={14} /> Industry immersion</span></div>
            <ArrowLink href="/solutions/partnerships">Explore Partnerships</ArrowLink>
          </div>
          <div className="editorial-visual partnership-visual">
            <Image src="/images/industry-review.webp" alt="Industry architect leading a software architecture review with student project leads" fill sizes="(max-width: 900px) 94vw, 46vw" />
            <div className="image-label"><span>MILESTONE / 03</span><strong>Architecture review in progress.</strong></div>
            <div className="live-chip"><i /> LIVE REVIEW</div>
          </div>
        </div>
      </section>

      <section className="domains-section section" id="domains">
        <div className="container">
          <div className="section-heading-row">
            <div><p className="section-kicker light">STRATEGIC PILLARS</p><h2>Industry Domains</h2></div>
            <p>Bring specialized learning experiences into the fields shaping technology and finance.</p>
          </div>
          <div className="domain-grid">
            {domains.map(({ number, title, text, href, icon: Icon, className }) => (
              <Link href={href} className={`domain-card ${className}`} key={title}>
                <div className="domain-card-top"><span>{number}</span><div><Icon size={25} strokeWidth={1.8} /></div></div>
                <h3>{title}</h3><p>{text}</p>
                <span className="card-link">Explore domain <ArrowUpRight size={15} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section section">
        <div className="container">
          <div className="center-heading"><p className="section-kicker">SEE IT IN PRACTICE</p><h2>Built for Rigor.<br />Designed for Universities.</h2><p>Explore the concrete artifacts BayesStack delivers to faculty, students, and academic councils.</p></div>
          <div className="proof-grid">
            {proofs.map(({ tag, title, text, icon: Icon, artifact }) => (
              <article className="proof-card" key={title}>
                <div className="proof-artifact"><ProofArtifact type={artifact} /></div>
                <div className="proof-content"><span className="proof-tag"><Icon size={13} /> {tag}</span><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-section section">
        <div className="container">
          <div className="final-card">
            <div className="final-pattern" />
            <div className="final-icon"><Sparkles size={22} /></div>
            <div className="final-content"><p className="section-kicker dark-kicker">START A CONVERSATION</p><h2>What could this look like<br />at your institution?</h2><p>Whether you&apos;re introducing new learning programs, building a space for ambitious student work, or bringing industry closer to campus, let&apos;s explore what&apos;s possible for your students.</p></div>
            <div className="final-action"><Link href="/contact" className="button primary">Discuss a Partnership <span>→</span></Link><small>No decks. No hard sell.<br />Just a useful conversation.</small></div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-brand"><Link href="/" className="brand"><Image src="/brand/logos/symbol-primary.svg" alt="" width={27} height={35} /><span>BayesStack</span></Link><p>Institutional Learning System.</p><small>Curriculum × Practice × Industry</small></div>
          <div className="footer-links"><div><strong>Solutions</strong><Link href="/solutions/programs">Programs</Link><Link href="/solutions/labs">Labs</Link><Link href="/solutions/partnerships">Partnerships</Link></div><div><strong>Domains</strong><Link href="/domains/ai-engineering">AI Engineering</Link><Link href="/domains/cloud-platform-engineering">Cloud & Platform</Link><Link href="/domains/cybersecurity-digital-trust">Cybersecurity</Link><Link href="/domains/fintech-quantitative-systems">FinTech & Quant</Link></div><div><strong>Company</strong><Link href="/about">About</Link><Link href="/contact">Contact</Link></div></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 BayesStack. All rights reserved.</span><span>Built for institutions shaping what comes next.</span></div>
      </footer>
    </main>
  );
}
