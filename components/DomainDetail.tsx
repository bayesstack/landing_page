import Link from 'next/link';
import { ArrowDown, Binary, BookOpenCheck, BrainCircuit, CheckCircle2, CloudCog, Fingerprint, Landmark, Layers3, LockKeyhole, Network, Radar } from 'lucide-react';
import { InteriorHero, InteriorShell, PageCTA, SectionIntro } from '@/components/Interior';
import type { DomainData } from '@/lib/domains';
import { DomainHeroGraphic } from '@/components/BrandGraphics';

const icons = {
  violet: BrainCircuit,
  sky: CloudCog,
  emerald: LockKeyhole,
  amber: Landmark,
};

export default function DomainDetail({ domain }: { domain: DomainData }) {
  const DomainIcon = icons[domain.accent];
  return (
    <InteriorShell>
      <InteriorHero section="Domains" current={domain.shortName} eyebrow={domain.eyebrow} title={domain.title} accent={domain.accentTitle} description={domain.proposition} tone={domain.accent} visual={<DomainHeroGraphic tone={domain.accent} code={domain.code} />}>
        <Link href="#courses" className="button secondary">Explore the curriculum <ArrowDown size={15} /></Link>
      </InteriorHero>

      <section className={`domain-signal domain-signal-${domain.accent}`}>
        <div className="container domain-signal-grid">
          <div className="domain-monogram"><DomainIcon size={34} /><span>{domain.code}</span><i /></div>
          <div><p className="section-kicker">OUR POINT OF VIEW</p><h2>{domain.thesis}</h2></div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <SectionIntro eyebrow="THE FIELD IS MOVING" title="What students must learn to see differently." text="The durable skill is not familiarity with today’s tool. It is the ability to reason about the system, its constraints, and the evidence behind a decision." center />
          <div className="shift-grid">
            {domain.shifts.map(shift => <article key={shift.label}><span>{shift.label}</span><div><small>FROM</small><p>{shift.from}</p></div><i>→</i><div><small>TO</small><strong>{shift.to}</strong></div></article>)}
          </div>
        </div>
      </section>

      <section className="inner-section soft-section" id="courses">
        <div className="container">
          <div className="split-heading"><SectionIntro eyebrow="INDUSTRY-VETTED COURSE PORTFOLIO" title="A pathway from foundations to consequential work." /><p>Representative courses can be configured as electives, honors pathways, minors, faculty-development modules, or an integrated specialization.</p></div>
          <div className="domain-course-list">
            {domain.courses.map((course, index) => <article key={course.code}><div><span>{course.code}</span><small>{course.structure}</small></div><h3>{course.title}</h3><p>{course.capability}</p><b>{String(index + 1).padStart(2, '0')}</b></article>)}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container practice-layout">
          <div className="practice-sticky"><p className="section-kicker">HOW WE TEACH THE DOMAIN</p><h2>Practice that creates professional judgment.</h2><p>Each learning experience is structured around how credible work is actually reviewed: assumptions are explicit, evidence is inspectable, and important tradeoffs must be defended.</p><div className={`domain-orbit orbit-${domain.accent}`}><DomainIcon size={31} /><span /><span /><span /><span /></div></div>
          <div className="practice-list">{domain.practices.map((practice, index) => <article key={practice.title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{practice.title}</h3><p>{practice.text}</p></div></article>)}</div>
        </div>
      </section>

      <section className={`inner-section domain-projects projects-${domain.accent}`}>
        <div className="container">
          <SectionIntro eyebrow="APPLIED WORK" title="The kind of problems students can learn to own." text="These briefs illustrate the project scope and engineering judgment we bring into programs, labs, and industry-supported capstones." />
          <div className="project-brief-grid">{domain.projects.map((project, index) => <article key={project.title}><div><span>BRIEF / {String(index + 1).padStart(2, '0')}</span><Radar size={20} /></div><h3>{project.title}</h3><p>{project.brief}</p><footer>{project.tags.map(tag => <small key={tag}>{tag}</small>)}</footer></article>)}</div>
        </div>
      </section>

      <section className="inner-section ink-band">
        <div className="container coe-blueprint">
          <div><p className="section-kicker light">CENTER OF EXCELLENCE BLUEPRINT</p><h2>{domain.coe.title}</h2><p>{domain.coe.text}</p></div>
          <div className={`blueprint-stack blueprint-${domain.accent}`}>{domain.coe.layers.map((layer, index) => <div key={layer.label}><span>{String(index + 1).padStart(2, '0')}</span><p><strong>{layer.label}</strong><small>{layer.detail}</small></p><Layers3 size={18} /></div>)}</div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container evidence-layout">
          <div className={`evidence-seal seal-${domain.accent}`}><Fingerprint size={29} /><strong>CAPABILITY</strong><span>EVIDENCE</span><i /></div>
          <div><p className="section-kicker">WHAT ACADEMIC LEADERS CAN INSPECT</p><h2>Proof beyond completion.</h2><p>Every program is designed to leave behind concrete evidence of what students can do and how well they can reason.</p></div>
          <div className="domain-evidence-list">{domain.evidence.map(item => <span key={item}><CheckCircle2 size={16} />{item}</span>)}</div>
        </div>
      </section>

      <section className="inner-section soft-section compact-collab">
        <div className="container">
          <SectionIntro eyebrow="WAYS TO BEGIN" title="Bring this domain into your institution at the right depth." center />
          <div className="collab-options">
            <Link href="/solutions/programs"><BookOpenCheck size={21} /><h3>Launch a Program</h3><p>Start with a credit-bearing elective or specialization.</p><span>Explore Programs →</span></Link>
            <Link href="/solutions/labs"><Binary size={21} /><h3>Establish a Lab</h3><p>Create the project, research, and community layer.</p><span>Explore Labs →</span></Link>
            <Link href="/solutions/partnerships"><Network size={21} /><h3>Build Industry Access</h3><p>Add practitioners, challenges, reviews, and immersion.</p><span>Explore Partnerships →</span></Link>
          </div>
        </div>
      </section>

      <PageCTA eyebrow={`${domain.code} / START A CONVERSATION`} title={`What could ${domain.shortName} look like at your institution?`} text="We’ll help you choose the right academic format, faculty enablement model, infrastructure, and first set of student outcomes." />
    </InteriorShell>
  );
}
