import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowDown, Compass, Handshake, Layers3, Repeat2, Scale, Sparkles } from 'lucide-react';
import { InteriorHero, InteriorShell, PageCTA, SectionIntro } from '@/components/Interior';
import { GenerationalCapabilityGraphic, InstitutionLoopGraphic } from '@/components/BrandGraphics';

export const metadata: Metadata = {
  title: 'About BayesStack | Institutions That Learn as They Teach',
  description: 'BayesStack exists to help educational institutions evolve with every new possibility in how people learn, teach, and grow.',
};

export default function AboutPage() {
  return (
    <InteriorShell>
      <InteriorHero section="Company" current="About" eyebrow="WHY BAYESSTACK EXISTS" title="Every generation should become capable of" accent="more than the one before it." description="We help educational institutions evolve with every new possibility in how people learn, teach and grow because the institutions preparing the future deserve systems that evolve with it." tone="ink" visual={<GenerationalCapabilityGraphic />}>
        <Link href="#belief" className="button secondary">Read our belief <ArrowDown size={15} /></Link>
      </InteriorHero>

      <section className="about-opening" id="belief">
        <div className="container about-opening-grid">
          <div className="opening-mark"><span>01</span><i /><strong>OUR BELIEF</strong></div>
          <div className="belief-copy">
            <p className="belief-lead">Every generation inherits a world built by those who came before it: its knowledge, its discoveries, its progress and its unfinished problems.</p>
            <p>Then we ask the next generation to take it further: to solve what we could not solve, build what we could not build, and imagine what we could not imagine.</p>
            <p>The world outside the classroom transforms. Knowledge expands. Industries are rebuilt. Technology changes what is possible. Educational institutions carry the responsibility of preparing people for that changing world, often without the tools, systems, or access needed to evolve at the same pace.</p>
            <p>A brilliant teacher without the right tools can only reach so far. A curriculum that does not evolve eventually describes a world that no longer exists. A learner prepared only for what was may never discover what they could help create.</p>
          </div>
        </div>
      </section>

      <section className="generation-section">
        <div className="container generation-visual">
          <div className="generation-line"><span>KNOWLEDGE</span><i /><span>CAPABILITY</span><i /><span>PROGRESS</span><i /><span>NEW POSSIBILITY</span></div>
          <blockquote>“Make one learner more capable, and you change a life. Make an institution more capable, and you change every life that passes through it, again and again, generation after generation.”</blockquote>
        </div>
      </section>

      <section className="inner-section mission-section">
        <div className="container mission-card">
          <div><span>02</span><Compass size={27} /></div>
          <div><p className="section-kicker">OUR MISSION</p><h2>Help educational institutions evolve with every new possibility in how people learn, teach, and grow.</h2></div>
        </div>
      </section>

      <section className="inner-section soft-section">
        <div className="container">
          <SectionIntro eyebrow="THE INSTITUTION IS THE LEVER" title="We are not here to make universities less central. We are here to make them more capable." text="Universities hold continuity, public trust, faculty communities, and the ability to affect generations of learners. Our work strengthens that position by bringing new curriculum, infrastructure, tools, and relationships within institutional reach." center />
          <InstitutionLoopGraphic className="institution-system-graphic" />
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <SectionIntro eyebrow="HOW WE CHOOSE TO WORK" title="Principles for building with institutions." text="These principles shape what we design, what we refuse to optimize away, and how we judge whether the work is worth doing." />
          <div className="principles-grid">
            {[
              ['01', 'Capability over dependency', 'Our work should leave faculty, systems and institutions more capable, not permanently dependent on an external provider.', Layers3],
              ['02', 'Evidence over theatre', 'A polished event is not an outcome. Working artifacts, faculty ownership, student judgment, and repeatable systems are.', Scale],
              ['03', 'Context over fashion', 'We translate what is changing without chasing novelty. The right capability must fit the learner, discipline, and institution.', Compass],
              ['04', 'Partnership over replacement', 'Faculty, academic leaders, students, and practitioners each hold knowledge the others do not. Good systems respect every role.', Handshake],
              ['05', 'Iteration over permanence', 'Institutions should learn as they teach. Every cohort should leave the curriculum, tools, and operating model stronger.', Repeat2],
            ].map(([number, title, text, Icon]) => { const C = Icon as typeof Layers3; return <article key={number as string}><span>{number as string}</span><C size={24} /><h3>{title as string}</h3><p>{text as string}</p></article>; })}
          </div>
        </div>
      </section>

      <section className="inner-section ink-band">
        <div className="container work-model">
          <div><p className="section-kicker light">WHAT WE DO</p><h2>Build the missing connective tissue.</h2><p>Between curriculum and current practice. Between faculty intent and delivery tools. Between student ambition and a place to act on it. Between campus and the people, problems, and standards beyond it.</p></div>
          <div>{[['Programs', 'Industry-shaped curriculum, faculty enablement, and purpose-built learning studios.'], ['Labs', 'Centers of Excellence for capstones, research, prototyping, and ambitious communities.'], ['Partnerships', 'Practitioners, reviews, challenges, masterclasses, and meaningful immersion.']].map(([title, text], index) => <Link href={`/solutions/${title.toLowerCase()}`} key={title}><span>0{index + 1}</span><p><strong>{title}</strong><small>{text}</small></p><b>→</b></Link>)}</div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container closing-belief"><Sparkles size={24} /><p>Civilization advances when each generation becomes capable of more than the one before it.</p><h2>The institutions that prepare them must advance with them.</h2></div>
      </section>

      <PageCTA eyebrow="BUILD WITH US" title="What could your institution become capable of next?" text="Start with the learning, research, or industry-access gap you most want to close. We’ll explore the system around it together." />
    </InteriorShell>
  );
}
