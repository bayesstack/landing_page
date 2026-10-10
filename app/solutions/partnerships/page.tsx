import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Compass, Map, MessageSquareMore, Mic2, Network, School, Sparkles, Trophy, UsersRound } from 'lucide-react';
import { CheckList, InteriorHero, InteriorShell, OutcomeStrip, PageCTA, SectionIntro } from '@/components/Interior';

export const metadata: Metadata = {
  title: 'Industry Partnerships & Immersions | BayesStack',
  description: 'Bring students closer to practitioners, companies, elite institutions, and the contexts in which important work happens.',
};

export default function PartnershipsPage() {
  return (
    <InteriorShell>
      <InteriorHero section="Solutions" current="Partnerships" eyebrow="ACCESS CHANGES AMBITION" title="Make industry more than" accent="a guest lecture." description="BayesStack creates structured access to practitioners, companies, institutions and cities so students can see how serious work happens, ask better questions and imagine a larger path for themselves." image="/images/documentary/industry-visit.webp" imageAlt="Indian undergraduate students learning from an engineer inside a working technology workshop" tone="sky">
        <Link href="#immersions" className="button secondary">Explore immersions</Link>
      </InteriorHero>

      <section className="inner-section compact-top"><div className="container"><OutcomeStrip items={[{ value: 'MEET', label: 'People doing the work', note: 'Practitioners and technical leaders' }, { value: 'ENTER', label: 'Places where it happens', note: 'Institutes, companies, cities' }, { value: 'RETURN', label: 'With a larger frame', note: 'Context, networks, aspiration' }]} /></div></section>

      <section className="inner-section" id="immersions">
        <div className="container editorial-split"><SectionIntro eyebrow="THE ABCs OF IMMERSION" title="Three ways to encounter a world larger than campus." /><div className="large-prose"><p>Immersion should not be tourism. Each experience is curated around questions, conversations, observation, and reflection. Students are selected through a campus challenge, prepared before the visit, and expected to translate what they encounter into a more ambitious view of their own work.</p></div></div>
        <div className="immersion-grid">
          <article className="immersion-card academic">
            <figure><Image src="/images/documentary/academic-immersion.webp" alt="Undergraduate students learning from a researcher during a visit to a university engineering laboratory" fill sizes="(max-width: 900px) 94vw, 33vw" /><div className="immersion-letter">A</div><figcaption>Research lab visit</figcaption></figure>
            <div className="immersion-body"><div className="immersion-label"><School size={22} /><span>ACADEMIC IMMERSION</span></div><h3>See how exceptional learning communities think.</h3><p>Students enter a strong institute as active observers. They meet researchers and student builders, inspect work in progress, and notice the habits that create a serious academic culture.</p><ul><li><b>Observe</b> laboratories, studios and project rituals</li><li><b>Converse</b> with researchers and student teams</li><li><b>Return</b> with one practice to start on campus</li></ul><small>Universities · research centers · student laboratories</small></div>
          </article>
          <article className="immersion-card business">
            <figure><Image src="/images/documentary/industry-visit.webp" alt="Undergraduate students speaking with an engineer inside a working technology facility" fill sizes="(max-width: 900px) 94vw, 33vw" /><div className="immersion-letter">B</div><figcaption>Product team visit</figcaption></figure>
            <div className="immersion-body"><div className="immersion-label"><Building2 size={22} /><span>BUSINESS IMMERSION</span></div><h3>Enter the rooms where products and systems are built.</h3><p>Students trace a real product from customer problem to live operation. Engineers, operators and founders make the decisions, compromises and standards behind the final interface visible.</p><ul><li><b>Trace</b> one system from brief to operation</li><li><b>Question</b> the people who made key decisions</li><li><b>Review</b> a student idea against real constraints</li></ul><small>Product companies · startups · technology operations</small></div>
          </article>
          <article className="immersion-card cultural">
            <figure><Image src="/images/documentary/cultural-immersion-mumbai.webp" alt="Undergraduate students observing public life during a guided learning walk in Mumbai" fill sizes="(max-width: 900px) 94vw, 33vw" /><div className="immersion-letter">C</div><figcaption>Mumbai learning walk</figcaption></figure>
            <div className="immersion-body"><div className="immersion-label"><Compass size={22} /><span>CULTURAL IMMERSION</span></div><h3>Learn to read a city, not just visit it.</h3><p>A city becomes a living system. Students observe how infrastructure, livelihoods, public space, design and local enterprise shape both the problems people face and the solutions that endure.</p><ul><li><b>Read</b> a neighborhood through people and systems</li><li><b>Document</b> tensions, adaptations and ingenuity</li><li><b>Translate</b> observation into a stronger problem frame</li></ul><small>Mumbai · Delhi · communities and local enterprise</small></div>
          </article>
        </div>
      </section>

      <section className="inner-section soft-section">
        <div className="container selection-layout">
          <div><p className="section-kicker">ACCESS IS EARNED</p><h2>The journey begins on campus.</h2><p>Immersion cohorts are selected through a visible technical or problem-solving challenge. The process gives every student a reason to participate and makes the eventual experience meaningful to those who earn it.</p></div>
          <div className="selection-path">
            {[[Trophy, 'Campus tournament', 'Students respond to a challenge and demonstrate judgment.'], [UsersRound, 'Selective cohort', 'A small group is selected for curiosity, effort, and potential.'], [Map, 'Prepared immersion', 'Context sessions and questions turn a visit into an inquiry.'], [Sparkles, 'Campus return', 'Students share insight and transmit ambition to the wider cohort.']].map(([Icon, title, text], index) => { const C = Icon as typeof Trophy; return <div key={title as string}><span>{String(index + 1).padStart(2, '0')}</span><C size={21} /><p><strong>{title as string}</strong><small>{text as string}</small></p></div>; })}
          </div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container">
          <SectionIntro eyebrow="INDUSTRY, THROUGHOUT THE YEAR" title="Access should not end when the bus returns." text="A broader partnership layer keeps practitioners within reach of students and faculty across the academic year." center />
          <div className="engagement-grid">
            <article><Mic2 size={23} /><span>ON CAMPUS</span><h3>Practitioner Masterclasses</h3><p>Senior practitioners unpack one consequential system, decision or failure in depth, then stay for questions that move past the prepared talk.</p></article>
            <article><MessageSquareMore size={23} /><span>ON DEMAND</span><h3>Expert Office Hours</h3><p>Students book focused conversations with domain experts for technical guidance, project critique, career context, or the question they cannot answer locally.</p></article>
            <article><Network size={23} /><span>AT MILESTONES</span><h3>Project & Architecture Reviews</h3><p>Practitioners enter student work at the moments that matter, testing assumptions and raising the standard before decisions become expensive.</p></article>
          </div>
        </div>
      </section>

      <section className="inner-section ink-band">
        <div className="container photo-review-grid">
          <div className="review-photo"><Image src="/images/documentary/industry-review.webp" alt="An experienced engineer reviewing a system design with Indian undergraduate project leads" fill sizes="(max-width: 900px) 94vw, 48vw" /><span><i /> MILESTONE REVIEW / LIVE</span></div>
          <div><p className="section-kicker light">MEANINGFUL PROXIMITY</p><h2>The right conversation can change the direction of a project or a life.</h2><p>Students rarely need another generic speech. They need someone credible to look closely at their work, ask the question they missed and show them what a higher standard looks like.</p><CheckList items={['Curated experts by domain and need', 'Clear context before every interaction', 'Focused small group formats', 'Actionable follow through after the session']} /></div>
        </div>
      </section>

      <section className="inner-section">
        <div className="container experience-system">
          <SectionIntro eyebrow="A PARTNERSHIP, NOT AN EVENT CALENDAR" title="One system. Multiple points of contact." text="BayesStack assembles an annual engagement portfolio around your institution’s priorities, student readiness, geography, and industry relationships." />
          <div>{[['Q1', 'Challenge & selection'], ['Q2', 'Masterclass series'], ['Q3', 'Industry immersion'], ['Q4', 'Project review & showcase']].map(([quarter, title]) => <span key={quarter}><b>{quarter}</b><i /><strong>{title}</strong></span>)}</div>
        </div>
      </section>

      <PageCTA title="Where should your students be able to go, and who should they be able to learn from?" text="We’ll shape an immersion and practitioner access portfolio around the opportunities your students rarely receive today." linkText="Build an Industry Partnership" />
    </InteriorShell>
  );
}
