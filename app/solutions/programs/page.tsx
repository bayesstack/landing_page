import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenCheck, BrainCircuit, ChartNoAxesCombined, CloudCog, GraduationCap, Landmark, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import { CheckList, InteriorHero, InteriorShell, OutcomeStrip, PageCTA, SectionIntro, TextLink } from '@/components/Interior';
import { LearningStudioScreen } from '@/components/ProductScreens';

export const metadata: Metadata = {
  title: 'Industry-Shaped Academic Programs | BayesStack',
  description: 'University-ready programs designed with industry, delivered by faculty, and powered by purpose-built learning studios.',
};

const courses = [
  { icon: BrainCircuit, tag: 'AI ENGINEERING', title: 'Building with Foundation Models', detail: '4 credits · product engineering studio', tone: 'violet' },
  { icon: CloudCog, tag: 'CLOUD & PLATFORM', title: 'Distributed Systems under Failure', detail: '4 credits · systems practicum', tone: 'sky' },
  { icon: ShieldCheck, tag: 'CYBERSECURITY', title: 'Breaking and Defending Web Systems', detail: '4 credits · controlled security lab', tone: 'emerald' },
  { icon: Landmark, tag: 'FINTECH & QUANT', title: 'Quant Research Without Fooling Yourself', detail: '4 credits · research studio', tone: 'amber' },
];

export default function ProgramsPage() {
  return (
    <InteriorShell>
      <InteriorHero
        section="Solutions"
        current="Programs"
        eyebrow="FACULTY-LED · INDUSTRY-SHAPED"
        title="Bring the edge of industry"
        accent="into the academic system."
        description="BayesStack turns emerging industry capabilities into university ready courses, then equips your faculty to own and deliver them with rigor."
        image="/images/documentary/modern-classroom.webp"
        imageAlt="Professor leading an applied AI class with students working in teams"
        tone="indigo"
      >
        <Link href="#program-model" className="button secondary">See the program model</Link>
      </InteriorHero>

      <section className="inner-section compact-top">
        <div className="container">
          <OutcomeStrip items={[
            { value: '01', label: 'Industry currency', note: 'What practitioners use now' },
            { value: '02', label: 'Academic rigor', note: 'Credits, labs, rubrics, assessment' },
            { value: '03', label: 'Faculty ownership', note: 'Capability that stays on campus' },
          ]} />
        </div>
      </section>

      <section className="inner-section" id="program-model">
        <div className="container editorial-split">
          <div>
            <SectionIntro eyebrow="THE PROGRAM THESIS" title="The answer is not to work around faculty. It is to make faculty more capable." />
          </div>
          <div className="large-prose">
            <p>Universities already hold the trust, teaching muscle, and long-term relationship with students. Industry holds fast-moving context: which systems matter, how teams work, and where the technical bar is moving.</p>
            <p>BayesStack connects the two. We translate practitioner knowledge into an academically legible course, prepare faculty to lead it, and provide the software and delivery support that turns a syllabus into a lived learning experience.</p>
          </div>
        </div>

        <div className="container process-grid four-up">
          {[
            ['01', 'Listen to industry', 'Practitioners surface the capabilities, workflows, and judgment the field now demands.', UsersRound],
            ['02', 'Design the course', 'We structure concepts, credits, lab hours, assessments, rubrics, and prerequisite maps.', BookOpenCheck],
            ['03', 'Enable faculty', 'Faculty study the subject, rehearse delivery, inspect solutions, and calibrate evaluation.', GraduationCap],
            ['04', 'Run with evidence', 'Studios capture attempts, tests, milestones, feedback and capability, not attendance alone.', ChartNoAxesCombined],
          ].map(([number, title, text, Icon]) => {
            const IconComponent = Icon as typeof UsersRound;
            return <article className="process-card" key={number as string}><span>{number as string}</span><IconComponent size={23} /><h3>{title as string}</h3><p>{text as string}</p></article>;
          })}
        </div>
      </section>

      <section className="inner-section soft-section">
        <div className="container platform-layout">
          <div className="platform-copy">
            <span className="inner-number-label">THE LEARNING EXPERIENCE LAYER</span>
            <h2>Not a library of videos.<br />A studio for the work itself.</h2>
            <p>Each concept is delivered through an interface designed around the activity students need to perform: write and test code, inspect a system, reason about risk, tune a model, review evidence, or defend a decision.</p>
            <CheckList items={['Purpose-built concept studios', 'Live execution and automated test harnesses', 'Faculty guidance and cohort visibility', 'Rubric-linked milestone reviews']} />
          </div>
          <LearningStudioScreen />
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <SectionIntro eyebrow="PROGRAM PORTFOLIO" title="Courses for the systems being built now." text="A representative view of the academic programs BayesStack can shape with your institution. Each can begin as an elective, minor pathway, honors module, or faculty development track." center />
          <div className="course-grid">
            {courses.map(({ icon: Icon, tag, title, detail, tone }) => <article className={`course-card course-${tone}`} key={title}><div><Icon size={22} /><span>{tag}</span></div><h3>{title}</h3><p>{detail}</p><span className="course-status"><i /> Available for academic design</span></article>)}
          </div>
          <div className="portfolio-link"><TextLink href="/#domains">Explore all industry domains</TextLink></div>
        </div>
      </section>

      <section className="inner-section ink-band">
        <div className="container faculty-system">
          <div><p className="section-kicker light">WHAT YOUR FACULTY RECEIVES</p><h2>Everything needed to teach with confidence.</h2><p>Faculty should not have to reconstruct a fast moving field alone. Every program arrives as an operating system for teaching, then becomes institutional capability through enablement and repeated delivery.</p></div>
          <div className="deliverable-grid">
            {['BOS-ready syllabus and credit structure', 'Session plans and concept notes', 'Studios, labs, datasets, and reference solutions', 'Assessments, rubrics, and question banks', 'Faculty bootcamp and delivery rehearsal', 'Cohort dashboards and intervention cues'].map((item, index) => <span key={item}><b>{String(index + 1).padStart(2, '0')}</b>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container evidence-card">
          <div><Sparkles size={23} /><p className="section-kicker">THE COMPOUNDING OUTCOME</p><h2>The first cohort learns a course.<br />The institution gains a capability.</h2></div>
          <div><p>After the first delivery, your faculty understand the subject, your academic system contains the course, your students have demonstrable work, and the next cohort starts from a stronger base.</p><CheckList items={['A contemporary academic offering', 'Faculty who can independently lead it', 'Student work that can be inspected', 'A course that improves with every run']} /></div>
        </div>
      </section>

      <PageCTA title="Which capability should your institution teach next?" text="Tell us what your students and departments are trying to become capable of. We’ll map the right program, academic format, and first-cohort plan." linkText="Design a Program" />
    </InteriorShell>
  );
}
