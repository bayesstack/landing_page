export type DomainSlug = 'ai-engineering' | 'cloud-platform-engineering' | 'cybersecurity-digital-trust' | 'fintech-quantitative-systems';

export type DomainData = {
  slug: DomainSlug;
  shortName: string;
  eyebrow: string;
  title: string;
  accentTitle: string;
  proposition: string;
  accent: 'violet' | 'sky' | 'emerald' | 'amber';
  code: string;
  thesis: string;
  shifts: Array<{ label: string; from: string; to: string }>;
  courses: Array<{ code: string; title: string; structure: string; capability: string }>;
  practices: Array<{ title: string; text: string }>;
  projects: Array<{ title: string; brief: string; tags: string[] }>;
  coe: { title: string; text: string; layers: Array<{ label: string; detail: string }> };
  evidence: string[];
};

export const domainList: DomainData[] = [
  {
    slug: 'ai-engineering',
    shortName: 'AI Engineering',
    eyebrow: 'DOMAIN 01 / INTELLIGENT SYSTEMS',
    title: 'Move beyond AI demos.',
    accentTitle: 'Build systems that earn trust.',
    proposition: 'Students learn to build, evaluate and operate intelligent systems across machine learning, computer vision, foundation models and agents. Every claim must survive evidence.',
    accent: 'violet',
    code: 'AI',
    thesis: 'AI education is moving from model knowledge to systems judgment.',
    shifts: [
      { label: 'THE UNIT OF WORK', from: 'A notebook experiment', to: 'A reliable intelligent application' },
      { label: 'THE CORE QUESTION', from: 'Can the model predict?', to: 'Can the system be trusted?' },
      { label: 'THE ENGINEERING BAR', from: 'Accuracy in isolation', to: 'Evaluation, safety, cost, latency, and operation' },
    ],
    courses: [
      { code: 'AI-301', title: 'Building Reliable AI Systems', structure: '4 credits · lecture and systems lab', capability: 'Design reproducible training, evaluation and inference pipelines that can survive outside a notebook.' },
      { code: 'AI-312', title: 'Computer Vision in the Wild', structure: '4 credits · field dataset studio', capability: 'Build perception systems that account for noise, drift, edge deployment and imperfect data.' },
      { code: 'AI-401', title: 'Building with Foundation Models', structure: '4 credits · product engineering studio', capability: 'Engineer grounded applications with retrieval, evaluation, observability and cost controls.' },
      { code: 'AI-415', title: 'Agentic AI Systems', structure: '4 credits · intensive build studio', capability: 'Design tool using agents with memory, planning, approval boundaries and recovery paths.' },
      { code: 'AI-422', title: 'AI Evaluation and Red Teaming', structure: '4 credits · evaluation lab', capability: 'Find failure before users do through adversarial tests, safety cases and model risk reviews.' },
      { code: 'AI-490', title: 'Intelligent Systems Studio', structure: '4 credits · reviewed capstone', capability: 'Ship a working AI system through architecture, evaluation and deployment reviews.' },
    ],
    practices: [
      { title: 'Evaluation before demos', text: 'Students define datasets, baselines, failure taxonomies, and evaluation harnesses before they optimize presentation.' },
      { title: 'Systems around models', text: 'Data pipelines, retrieval, orchestration, observability, guardrails, and human workflows are treated as first-class engineering.' },
      { title: 'Evidence-based iteration', text: 'Experiments are versioned; claims are supported by measurements; regressions are made visible.' },
      { title: 'Responsible deployment', text: 'Safety, privacy, cost, latency, and misuse are assessed alongside functional performance.' },
    ],
    projects: [
      { title: 'Multilingual public-service copilot', brief: 'Grounded retrieval and response evaluation across Indian languages.', tags: ['RAG', 'Evaluation', 'NLP'] },
      { title: 'Vision-assisted quality inspection', brief: 'Edge-aware detection pipeline with drift and false-positive analysis.', tags: ['Vision', 'MLOps', 'Edge'] },
      { title: 'Autonomous research workflow', brief: 'Tool-using agent with source verification, budgets, and human approval.', tags: ['Agents', 'Safety', 'Systems'] },
    ],
    coe: {
      title: 'An AI Engineering Center of Excellence',
      text: 'A campus capability for building, evaluating and responsibly deploying intelligent systems, not a collection of GPU workstations.',
      layers: [
        { label: 'FOUNDATIONS', detail: 'ML, probability, data, optimization, software engineering' },
        { label: 'PLATFORM', detail: 'Compute, experiment tracking, model registry, evaluation suites' },
        { label: 'BUILD', detail: 'Vision, language, generative AI, agents, intelligent applications' },
        { label: 'PROVE', detail: 'Benchmarks, safety reviews, demos, papers, open-source artifacts' },
      ],
    },
    evidence: ['Reproducible experiment records', 'Evaluation datasets and test harnesses', 'Model and system cards', 'Live application demonstrations'],
  },
  {
    slug: 'cloud-platform-engineering',
    shortName: 'Cloud & Platform',
    eyebrow: 'DOMAIN 02 / DIGITAL INFRASTRUCTURE',
    title: 'Teach what happens',
    accentTitle: 'after the code ships.',
    proposition: 'Students move from running one application to designing platforms that can deploy, observe and recover under real constraints. Failure becomes part of the curriculum.',
    accent: 'sky',
    code: 'CL',
    thesis: 'Modern software education must include what happens after the code runs locally.',
    shifts: [
      { label: 'THE UNIT OF WORK', from: 'One application', to: 'A service in a living system' },
      { label: 'THE CORE QUESTION', from: 'Does it run?', to: 'Can it operate under change and failure?' },
      { label: 'THE ENGINEERING BAR', from: 'Manual deployment', to: 'Repeatable platforms, observability, and reliability' },
    ],
    courses: [
      { code: 'CL-301', title: 'Cloud Systems from First Principles', structure: '4 credits · deployment lab', capability: 'Package, deploy and operate service based applications while seeing every layer beneath them.' },
      { code: 'CL-315', title: 'Distributed Systems under Failure', structure: '4 credits · systems practicum', capability: 'Reason about consistency, replication, coordination and the failures diagrams tend to hide.' },
      { code: 'CL-402', title: 'Internal Developer Platforms', structure: '4 credits · platform studio', capability: 'Build paved roads and self service workflows that make engineering teams faster and safer.' },
      { code: 'CL-410', title: 'Infrastructure as Code at Scale', structure: '4 credits · automation studio', capability: 'Create reviewable, testable and repeatable infrastructure with policy built into delivery.' },
      { code: 'CL-421', title: 'SRE and Incident Practice', structure: '4 credits · operations lab', capability: 'Set reliability targets, respond to incidents and learn from systems under stress.' },
      { code: 'CL-490', title: 'Resilient Systems Studio', structure: '4 credits · reviewed capstone', capability: 'Deliver a measured platform under load, change and deliberately injected failure.' },
    ],
    practices: [
      { title: 'Architecture under constraints', text: 'Students make explicit choices about scale, consistency, cost, latency, and failure instead of copying reference diagrams.' },
      { title: 'Everything as code', text: 'Infrastructure, policy, delivery pipelines, and environment configuration become versioned, reviewable systems.' },
      { title: 'Observability as a design input', text: 'Logs, metrics, traces and service level objectives are built with the system, not attached afterward.' },
      { title: 'Failure as curriculum', text: 'Load tests, dependency failures, rollbacks, and incident reviews teach operational judgment.' },
    ],
    projects: [
      { title: 'Internal developer platform', brief: 'Self-service service deployment with policy, templates, and observability.', tags: ['Platform', 'IaC', 'DX'] },
      { title: 'Failure-aware commerce backend', brief: 'Distributed transaction workflow tested under dependency outages.', tags: ['Distributed', 'SRE', 'Chaos'] },
      { title: 'Campus compute control plane', brief: 'Multi-tenant scheduling, quotas, cost visibility, and workload lifecycle.', tags: ['Cloud', 'Control plane', 'FinOps'] },
    ],
    coe: {
      title: 'A Cloud & Platform Engineering Center of Excellence',
      text: 'A campus environment where students operate shared platforms, practice reliability, and learn infrastructure through responsibility for real systems.',
      layers: [
        { label: 'FOUNDATIONS', detail: 'Networks, operating systems, distributed computing, software design' },
        { label: 'PLATFORM', detail: 'Containers, clusters, IaC, CI/CD, secrets, observability' },
        { label: 'OPERATE', detail: 'SLOs, incident response, capacity, security, cost management' },
        { label: 'PROVE', detail: 'Architecture reviews, load tests, game days, runbooks, demos' },
      ],
    },
    evidence: ['Versioned infrastructure repositories', 'Service-level objectives and dashboards', 'Load and failure-test reports', 'Incident reviews and operational runbooks'],
  },
  {
    slug: 'cybersecurity-digital-trust',
    shortName: 'Cybersecurity',
    eyebrow: 'DOMAIN 03 / DIGITAL TRUST',
    title: 'Security starts with',
    accentTitle: 'how the system is designed.',
    proposition: 'Students learn to see assets, identities, trust boundaries and attack paths, then engineer and verify the controls that meaningfully reduce risk.',
    accent: 'emerald',
    code: 'CY',
    thesis: 'Security education should produce judgment, not a catalog of tools and exploits.',
    shifts: [
      { label: 'THE UNIT OF WORK', from: 'An isolated vulnerability', to: 'A system with assets, actors, and trust boundaries' },
      { label: 'THE CORE QUESTION', from: 'Can it be attacked?', to: 'How should risk be reduced and verified?' },
      { label: 'THE ENGINEERING BAR', from: 'Tool output', to: 'Evidence, prioritization, controls, and response' },
    ],
    courses: [
      { code: 'CY-301', title: 'Breaking and Defending Web Systems', structure: '4 credits · controlled security lab', capability: 'Find, explain and fix application weaknesses inside a legal and instrumented environment.' },
      { code: 'CY-315', title: 'Detection Engineering', structure: '4 credits · blue team studio', capability: 'Turn telemetry and attacker behavior into useful detections, investigations and response actions.' },
      { code: 'CY-402', title: 'Cloud Identity and Zero Trust', structure: '4 credits · cloud defense lab', capability: 'Protect identities, workloads, data and infrastructure across realistic cloud systems.' },
      { code: 'CY-410', title: 'Threat Modeling Real Products', structure: '4 credits · architecture practicum', capability: 'Translate product context into trust boundaries, attack paths and prioritized security decisions.' },
      { code: 'CY-425', title: 'Incident Response Lab', structure: '4 credits · scenario based studio', capability: 'Triage, contain and investigate realistic incidents, then explain what must change.' },
      { code: 'CY-490', title: 'Digital Trust Studio', structure: '4 credits · reviewed capstone', capability: 'Assess a scoped system and prove that the highest priority risks were meaningfully reduced.' },
    ],
    practices: [
      { title: 'Legal and ethical boundaries', text: 'Every exercise is scoped, authorized, isolated, and connected to responsible professional conduct.' },
      { title: 'Threat informed engineering', text: 'Students begin with assets, adversaries, attack paths and impact, not a favorite tool.' },
      { title: 'Blue-team evidence', text: 'Detection logic, telemetry, timelines, control validation, and incident artifacts make learning inspectable.' },
      { title: 'Security in the build loop', text: 'Secure design, code review, dependency risk, cloud policy, and testing enter before release.' },
    ],
    projects: [
      { title: 'Cloud breach simulation range', brief: 'Instrumented environment for identity compromise, detection, and response.', tags: ['CloudSec', 'IR', 'Detection'] },
      { title: 'Secure payment service review', brief: 'Threat model, code analysis, controls, and verification plan.', tags: ['AppSec', 'Threat model', 'Trust'] },
      { title: 'Campus security operations lab', brief: 'Telemetry pipeline and investigation playbooks for realistic scenarios.', tags: ['SOC', 'SIEM', 'Forensics'] },
    ],
    coe: {
      title: 'A Cybersecurity & Digital Trust Center of Excellence',
      text: 'A controlled campus environment for secure engineering, defensive operations, applied research, and institution-wide security capability.',
      layers: [
        { label: 'FOUNDATIONS', detail: 'Systems, networks, applications, identity, cryptography, risk' },
        { label: 'RANGE', detail: 'Isolated targets, telemetry, cloud labs, source code, scenarios' },
        { label: 'DEFEND', detail: 'Threat modeling, hardening, detection, response, secure design' },
        { label: 'PROVE', detail: 'Assessments, detections, incident reports, control validation' },
      ],
    },
    evidence: ['Threat models and attack-path maps', 'Detection rules with validation data', 'Security architecture decisions', 'Incident timelines and after-action reviews'],
  },
  {
    slug: 'fintech-quantitative-systems',
    shortName: 'FinTech & Quant',
    eyebrow: 'DOMAIN 04 / FINANCIAL SYSTEMS',
    title: 'Build systems where money moves',
    accentTitle: 'and trust is engineered.',
    proposition: 'Students connect software, markets, mathematics and controls to build financial systems that are measurable, resilient and auditable in the real world.',
    accent: 'amber',
    code: 'FQ',
    thesis: 'FinTech education must connect mathematical models to the systems, incentives, and controls of real financial activity.',
    shifts: [
      { label: 'THE UNIT OF WORK', from: 'A formula or interface', to: 'A regulated, adversarial financial workflow' },
      { label: 'THE CORE QUESTION', from: 'Does the model look profitable?', to: 'Does the evidence survive costs, risk, and reality?' },
      { label: 'THE ENGINEERING BAR', from: 'A backtest result', to: 'Reproducible data, controls, execution, and auditability' },
    ],
    courses: [
      { code: 'FQ-301', title: 'Financial Data Engineering', structure: '4 credits · data systems lab', capability: 'Build trustworthy financial datasets with provenance, timing, reconciliation and auditability.' },
      { code: 'FQ-315', title: 'Engineering Digital Payments', structure: '4 credits · payments studio', capability: 'Design payment workflows for correctness, resilience, fraud controls and reconciliation.' },
      { code: 'FQ-402', title: 'Quant Research Without Fooling Yourself', structure: '4 credits · research studio', capability: 'Test strategies with leakage controls, realistic costs, baselines and honest failure statements.' },
      { code: 'FQ-410', title: 'Electronic Markets and Trading Systems', structure: '4 credits · market simulation lab', capability: 'Reason about orders, liquidity, execution, market impact and the systems connecting them.' },
      { code: 'FQ-425', title: 'Fraud, Risk and Financial Intelligence', structure: '4 credits · decision systems lab', capability: 'Engineer models and controls for fraud, credit risk and operational decision making.' },
      { code: 'FQ-490', title: 'FinTech Systems Studio', structure: '4 credits · reviewed capstone', capability: 'Deliver an auditable financial application or research system through formal reviews.' },
    ],
    practices: [
      { title: 'Institutional-quality data work', text: 'Students account for provenance, timing, corporate actions, missingness, and the subtle ways datasets mislead.' },
      { title: 'Controls with every workflow', text: 'Reconciliation, idempotency, authorization, audit trails, and exception handling are part of the design.' },
      { title: 'Research without self-deception', text: 'Backtests include costs, leakage checks, baselines, out-of-sample validation, and clear failure statements.' },
      { title: 'Finance in context', text: 'Market structure, regulation, incentives, consumer outcomes, and systemic risk sit alongside code and mathematics.' },
    ],
    projects: [
      { title: 'Resilient payment router', brief: 'Idempotent orchestration, failure recovery, fraud signals, and reconciliation.', tags: ['Payments', 'Distributed', 'Risk'] },
      { title: 'Evidence-first strategy research', brief: 'Reproducible factor study with costs, bias controls, and risk analysis.', tags: ['Quant', 'Backtest', 'Markets'] },
      { title: 'Transaction anomaly platform', brief: 'Streaming features, explainable alerts, investigator workflow, and feedback.', tags: ['Fraud', 'ML', 'Operations'] },
    ],
    coe: {
      title: 'A FinTech & Quantitative Systems Center of Excellence',
      text: 'A campus environment for financial computing, payments engineering, quantitative research, and trustworthy financial innovation.',
      layers: [
        { label: 'FOUNDATIONS', detail: 'Finance, probability, statistics, economics, software, data' },
        { label: 'PLATFORM', detail: 'Market data, research notebooks, backtesting, payment simulators' },
        { label: 'BUILD', detail: 'Payments, risk, fraud, trading, financial applications' },
        { label: 'PROVE', detail: 'Audit trails, research reports, controls, demos, model reviews' },
      ],
    },
    evidence: ['Reproducible research packages', 'Bias- and cost-aware backtests', 'Control and reconciliation designs', 'Auditable financial system demonstrations'],
  },
];

export const domainBySlug = Object.fromEntries(domainList.map(domain => [domain.slug, domain])) as Record<DomainSlug, DomainData>;
