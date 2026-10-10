'use client';

import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import { Certificate01Icon, CodeIcon, File02Icon, TaskDone01Icon } from '@hugeicons/core-free-icons';
import { LearningStudioScreen } from '@/components/ProductScreens';

const items = [
  {
    title: 'A studio students can build in',
    text: 'Browser workspaces, tests, runtime feedback and project evidence stay connected to the course.',
    icon: CodeIcon,
    label: 'Learning studio',
  },
  {
    title: 'A syllabus an academic council can inspect',
    text: 'Outcomes, credits, weekly plans, assessments and rubrics arrive ready for institutional review.',
    icon: File02Icon,
    label: 'Academic package',
  },
  {
    title: 'A brief that makes judgment visible',
    text: 'Real constraints, milestones and review gates turn a project into more than a final demo.',
    icon: TaskDone01Icon,
    label: 'Project system',
  },
  {
    title: 'A portfolio that carries evidence',
    text: 'Commits, test results, reviews and demonstrations show what a student can actually do.',
    icon: Certificate01Icon,
    label: 'Capability record',
  },
];

function StudioArtifact() {
  return <LearningStudioScreen className="experience-artifact" compact />;
}

function AppFrame({ section, children }: { section: string; children: ReactNode }) {
  return <div className="experience-artifact artifact-app"><div className="artifact-app-top"><strong><i />BAYESSTACK</strong><span>{section}</span><b>AS</b></div><div className="artifact-app-shell"><aside><i className="active" /><i /><i /><i /></aside><main>{children}</main></div></div>;
}

function SyllabusArtifact() {
  return <AppFrame section="ACADEMIC DESIGN"><div className="artifact-syllabus"><header><span>BSE AI 401</span><b>4 CREDITS</b></header><h4>Building Reliable AI Systems</h4><p>Course architecture</p><div className="syllabus-weeks"><span><b>01</b> Evaluation before demos</span><span><b>02</b> Retrieval and grounding</span><span><b>03</b> Failure, safety and cost</span><span><b>04</b> Production review</span></div><footer><strong>Board of Studies package</strong><span>12 outcomes mapped</span></footer></div></AppFrame>;
}

function BriefArtifact() {
  return <AppFrame section="PROJECT SYSTEM"><div className="artifact-brief"><span className="brief-chip">PRACTITIONER BRIEF / 08</span><h4>Design a payment router that survives provider failure.</h4><div className="brief-track"><span><b>01</b><small>Architecture</small></span><i /><span><b>02</b><small>Failure test</small></span><i /><span><b>03</b><small>Review</small></span></div><footer><span>6 deliverables</span><span>2 review gates</span><span>1 live system</span></footer></div></AppFrame>;
}

function PassportArtifact() {
  return <AppFrame section="CAPABILITY RECORD"><div className="artifact-passport"><header><span>AS</span><p><strong>Ananya S.</strong><small>Capability record</small></p><b>VERIFIED</b></header><div className="passport-signal"><span><b>18</b><small>COMMITS</small></span><span><b>04</b><small>REVIEWS</small></span><span><b>12</b><small>TESTS</small></span></div><div className="passport-bar"><p><span>Systems reasoning</span><b>Strong</b></p><i><span /></i></div><footer>Evidence from course and capstone work</footer></div></AppFrame>;
}

const artifacts = [StudioArtifact, SyllabusArtifact, BriefArtifact, PassportArtifact];

export default function ProofShowcase() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % items.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const Artifact = artifacts[active];

  return (
    <div className="experience-showcase" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={() => setPaused(false)}>
      <div className="experience-tabs" role="tablist" aria-label="BayesStack deliverables">
        {items.map((item, index) => (
          <button key={item.label} type="button" role="tab" aria-selected={active === index} className={active === index ? 'is-active' : ''} onClick={() => setActive(index)}>
            <span><HugeiconsIcon icon={item.icon} size={21} strokeWidth={1.7} /></span>
            <p><small>{item.label}</small><strong>{item.title}</strong></p>
            <i><b /></i>
          </button>
        ))}
      </div>
      <div className="experience-stage" role="tabpanel">
        <div className="stage-copy"><span>0{active + 1} / 04</span><h3>{items[active].title}</h3><p>{items[active].text}</p></div>
        <Artifact />
      </div>
    </div>
  );
}
