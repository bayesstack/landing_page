import type { Metadata } from 'next';
import { ArrowUpRight, BookOpenCheck, FlaskConical, Mail, MessageSquare, Network, Sparkles } from 'lucide-react';
import ContactActions from '@/components/ContactActions';
import { InteriorShell } from '@/components/Interior';

export const metadata: Metadata = {
  title: 'Contact BayesStack | Start an Institutional Conversation',
  description: 'Talk with BayesStack about academic programs, Centers of Excellence, and industry partnerships for your institution.',
};

export default function ContactPage() {
  return (
    <InteriorShell>
      <section className="contact-hero">
        <div className="inner-grid-bg" />
        <div className="container contact-hero-grid">
          <div className="contact-copy">
            <h1>Tell us what you want your institution to become <span>capable of next.</span></h1>
            <p>You do not need a finished brief. Start with the gap you see, the students you want to serve, or the capability you want to build. We’ll help make the question more concrete.</p>
            <ContactActions />
            <a className="direct-email" href="mailto:hello@bayesstack.com"><Mail size={15} /> hello@bayesstack.com <ArrowUpRight size={14} /></a>
          </div>
          <div className="conversation-card">
            <div className="conversation-top"><span><i /> CONVERSATION BRIEF</span><small>No form required</small></div>
            <p className="conversation-prompt">A useful first email can be as simple as:</p>
            <blockquote>“We are exploring an applied AI elective for third-year students and want to understand how faculty enablement would work.”</blockquote>
            <div className="brief-fields"><span><b>01</b><p><strong>Your institution</strong><small>Name, city, and department</small></p></span><span><b>02</b><p><strong>The opportunity</strong><small>What you want students or faculty to do</small></p></span><span><b>03</b><p><strong>Your starting point</strong><small>Timeline, cohort, or existing initiative</small></p></span></div>
          </div>
        </div>
      </section>

      <section className="inner-section contact-paths-section">
        <div className="container">
          <div className="contact-heading"><p className="section-kicker">WHERE THE CONVERSATION CAN BEGIN</p><h2>Choose the closest starting point.<br />We can shape the rest together.</h2></div>
          <div className="contact-paths">
            <a href="mailto:hello@bayesstack.com?subject=Exploring%20a%20BayesStack%20Program"><BookOpenCheck size={23} /><span>01 / PROGRAMS</span><h3>Launch an industry-shaped academic program.</h3><p>Electives, specializations, faculty development, and purpose-built studios.</p><b>Start this conversation →</b></a>
            <a href="mailto:hello@bayesstack.com?subject=Exploring%20a%20BayesStack%20Lab"><FlaskConical size={23} /><span>02 / LABS</span><h3>Establish a campus Center of Excellence.</h3><p>Domain pathways, capstones, infrastructure, mentors, and showcases.</p><b>Start this conversation →</b></a>
            <a href="mailto:hello@bayesstack.com?subject=Exploring%20a%20BayesStack%20Partnership"><Network size={23} /><span>03 / PARTNERSHIPS</span><h3>Bring practitioners and meaningful immersion closer.</h3><p>Masterclasses, expert access, reviews, challenges, and curated visits.</p><b>Start this conversation →</b></a>
          </div>
        </div>
      </section>

      <section className="inner-section soft-section contact-expect-section">
        <div className="container contact-expect-grid">
          <div><span className="contact-symbol"><MessageSquare size={24} /></span><p className="section-kicker">WHAT TO EXPECT</p><h2>A working conversation, not a generic sales call.</h2></div>
          <div className="expect-steps">{[['01', 'Understand', 'We begin with the institutional context, the learner and the gap you are trying to close.'], ['02', 'Frame', 'We identify the right program, lab, partnership or combination, and what must be true for it to work.'], ['03', 'Shape', 'If there is a useful fit, we outline the first cohort, operating model, stakeholders and next decisions.']].map(([number, title, text]) => <span key={number}><b>{number}</b><p><strong>{title}</strong><small>{text}</small></p></span>)}</div>
        </div>
      </section>

      <section className="contact-final">
        <div className="container"><Sparkles size={21} /><p>If the possibility matters, the first conversation is worth having.</p><a href="mailto:hello@bayesstack.com?subject=Institutional%20partnership%20enquiry">Write to hello@bayesstack.com <span>→</span></a></div>
      </section>
    </InteriorShell>
  );
}
