import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrain03Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  BankIcon,
  BookOpenCheckIcon,
  CheckmarkCircle02Icon,
  CloudServerIcon,
  FlaskConicalIcon,
  SecurityCheckIcon,
  WorkHistoryIcon,
} from '@hugeicons/core-free-icons';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';
import ProofShowcase from '@/components/ProofShowcase';
import { LabOpsScreen, LearningStudioScreen, PartnershipAccessScreen } from '@/components/ProductScreens';

const domains = [
  {
    number: '01',
    title: 'AI Engineering',
    descriptor: 'Build, evaluate and operate intelligent systems.',
    detail: 'Foundation models, agentic systems, computer vision, production ML and responsible AI.',
    href: '/domains/ai-engineering',
    icon: AiBrain03Icon,
    tone: 'violet',
  },
  {
    number: '02',
    title: 'Cloud & Platform',
    descriptor: 'Design the systems everything else depends on.',
    detail: 'Distributed systems, internal developer platforms, infrastructure as code, SRE and incident practice.',
    href: '/domains/cloud-platform-engineering',
    icon: CloudServerIcon,
    tone: 'sky',
  },
  {
    number: '03',
    title: 'Cybersecurity',
    descriptor: 'Learn to break assumptions and defend real systems.',
    detail: 'Application security, cloud identity, detection engineering, threat modeling and incident response.',
    href: '/domains/cybersecurity-digital-trust',
    icon: SecurityCheckIcon,
    tone: 'emerald',
  },
  {
    number: '04',
    title: 'FinTech & Quant',
    descriptor: 'Engineer trustworthy systems for money and markets.',
    detail: 'Digital payments, trading systems, financial data, model risk, fraud and quantitative research.',
    href: '/domains/fintech-quantitative-systems',
    icon: BankIcon,
    tone: 'amber',
  },
];

const systemPoints = [
  ['01', 'Current curriculum', 'Course architecture shaped with practitioners and made ready for academic review.'],
  ['02', 'Faculty ownership', 'Materials, tools and enablement that help your faculty lead every delivery.'],
  ['03', 'Work worth inspecting', 'Projects, reviews and evidence that reveal what students can actually do.'],
];

function ActionLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="action-link">{children}<HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} /></Link>;
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="hero">
        <div className="hero-field" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Take learning beyond <span>the classroom.</span></h1>
            <p className="hero-lede">BayesStack helps colleges bring industry-shaped programs, hands-on building and meaningful professional access to undergraduate students.</p>
            <div className="hero-actions">
              <Link href="/contact" className="button primary">Discuss a partnership <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={2} /></Link>
              <Link href="/solutions/programs" className="button secondary">Explore the learning system <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} /></Link>
            </div>
          </div>
          <figure className="hero-visual">
            <div className="hero-photo-wrap">
              <Image src="/images/documentary/modern-lab.webp" alt="Indian undergraduate students assembling and testing a robotics system in a well-equipped college lab" fill priority sizes="(max-width: 900px) 94vw, 48vw" />
            </div>
            <figcaption><span>Applied systems studio</span><p>Students test a working prototype during an open lab session.</p></figcaption>
          </figure>
        </div>
      </section>

      <section className="premise-section section">
        <div className="container premise-grid">
          <div><p className="section-kicker">THE GAP WE CLOSE</p><h2>A curriculum is only part of an education.</h2></div>
          <div className="premise-content">
            <p className="premise-lead">Students grow when knowledge meets difficult work, useful feedback and people already practising the craft.</p>
            <div className="system-points">
              {systemPoints.map(([number, title, text]) => <div key={number}><span>{number}</span><p><strong>{title}</strong><small>{text}</small></p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="solution-story programs-story section">
        <div className="container story-grid">
          <div className="story-copy">
            <span className="story-index"><HugeiconsIcon icon={BookOpenCheckIcon} size={22} />01 / Programs</span>
            <h2>New fields become rigorous courses your faculty can own.</h2>
            <p>Practitioners help shape the capability. BayesStack turns it into a credit-ready course with teaching plans, studios, assessments, rubrics and faculty enablement.</p>
            <ul><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Board of Studies package</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Purpose-built learning studio</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Delivery support that transfers ownership</li></ul>
            <ActionLink href="/solutions/programs">See how programs work</ActionLink>
          </div>
          <div className="story-graphic"><LearningStudioScreen compact /></div>
        </div>
      </section>

      <section className="solution-story labs-story section">
        <div className="container story-grid visual-first">
          <div className="lab-composition">
            <Image src="/images/documentary/workshop-lab.webp" alt="Indian undergraduate students debugging a mobile robotics project in an active college laboratory" fill sizes="(max-width: 900px) 94vw, 48vw" />
            <div className="lab-inset"><LabOpsScreen /></div>
          </div>
          <div className="story-copy">
            <span className="story-index"><HugeiconsIcon icon={FlaskConicalIcon} size={22} />02 / Labs</span>
            <h2>Give ambitious student work a serious home on campus.</h2>
            <p>A BayesStack Center of Excellence is an operating system for projects, not a room full of equipment. It brings together selected cohorts, mentors, technical infrastructure, review cadence and public showcases.</p>
            <ul><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />A year-round project pipeline</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Practitioner and faculty mentorship</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Evidence from every milestone</li></ul>
            <ActionLink href="/solutions/labs">Explore Centers of Excellence</ActionLink>
          </div>
        </div>
      </section>

      <section className="solution-story partnerships-story section">
        <div className="container story-grid">
          <div className="story-copy">
            <span className="story-index"><HugeiconsIcon icon={WorkHistoryIcon} size={22} />03 / Partnerships</span>
            <h2>Make industry more than a guest lecture.</h2>
            <p>Bring practitioners into the learning journey at the moments where their context matters most: when a brief is framed, an architecture is challenged, a project is reviewed or a cohort enters the field.</p>
            <ul><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Small-format technical masterclasses</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Architecture and milestone reviews</li><li><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />Prepared industry and cultural immersion</li></ul>
            <ActionLink href="/solutions/partnerships">Build meaningful industry access</ActionLink>
          </div>
          <div className="story-graphic partnership-composition">
            <PartnershipAccessScreen />
            <figure><Image src="/images/documentary/industry-visit.webp" alt="Indian college students learning from an engineer during a visit to a working technology workshop" fill sizes="(max-width: 900px) 94vw, 43vw" /></figure>
          </div>
        </div>
      </section>

      <section className="domains-section section" id="domains">
        <div className="container">
          <div className="domains-heading"><p className="section-kicker light">DOMAIN PORTFOLIOS</p><h2>Courses students want to talk about.</h2><p>Current enough to be exciting. Structured enough to belong inside a serious undergraduate education.</p></div>
          <div className="domain-list">
            {domains.map(item => (
              <Link href={item.href} className={`domain-row tone-${item.tone}`} key={item.title}>
                <span className="domain-number">{item.number}</span>
                <span className="domain-icon"><HugeiconsIcon icon={item.icon} size={28} strokeWidth={1.55} /></span>
                <p><strong>{item.title}</strong><small>{item.descriptor}</small></p>
                <em>{item.detail}</em>
                <HugeiconsIcon icon={ArrowUpRight01Icon} size={22} strokeWidth={1.8} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section section">
        <div className="container">
          <div className="evidence-heading"><p className="section-kicker">SEE THE SYSTEM</p><h2>Serious learning leaves evidence behind.</h2><p>Move through four things an institution, faculty member and student can inspect.</p></div>
          <ProofShowcase />
        </div>
      </section>

      <section className="campus-section section">
        <div className="container">
          <div className="campus-heading"><p className="section-kicker">REAL CAMPUS PRACTICE</p><h2>Designed for the colleges students actually attend.</h2><p>BayesStack works with the institution you have, then helps raise what students and faculty can do inside it.</p></div>
          <div className="campus-gallery">
            <figure className="campus-primary"><Image src="/images/documentary/modern-classroom.webp" alt="An instructor discussing a systems diagram with undergraduate students in a contemporary Indian college classroom" fill sizes="(max-width: 700px) 94vw, 58vw" /><figcaption>Faculty-led, workshop-style learning</figcaption></figure>
            <figure><Image src="/images/documentary/faculty-classroom.webp" alt="A faculty member helping a small student group during a laptop-based class" fill sizes="(max-width: 700px) 94vw, 30vw" /><figcaption>Support at the desk, not only the lectern</figcaption></figure>
            <figure><Image src="/images/documentary/capstone-showcase.webp" alt="Students presenting an engineering prototype to faculty and industry reviewers" fill sizes="(max-width: 700px) 94vw, 30vw" /><figcaption>Work opened to useful scrutiny</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="final-section section">
        <div className="container final-card">
          <div><p className="section-kicker dark-kicker">START WITH A REAL NEED</p><h2>What should your students become capable of next?</h2><p>Bring us the gap you can see. We will help shape the program, lab or industry partnership around it.</p></div>
          <Link href="/contact" className="button primary">Discuss a partnership <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} strokeWidth={2} /></Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
