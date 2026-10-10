type ScreenProps = { className?: string; compact?: boolean };

export function LearningStudioScreen({ className = '', compact = false }: ScreenProps) {
  return (
    <div className={`product-screen learning-screen ${compact ? 'is-compact' : ''} ${className}`} role="img" aria-label="BayesStack Learning Studio showing a complete student workspace and faculty cohort view">
      <div className="product-topbar">
        <div className="product-brand"><i />BAYESSTACK <span>LEARNING STUDIO</span></div>
        <div className="product-search">Search course, task, or student</div>
        <div className="product-user">AS</div>
      </div>
      <div className="product-shell">
        <aside className="product-sidebar">
          <strong>BS</strong>
          <nav aria-label="Studio navigation"><i className="active" /><i /><i /><i /><i /></nav>
          <span>?</span>
        </aside>
        <aside className="product-course-nav">
          <small>AI / MODULE 04</small>
          <h4>Reliable AI Systems</h4>
          <p className="course-progress"><span><i /></span>68% complete</p>
          <div className="course-module done"><b>01</b><p><strong>Evaluation first</strong><small>3 activities</small></p></div>
          <div className="course-module active"><b>02</b><p><strong>Grounded systems</strong><small>Studio open</small></p></div>
          <div className="course-module"><b>03</b><p><strong>Failure and safety</strong><small>Unlocks Monday</small></p></div>
          <div className="course-module"><b>04</b><p><strong>Production review</strong><small>Capstone gate</small></p></div>
        </aside>
        <section className="product-workspace">
          <header><div><small>STUDIO / MILESTONE 02</small><h4>Build a grounded answer pipeline</h4></div><span className="status-chip">● Saving</span></header>
          <div className="workspace-tabs"><span className="active">Task</span><span>Dataset</span><span>Notebook</span><span>Evidence</span></div>
          <div className="workspace-grid">
            <article className="task-panel"><small>THE DECISION</small><h5>Which retrieval configuration earns deployment?</h5><p>Compare two candidates against the evaluation set. Defend the threshold and publish the failure cases.</p><div className="constraint"><b>CONSTRAINTS</b><span>p95 latency &lt; 1.2s</span><span>citation recall &gt; 0.91</span><span>cost &lt; ₹0.18 / query</span></div></article>
            <article className="run-panel"><div className="run-head"><span>evaluation.py</span><b>RUN 08</b></div><code><span><i>01</i><em>candidate</em> = load()</span><span><i>02</i>result = evaluate(candidate)</span><span><i>03</i>assert recall &gt; <strong>0.91</strong></span><span><i>04</i>publish(result)</span></code><div className="test-result"><span>✓ 12 checks passed</span><small>Evidence updated</small></div></article>
          </div>
        </section>
        <aside className="product-inspector">
          <small>FACULTY SIGNALS</small><h4>Cohort pulse</h4>
          <div className="cohort-donut"><b>28</b><span>of 32<br />on track</span></div>
          <div className="signal-row"><span>Threshold reasoning</span><b>Strong</b></div>
          <div className="signal-row"><span>Failure analysis</span><b className="watch">Watch</b></div>
          <div className="review-note"><small>NEXT REVIEW</small><strong>Architecture defense</strong><span>Thu · 14:30</span></div>
          <button type="button">Open cohort map</button>
        </aside>
      </div>
    </div>
  );
}

export function LabOpsScreen({ className = '' }: ScreenProps) {
  return (
    <div className={`product-screen mini-ops-screen ${className}`} role="img" aria-label="Center of Excellence operations board with active projects, mentors and review gates">
      <header><div><i />LAB OPS</div><span>WEEK 08 / LIVE</span></header>
      <div className="ops-summary"><div><small>ACTIVE BUILDS</small><b>12</b><span>+3 this month</span></div><div><small>REVIEW READY</small><b>05</b><span>Thursday gate</span></div><div><small>MENTOR HOURS</small><b>38</b><span>Booked / 44</span></div></div>
      <div className="ops-board">
        <section><small>PROJECT PIPELINE</small><p><i className="violet" />Campus compute control plane <b>REVIEW</b></p><p><i className="teal" />Vision quality inspection <b>BUILD</b></p><p><i className="amber" />Payment failure router <b>TEST</b></p></section>
        <aside><small>THIS WEEK</small><span><b>Tue</b> Mentor clinic</span><span><b>Thu</b> Architecture gate</span><span><b>Sat</b> Open lab</span></aside>
      </div>
    </div>
  );
}

export function PartnershipAccessScreen({ className = '' }: ScreenProps) {
  return (
    <div className={`product-screen access-screen ${className}`} role="img" aria-label="Annual practitioner access portfolio with challenges, visits, reviews and follow through">
      <header><div><i />ACCESS PORTFOLIO</div><span>2026 / 27</span></header>
      <div className="access-title"><small>FOR COMPUTER SCIENCE / YEAR 3</small><h4>Proximity at the moments that matter.</h4></div>
      <div className="access-flow">
        {[['01', 'FRAME', 'A live challenge enters campus'], ['02', 'ENTER', 'Students meet the system in context'], ['03', 'REVIEW', 'Practitioners question the work'], ['04', 'RETURN', 'Insight reaches the wider cohort']].map(([n, title, text]) => <div key={n}><b>{n}</b><span><strong>{title}</strong><small>{text}</small></span></div>)}
      </div>
      <footer><span><i /> 4 confirmed encounters</span><b>Continuity, not an event calendar</b></footer>
    </div>
  );
}
