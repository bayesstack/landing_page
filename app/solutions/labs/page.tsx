import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Blocks, Bot, CodeXml, FlaskConical, GitPullRequestArrow, Microscope, Presentation, Rocket, Users, Wrench } from 'lucide-react';
import { CheckList, InteriorHero, InteriorShell, OutcomeStrip, PageCTA, SectionIntro } from '@/components/Interior';

export const metadata: Metadata = {
  title: 'Campus Centers of Excellence | BayesStack Labs',
  description: 'Build a campus Center of Excellence where selected students undertake mentored capstones, industry challenges, research, and open-source work.',
};

export default function LabsPage() {
  return (
    <InteriorShell>
      <InteriorHero section="Solutions" current="Labs" eyebrow="A CENTER FOR AMBITIOUS WORK" title="Give the students who want more" accent="somewhere to build it." description="BayesStack Labs turns a campus space into an operating Center of Excellence, combining technical infrastructure, domain pathways, practitioner mentorship and a community built around real work." image="/images/documentary/modern-lab.webp" imageAlt="Indian undergraduate students building a robotics prototype in a well-equipped college laboratory" tone="violet">
        <Link href="#lab-model" className="button secondary">Explore the lab model</Link>
      </InteriorHero>

      <section className="inner-section compact-top"><div className="container"><OutcomeStrip items={[{ value: 'SELECT', label: 'Curated cohorts', note: 'Motivation before credentials' }, { value: 'BUILD', label: 'Milestone capstones', note: 'Working systems, not exercises' }, { value: 'SHOW', label: 'Public technical proof', note: 'Reviews, demos, portfolios' }]} /></div></section>

      <section className="inner-section" id="lab-model">
        <div className="container editorial-split"><SectionIntro eyebrow="THE CENTER OF EXCELLENCE" title="A technical community with an address on campus." /><div className="large-prose"><p>A lab is more than a room and more than a collection of equipment. It is a place with a standard: selected students work on difficult problems, receive serious feedback and keep going until an idea becomes inspectable.</p><p>BayesStack provides the operating model: the pathways, mentors, infrastructure, review cadence, project pipeline and finale that make the space matter.</p></div></div>
        <div className="container pillar-grid">
          {[
            ['Student Capstones', 'Students propose their own ideas, form teams, and build a distinctive technical product through explicit milestones.', Rocket, 'violet'],
            ['Industry Challenges', 'Partner problem statements become scoped applied projects for selected teams with practitioner reviews.', Blocks, 'sky'],
            ['Open Source & Competitions', 'Advanced members contribute publicly, join technical competitions, and learn to meet external standards.', GitPullRequestArrow, 'emerald'],
            ['Research & Prototyping', 'Promising questions become experiments, prototypes, technical papers, and applications to elite programs.', Microscope, 'amber'],
          ].map(([title, text, Icon, tone]) => { const C = Icon as typeof Rocket; return <article className={`pillar-card pillar-${tone}`} key={title as string}><C size={25} /><span>PATHWAY</span><h3>{title as string}</h3><p>{text as string}</p></article>; })}
        </div>
      </section>

      <section className="inner-section soft-section">
        <div className="container">
          <SectionIntro eyebrow="THE COHORT ARC" title="Ambition becomes progress when the milestones are visible." text="Every lab cohort moves through a deliberately staged operating rhythm. Students keep creative ownership; the system supplies the constraints that help them finish." center />
          <div className="cohort-timeline">
            {[
              ['01', 'Select', 'A challenge, audition, or proposal process identifies students ready to commit.'],
              ['02', 'Ground', 'Domain foundations, toolchains, team roles, and project scope are established.'],
              ['03', 'Build', 'Teams work in weekly cycles with technical checkpoints and mentor office hours.'],
              ['04', 'Review', 'Architecture, evidence, quality, and project judgment are tested at milestones.'],
              ['05', 'Demonstrate', 'The cohort presents working systems and defends its decisions at Demo Finale.'],
            ].map(([number, title, text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="inner-section photo-story-section">
        <div className="container photo-story-grid">
          <div className="photo-story-image"><Image src="/images/documentary/capstone-showcase.webp" alt="Indian undergraduate students demonstrating a prototype to faculty and industry practitioners" fill sizes="(max-width: 900px) 94vw, 55vw" /><div><span>DEMO FINALE / COHORT 04</span><strong>Working systems. Serious questions. Public proof.</strong></div></div>
          <div className="photo-story-copy"><p className="section-kicker">THE FINALE IS A STANDARD</p><h2>Students do not merely submit. They demonstrate and defend.</h2><p>The Demo Finale brings faculty, practitioners, peers, and institutional leaders into the room. Each team must show what works, explain what does not, and make the quality of its thinking visible.</p><CheckList items={['Live technical demonstration', 'Architecture and evidence review', 'Practitioner feedback', 'Verified portfolio artifact']} /></div>
        </div>
      </section>

      <section className="inner-section ink-band">
        <div className="container lab-stack">
          <div><p className="section-kicker light">WHAT MAKES THE LAB OPERATE</p><h2>Infrastructure is only useful when it supports a system of work.</h2></div>
          <div className="stack-grid">
            {[
              [Bot, 'Domain pathways', 'Focused tracks in AI, cloud, cyber, and quantitative systems.'],
              [CodeXml, 'Technical workspaces', 'Compute, repositories, datasets, environments, and testing.'],
              [Users, 'Mentor network', 'Practitioner checkpoints and expert office hours.'],
              [Wrench, 'Project operations', 'Briefs, milestones, review rubrics, and risk tracking.'],
              [FlaskConical, 'Prototype resources', 'Hardware, software, cloud credits, and experiment support.'],
              [Presentation, 'Showcase engine', 'Demo days, documentation, portfolios, and external visibility.'],
            ].map(([Icon, title, text]) => { const C = Icon as typeof Bot; return <article key={title as string}><C size={20} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container two-panel-outcome"><div><span className="inner-number-label">FOR THE STUDENT</span><h2>Belong to the community that builds.</h2><p>A place to find collaborators, earn technical trust, attempt difficult work, and leave with proof that goes beyond a grade.</p><CheckList items={['A specialized technical identity', 'Mentors and ambitious peers', 'Public work and credible references', 'Pathways to research and opportunity']} /></div><div><span className="inner-number-label">FOR THE INSTITUTION</span><h2>Make excellence visible on campus.</h2><p>A Center of Excellence creates a focal point for partnerships, faculty participation, student ambition, and the projects an institution wants to be known for.</p><CheckList items={['A repeatable innovation program', 'A pipeline for industry projects', 'Showcase-worthy student outcomes', 'An institutional capability that compounds']} /></div></div>
      </section>

      <PageCTA title="What should your campus become known for building?" text="We can shape the domain, physical footprint, cohort model, infrastructure, and first project pipeline for your Center of Excellence." linkText="Design a Campus Lab" />
    </InteriorShell>
  );
}
