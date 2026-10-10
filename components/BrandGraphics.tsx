import type { ReactNode } from 'react';

type GraphicProps = { className?: string };
type DomainTone = 'violet' | 'sky' | 'emerald' | 'amber';

const domainPalettes = {
  violet: { accent: '#8B7BE8', bright: '#B8ABFF', soft: '#25234A', label: 'AI SYSTEMS LAB' },
  sky: { accent: '#43A9D0', bright: '#78D4F2', soft: '#173E50', label: 'PLATFORM CONTROL' },
  emerald: { accent: '#3DBD95', bright: '#74DBBA', soft: '#173F39', label: 'TRUST OPERATIONS' },
  amber: { accent: '#D8A33D', bright: '#F1C96B', soft: '#49391D', label: 'MARKET SYSTEMS' },
};

function DomainGraphicFrame({ tone, code, className, children }: { tone: DomainTone; code: string; className: string; children: ReactNode }) {
  const palette = domainPalettes[tone];
  return (
    <svg className={className} viewBox="0 0 660 540" role="img" aria-label={`${palette.label} interface illustration`}>
      <defs>
        <pattern id={`grid-${tone}`} width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#35515C" strokeWidth=".65" /></pattern>
        <filter id={`shadow-${tone}`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="16" stdDeviation="13" floodColor="#071A23" floodOpacity=".28" /></filter>
      </defs>
      <rect width="660" height="540" rx="28" fill="#102A37" />
      <rect width="660" height="540" rx="28" fill={`url(#grid-${tone})`} opacity=".42" />
      <circle cx="585" cy="74" r="128" fill={palette.accent} opacity=".09" />
      <rect x="38" y="38" width="584" height="464" rx="17" fill="#F8FAF9" filter={`url(#shadow-${tone})`} />
      <rect x="38" y="38" width="584" height="52" rx="17" fill="#0C222D" /><rect x="38" y="72" width="584" height="18" fill="#0C222D" />
      <circle cx="62" cy="64" r="5" fill={palette.accent} /><text x="76" y="68" fill="#F5F8F8" fontSize="11" fontFamily="sans-serif" fontWeight="700">{palette.label}</text>
      <rect x="533" y="53" width="65" height="22" rx="11" fill={palette.soft} /><text x="550" y="68" fill={palette.bright} fontSize="10" fontFamily="monospace" fontWeight="700">{code} / LIVE</text>
      {children}
    </svg>
  );
}

export function ProgramStudioGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 720 520" role="img" aria-label="BayesStack learning studio showing a course pathway, live project workspace and faculty review">
      <rect width="720" height="520" rx="28" fill="#EEF3F3" />
      <g opacity=".55" fill="#9CB3B6">
        {Array.from({ length: 11 }).map((_, row) => Array.from({ length: 15 }).map((__, col) => <circle key={`${row}-${col}`} cx={32 + col * 47} cy={30 + row * 46} r="1.5" />))}
      </g>
      <rect x="52" y="55" width="520" height="364" rx="18" fill="#102A37" />
      <rect x="52" y="55" width="520" height="52" rx="18" fill="#173846" />
      <rect x="52" y="89" width="520" height="18" fill="#173846" />
      <circle cx="80" cy="81" r="5" fill="#F47C66" /><circle cx="98" cy="81" r="5" fill="#E9B949" /><circle cx="116" cy="81" r="5" fill="#39B89B" />
      <rect x="147" y="72" width="169" height="18" rx="9" fill="#254B59" />
      <rect x="73" y="129" width="108" height="268" rx="11" fill="#173846" />
      <text x="90" y="157" fill="#A8C0C5" fontSize="12" fontFamily="sans-serif">COURSE PATH</text>
      <rect x="88" y="176" width="78" height="42" rx="8" fill="#DFF3EE" />
      <circle cx="105" cy="197" r="7" fill="#087A75" /><rect x="119" y="190" width="34" height="5" rx="2.5" fill="#185B59" /><rect x="119" y="201" width="25" height="4" rx="2" fill="#6A8B8B" />
      <g fill="#77919A"><circle cx="105" cy="245" r="7" /><circle cx="105" cy="292" r="7" /><circle cx="105" cy="339" r="7" /></g>
      <g fill="#829AA2"><rect x="119" y="239" width="37" height="5" rx="2.5" /><rect x="119" y="286" width="32" height="5" rx="2.5" /><rect x="119" y="333" width="40" height="5" rx="2.5" /></g>
      <rect x="202" y="129" width="348" height="167" rx="11" fill="#0C1F29" />
      <text x="223" y="156" fill="#8BA5AD" fontSize="11" fontFamily="monospace">studio / intelligent-systems / milestone-03</text>
      <g fontFamily="monospace" fontSize="12"><text x="224" y="191" fill="#79A7F2">01</text><text x="256" y="191" fill="#D7E4E6">def evaluate_pipeline(result):</text><text x="224" y="218" fill="#79A7F2">02</text><text x="274" y="218" fill="#8ED5C1">assert result.recall &gt; 0.91</text><text x="224" y="245" fill="#79A7F2">03</text><text x="274" y="245" fill="#EBCB72">return evidence.publish()</text></g>
      <rect x="202" y="313" width="348" height="84" rx="11" fill="#173846" />
      <text x="223" y="342" fill="#A8C0C5" fontSize="11" fontFamily="sans-serif">LIVE EVIDENCE</text>
      <circle cx="228" cy="368" r="7" fill="#39B89B" /><rect x="245" y="363" width="112" height="8" rx="4" fill="#D4E5E6" />
      <rect x="412" y="357" width="112" height="23" rx="11.5" fill="#DFF3EE" /><text x="432" y="373" fill="#087A75" fontSize="11" fontFamily="sans-serif" fontWeight="700">ALL CHECKS PASS</text>
      <rect x="494" y="144" width="176" height="255" rx="16" fill="#FFFFFF" stroke="#CBDADB" />
      <rect x="514" y="165" width="53" height="22" rx="11" fill="#ECEBFF" /><text x="526" y="180" fill="#5558C8" fontSize="11" fontFamily="sans-serif" fontWeight="700">REVIEW</text>
      <text x="514" y="220" fill="#102A37" fontSize="17" fontFamily="sans-serif" fontWeight="700">Faculty checkpoint</text>
      <text x="514" y="246" fill="#526C74" fontSize="11" fontFamily="sans-serif">Ask for the evidence</text><text x="514" y="263" fill="#526C74" fontSize="11" fontFamily="sans-serif">behind the threshold.</text>
      <rect x="514" y="292" width="126" height="7" rx="3.5" fill="#D8E3E5" /><rect x="514" y="292" width="93" height="7" rx="3.5" fill="#6767D9" />
      <text x="514" y="324" fill="#526A73" fontSize="11" fontFamily="sans-serif">RUBRIC PROGRESS</text><text x="615" y="324" fill="#102A37" fontSize="11" fontFamily="sans-serif" fontWeight="700">74%</text>
      <rect x="514" y="345" width="126" height="34" rx="8" fill="#087A75" /><text x="543" y="367" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700">OPEN REVIEW</text>
      <rect x="92" y="437" width="284" height="50" rx="13" fill="white" stroke="#CBDADB" />
      <circle cx="118" cy="462" r="10" fill="#087A75" /><path d="m113 462 4 4 7-9" fill="none" stroke="white" strokeWidth="2" />
      <text x="138" y="458" fill="#102A37" fontSize="12" fontFamily="sans-serif" fontWeight="700">Evidence saved to student portfolio</text><text x="138" y="475" fill="#617981" fontSize="11" fontFamily="sans-serif">Milestone 03 · reviewed by faculty</text>
    </svg>
  );
}

export function LabOperatingGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 720 520" role="img" aria-label="A Center of Excellence operating model connecting students, mentors, projects and evidence">
      <rect width="720" height="520" rx="28" fill="#F3F0EA" />
      <g fill="none" stroke="#C8D3D1" strokeWidth="2"><path d="M104 136 274 260 118 386M274 260 469 126M274 260l210 135M469 126l137 136-122 133M606 262H274" /></g>
      <g fill="#C1CECB"><circle cx="104" cy="136" r="5" /><circle cx="118" cy="386" r="5" /><circle cx="469" cy="126" r="5" /><circle cx="606" cy="262" r="5" /><circle cx="484" cy="395" r="5" /></g>
      <circle cx="274" cy="260" r="92" fill="#102A37" />
      <circle cx="274" cy="260" r="69" fill="none" stroke="#335463" strokeWidth="1.5" />
      <circle cx="274" cy="260" r="49" fill="#173F48" />
      <path d="M247 269c16-4 22-14 28-34 7 19 14 30 29 34-14 5-22 13-29 31-6-18-14-26-28-31Z" fill="#64C9B8" />
      <text x="220" y="335" fill="#AEC4C7" fontSize="11" fontFamily="sans-serif" fontWeight="700">CENTER OF EXCELLENCE</text>
      {[['STUDENT COHORT','Selected for intent','58','104'],['MENTOR NETWORK','Domain practitioners','445','72'],['PROJECT PIPELINE','Briefs with real constraints','488','235'],['PUBLIC SHOWCASE','Work open to scrutiny','430','378'],['EVIDENCE','Portfolios and reviews','58','360']].map(([title,sub,x,y]) => <g key={title}><rect x={x} y={y} width="175" height="74" rx="12" fill="white" stroke="#C8D3D1" /><text x={Number(x)+16} y={Number(y)+27} fill="#102A37" fontSize="12" fontFamily="sans-serif" fontWeight="700">{title}</text><text x={Number(x)+16} y={Number(y)+49} fill="#60777C" fontSize="11" fontFamily="sans-serif">{sub}</text></g>)}
      <rect x="79" y="225" width="112" height="38" rx="19" fill="#E1F3EF" /><text x="104" y="249" fill="#087A75" fontSize="11" fontFamily="sans-serif" fontWeight="700">OPERATES WEEKLY</text>
    </svg>
  );
}

export function PartnershipNetworkGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 720 520" role="img" aria-label="Industry partnership system with masterclasses, project reviews, office hours and immersion">
      <rect width="720" height="520" rx="28" fill="#EEF3F3" />
      <rect x="48" y="47" width="624" height="426" rx="20" fill="white" stroke="#CFDDDE" />
      <text x="78" y="86" fill="#5D747B" fontSize="11" fontFamily="sans-serif" fontWeight="700">ANNUAL INDUSTRY ACCESS PORTFOLIO</text>
      <text x="78" y="118" fill="#102A37" fontSize="25" fontFamily="sans-serif" fontWeight="700">Proximity at the moments that matter</text>
      <line x1="85" y1="272" x2="625" y2="272" stroke="#B9CACA" strokeWidth="2" />
      {[
        {x:108,q:'Q1',title:'CHALLENGE',sub:'A real brief enters campus',c:'#6767D9'},
        {x:270,q:'Q2',title:'MASTERCLASS',sub:'Practice becomes visible',c:'#087A75'},
        {x:432,q:'Q3',title:'IMMERSION',sub:'Students enter the field',c:'#C2673A'},
        {x:594,q:'Q4',title:'REVIEW',sub:'Work meets scrutiny',c:'#866A10'},
      ].map((n, index) => <g key={n.q}><circle cx={n.x} cy="272" r="18" fill="white" stroke={n.c} strokeWidth="3" /><circle cx={n.x} cy="272" r="6" fill={n.c} /><text x={n.x-13} y="228" fill={n.c} fontSize="11" fontFamily="sans-serif" fontWeight="700">{n.q}</text><rect x={n.x-61} y={index % 2 ? 310 : 148} width="122" height="73" rx="11" fill={index % 2 ? '#F3F7F7' : '#F7F5F0'} stroke="#D5E0E0" /><text x={n.x-46} y={index % 2 ? 338 : 176} fill="#102A37" fontSize="11" fontFamily="sans-serif" fontWeight="700">{n.title}</text><text x={n.x-46} y={index % 2 ? 360 : 198} fill="#62787E" fontSize="11" fontFamily="sans-serif">{n.sub}</text></g>)}
      <rect x="78" y="415" width="264" height="31" rx="15.5" fill="#102A37" /><circle cx="98" cy="430.5" r="4" fill="#64C9B8" /><text x="112" y="434" fill="white" fontSize="11" fontFamily="sans-serif" fontWeight="700">CONTINUITY, NOT AN EVENT CALENDAR</text>
    </svg>
  );
}

export function InstitutionLoopGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 720 360" role="img" aria-label="Institutional capability loop from curriculum to faculty to student work to industry feedback">
      <rect width="720" height="360" rx="28" fill="#102A37" />
      <path d="M126 184c32-92 112-133 207-119 74 10 105 58 181 65 55 5 90 25 92 67 4 70-91 101-168 91-72-10-106-52-180-48-79 5-153 9-132-56Z" fill="none" stroke="#2F515D" strokeWidth="2" strokeDasharray="5 8" />
      {[
        {x:116,y:154,t:'CURRICULUM',s:'Current and rigorous',c:'#8C8CEB'},
        {x:302,y:56,t:'FACULTY',s:'Enabled to lead',c:'#64C9B8'},
        {x:535,y:134,t:'STUDENT WORK',s:'Built and reviewed',c:'#E3B75B'},
        {x:378,y:259,t:'INDUSTRY',s:'Context returns',c:'#E98E72'},
      ].map(n => <g key={n.t}><circle cx={n.x} cy={n.y} r="41" fill="#173846" stroke={n.c} strokeWidth="2" /><circle cx={n.x} cy={n.y} r="7" fill={n.c} /><text x={n.x} y={n.y+65} fill="white" textAnchor="middle" fontSize="11" fontFamily="sans-serif" fontWeight="700">{n.t}</text><text x={n.x} y={n.y+82} fill="#9FB4B8" textAnchor="middle" fontSize="11" fontFamily="sans-serif">{n.s}</text></g>)}
      <path d="m194 101 13-1-5 12M442 76l12 7-12 6M544 234l-6 12-7-11M261 275l-13-2 8-10" fill="none" stroke="#8EA7AC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DomainHeroGraphic({ tone, code, className = '' }: GraphicProps & { tone: DomainTone; code: string }) {
  const palette = domainPalettes[tone];

  if (tone === 'violet') return (
    <DomainGraphicFrame tone={tone} code={code} className={className}>
      <rect x="38" y="90" width="112" height="412" fill="#F0F1F3" /><text x="56" y="120" fill="#6D7C82" fontSize="9" fontFamily="monospace" fontWeight="700">EVALUATION SUITE</text>
      {['Dataset', 'Retrieval', 'Reasoning', 'Safety', 'Cost'].map((item, index) => <g key={item}><rect x="51" y={139 + index * 46} width="86" height="34" rx="7" fill={index === 2 ? '#E8E4FA' : 'white'} stroke={index === 2 ? palette.accent : '#D6DFDF'} /><circle cx="66" cy={156 + index * 46} r="4" fill={index < 3 ? palette.accent : '#A8B6B9'} /><text x="77" y={160 + index * 46} fill="#263F49" fontSize="9.5" fontFamily="sans-serif" fontWeight={index === 2 ? '700' : '500'}>{item}</text></g>)}
      <text x="175" y="121" fill="#61757C" fontSize="9" fontFamily="monospace" fontWeight="700">GROUNDING PIPELINE / RUN 024</text><text x="175" y="149" fill="#102A37" fontSize="20" fontFamily="sans-serif" fontWeight="700">Does the answer earn trust?</text>
      <rect x="175" y="172" width="421" height="145" rx="11" fill="#102A37" />
      <path d="M201 243H565" stroke="#3D5661" strokeWidth="1.5" /><path d="m281 238 7 5-7 5m91-10 7 5-7 5m91-10 7 5-7 5" fill="none" stroke="#85989E" strokeWidth="1.5" />
      {[['PROMPT',222],['RETRIEVE',313],['RERANK',404],['ANSWER',495]].map(([label,x], index) => <g key={label}><rect x={Number(x)-28} y="215" width="56" height="56" rx="13" fill={index === 3 ? palette.accent : '#173846'} stroke={index === 3 ? palette.bright : '#49626D'} /><circle cx={Number(x)} cy="236" r={index === 3 ? 8 : 6} fill={index === 3 ? '#FFFFFF' : palette.bright} /><text x={x} y="259" fill="#DCE5E6" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700">{label}</text></g>)}
      <rect x="175" y="335" width="130" height="135" rx="10" fill="white" stroke="#D5DFDF" /><text x="191" y="359" fill="#62767D" fontSize="9" fontFamily="monospace">CITATION RECALL</text><text x="191" y="398" fill="#102A37" fontSize="30" fontFamily="sans-serif" fontWeight="700">94.2%</text><path d="M190 440c20-28 31-7 48-29 15-18 29-3 50-31" fill="none" stroke={palette.accent} strokeWidth="3" /><path d="M190 446H289" stroke="#D6E0E0" />
      <rect x="318" y="335" width="278" height="135" rx="10" fill="#F0Eefa" stroke="#D8D3F0" /><text x="336" y="360" fill="#6A58B6" fontSize="9" fontFamily="monospace" fontWeight="700">FAILURE TAXONOMY</text>{[['Unsupported claim','03'],['Weak source match','07'],['Unsafe completion','00']].map(([label,value], i) => <g key={label}><text x="337" y={390+i*27} fill="#334C55" fontSize="10" fontFamily="sans-serif">{label}</text><rect x="506" y={378+i*27} width="69" height="17" rx="8.5" fill={i === 2 ? '#DDF1EC' : '#E0DBF5'} /><text x="541" y={390+i*27} textAnchor="middle" fill={i === 2 ? '#087A75' : '#6D58BB'} fontSize="9" fontFamily="monospace" fontWeight="700">{value}</text></g>)}
    </DomainGraphicFrame>
  );

  if (tone === 'sky') return (
    <DomainGraphicFrame tone={tone} code={code} className={className}>
      <text x="62" y="121" fill="#61757C" fontSize="9" fontFamily="monospace" fontWeight="700">SERVICE TOPOLOGY / PRODUCTION</text><text x="62" y="149" fill="#102A37" fontSize="20" fontFamily="sans-serif" fontWeight="700">Operate through change and failure.</text>
      <rect x="62" y="173" width="372" height="278" rx="12" fill="#0E2631" />
      <path d="M112 261 216 219l96 55 76-58M112 261l90 98 110-85 76 85M202 359l186 0" fill="none" stroke="#47616B" strokeWidth="1.5" strokeDasharray="4 5" />
      {[{x:112,y:261,l:'EDGE',s:'18ms'},{x:216,y:219,l:'API',s:'99.98%'},{x:312,y:274,l:'QUEUE',s:'12 jobs'},{x:388,y:216,l:'DATA',s:'healthy'},{x:202,y:359,l:'WORKER',s:'8 / 8'},{x:388,y:359,l:'OBSERVE',s:'4 signals'}].map((n,i) => <g key={n.l}><rect x={n.x-34} y={n.y-25} width="68" height="50" rx="10" fill={i===2 ? palette.accent : '#173B48'} stroke={i===2 ? palette.bright : '#52707B'} /><circle cx={n.x} cy={n.y-8} r="5" fill={i===2 ? 'white' : palette.bright} /><text x={n.x} y={n.y+8} textAnchor="middle" fill="white" fontSize="8" fontFamily="monospace" fontWeight="700">{n.l}</text><text x={n.x} y={n.y+18} textAnchor="middle" fill="#9CB0B5" fontSize="7" fontFamily="sans-serif">{n.s}</text></g>)}
      <rect x="450" y="173" width="146" height="126" rx="11" fill="#E8F3F7" stroke="#C8DFE7" /><text x="468" y="198" fill="#21799B" fontSize="9" fontFamily="monospace" fontWeight="700">SLO WINDOW</text><text x="468" y="235" fill="#102A37" fontSize="27" fontFamily="sans-serif" fontWeight="700">99.95</text><text x="468" y="253" fill="#61777E" fontSize="9" fontFamily="sans-serif">availability / 30d</text><rect x="468" y="272" width="108" height="5" rx="3" fill="#C7DDE5" /><rect x="468" y="272" width="89" height="5" rx="3" fill={palette.accent} />
      <rect x="450" y="315" width="146" height="136" rx="11" fill="white" stroke="#D3DEDF" /><text x="468" y="339" fill="#657980" fontSize="9" fontFamily="monospace" fontWeight="700">GAME DAY / ACTIVE</text>{[['API latency','PASS'],['Queue loss','PASS'],['DB failover','WATCH']].map(([l,v],i)=><g key={l}><circle cx="472" cy={368+i*27} r="4" fill={i===2 ? '#D9A43C' : '#35B18C'} /><text x="482" y={371+i*27} fill="#314C55" fontSize="9" fontFamily="sans-serif">{l}</text><text x="578" y={371+i*27} textAnchor="end" fill={i===2 ? '#A66D0D' : '#087A75'} fontSize="8" fontFamily="monospace" fontWeight="700">{v}</text></g>)}
      <rect x="62" y="465" width="534" height="18" rx="9" fill="#E8F1F2" /><rect x="62" y="465" width="404" height="18" rx="9" fill="#D8EDF4" /><text x="74" y="478" fill="#297D9D" fontSize="8" fontFamily="monospace" fontWeight="700">CHANGE 18 / CANARY HEALTHY / ROLLOUT 76%</text>
    </DomainGraphicFrame>
  );

  if (tone === 'emerald') return (
    <DomainGraphicFrame tone={tone} code={code} className={className}>
      <text x="62" y="121" fill="#61757C" fontSize="9" fontFamily="monospace" fontWeight="700">ATTACK PATH / CASE 014</text><text x="62" y="149" fill="#102A37" fontSize="20" fontFamily="sans-serif" fontWeight="700">See the system through an adversary.</text>
      <rect x="62" y="171" width="534" height="232" rx="12" fill="#0D282F" />
      <g opacity=".65" fill="none" stroke="#35555B"><ellipse cx="328" cy="288" rx="224" ry="84" /><ellipse cx="328" cy="288" rx="154" ry="58" /><ellipse cx="328" cy="288" rx="85" ry="34" /></g>
      <path d="M115 244c67 8 71 70 137 37 52-25 69-6 101 7 57 24 83-19 137-44" fill="none" stroke={palette.accent} strokeWidth="2.5" strokeDasharray="6 5" />
      {[{x:115,y:244,l:'PUBLIC APP',r:12},{x:252,y:281,l:'IDENTITY',r:14},{x:353,y:288,l:'PRIVILEGE',r:18},{x:490,y:244,l:'DATA',r:13}].map((n,i)=><g key={n.l}><circle cx={n.x} cy={n.y} r={n.r+9} fill="#173D42" stroke={i===2 ? palette.bright : '#54726F'} /><circle cx={n.x} cy={n.y} r={n.r} fill={i===2 ? palette.accent : '#254D4C'} /><text x={n.x} y={n.y+43} fill="#C8D8D8" textAnchor="middle" fontSize="8" fontFamily="monospace" fontWeight="700">{n.l}</text></g>)}
      <rect x="87" y="184" width="112" height="31" rx="15" fill="#183E3D" stroke="#3B6E64" /><circle cx="104" cy="199.5" r="4" fill={palette.bright} /><text x="115" y="203" fill="#9BDED0" fontSize="8" fontFamily="monospace" fontWeight="700">PATH OBSERVED</text>
      <rect x="62" y="420" width="172" height="62" rx="10" fill="#E7F3EF" stroke="#CDE5DD" /><text x="78" y="444" fill="#247C67" fontSize="9" fontFamily="monospace">RISK REDUCTION</text><text x="78" y="470" fill="#102A37" fontSize="20" fontFamily="sans-serif" fontWeight="700">72 → 18</text>
      <rect x="247" y="420" width="349" height="62" rx="10" fill="white" stroke="#D3DFDE" /><text x="263" y="443" fill="#667A7F" fontSize="9" fontFamily="monospace" fontWeight="700">CONTROL VALIDATION</text>{[['MFA boundary','PROVED'],['Token lifetime','PROVED'],['Alert coverage','REVIEW']].map(([l,v],i)=><g key={l}><text x={263+i*105} y="463" fill="#314B54" fontSize="8" fontFamily="sans-serif">{l}</text><text x={263+i*105} y="476" fill={i===2 ? '#9A6611' : '#087A75'} fontSize="7" fontFamily="monospace" fontWeight="700">{v}</text></g>)}
    </DomainGraphicFrame>
  );

  return (
    <DomainGraphicFrame tone={tone} code={code} className={className}>
      <text x="62" y="121" fill="#61757C" fontSize="9" fontFamily="monospace" fontWeight="700">PAYMENT ROUTER / SIMULATION</text><text x="62" y="149" fill="#102A37" fontSize="20" fontFamily="sans-serif" fontWeight="700">Money moves. Every decision remains visible.</text>
      <rect x="62" y="172" width="350" height="205" rx="12" fill="#102A37" />
      <text x="80" y="198" fill="#9DB0B4" fontSize="8" fontFamily="monospace">TRANSACTION FLOW / 09:42:18</text>
      <path d="M95 271H379" stroke="#455E67" strokeWidth="2" />
      {[{x:100,l:'REQUEST',v:'₹4,200'},{x:190,l:'RISK',v:'0.08'},{x:280,l:'ROUTE B',v:'42ms'},{x:370,l:'SETTLED',v:'✓'}].map((n,i)=><g key={n.l}><circle cx={n.x} cy="271" r="24" fill={i===3 ? palette.accent : '#193C48'} stroke={i===3 ? palette.bright : '#536B73'} /><text x={n.x} y="268" textAnchor="middle" fill="white" fontSize="7" fontFamily="monospace" fontWeight="700">{n.l}</text><text x={n.x} y="280" textAnchor="middle" fill={i===3 ? 'white' : palette.bright} fontSize="8" fontFamily="sans-serif" fontWeight="700">{n.v}</text></g>)}
      <path d="m139 264 8 7-8 7m41-14 8 7-8 7m41-14 8 7-8 7m41-14 8 7-8 7" fill="none" stroke="#94A7AB" strokeWidth="1.5" />
      <rect x="80" y="321" width="314" height="35" rx="7" fill="#183945" /><circle cx="96" cy="338" r="4" fill="#53C6A9" /><text x="108" y="341" fill="#D2DFE0" fontSize="8" fontFamily="monospace">LEDGER BALANCED / TRACE 7F2C</text>
      <rect x="428" y="172" width="168" height="98" rx="11" fill="#F5EEE2" stroke="#E5D3B2" /><text x="446" y="197" fill="#936117" fontSize="9" fontFamily="monospace" fontWeight="700">SUCCESS RATE</text><text x="446" y="234" fill="#102A37" fontSize="28" fontFamily="sans-serif" fontWeight="700">99.4%</text><text x="446" y="252" fill="#6B7A7C" fontSize="8" fontFamily="sans-serif">12,840 transactions</text>
      <rect x="428" y="284" width="168" height="93" rx="11" fill="white" stroke="#D7E0DF" /><text x="446" y="308" fill="#687A7F" fontSize="9" fontFamily="monospace">ROUTING COST</text><path d="M446 349c18-17 32-4 50-14 17-10 28 3 43-7 14-9 26-7 39-20" fill="none" stroke={palette.accent} strokeWidth="3" /><text x="446" y="365" fill="#9A6611" fontSize="8" fontFamily="monospace" fontWeight="700">↓ 18.6%</text>
      <rect x="62" y="393" width="534" height="89" rx="11" fill="white" stroke="#D6E0DF" /><text x="79" y="419" fill="#687B80" fontSize="9" fontFamily="monospace" fontWeight="700">AUDIT TRAIL</text>{[['09:42:18.022','Risk rule passed','MODEL / 3.2'],['09:42:18.064','Provider B selected','POLICY / LATENCY'],['09:42:18.311','Settlement verified','LEDGER / MATCH']].map(([t,a,s],i)=><g key={t}><text x="80" y={440+i*17} fill="#8A999C" fontSize="8" fontFamily="monospace">{t}</text><text x="185" y={440+i*17} fill="#314A53" fontSize="9" fontFamily="sans-serif">{a}</text><text x="571" y={440+i*17} textAnchor="end" fill="#9A6611" fontSize="8" fontFamily="monospace" fontWeight="700">{s}</text></g>)}
    </DomainGraphicFrame>
  );
}

export function GenerationalCapabilityGraphic({ className = '' }: GraphicProps) {
  return (
    <svg className={className} viewBox="0 0 620 520" role="img" aria-label="Knowledge becoming capability across generations of learners">
      <rect width="620" height="520" rx="28" fill="#102A37" />
      <g opacity=".4" fill="#719097">
        {Array.from({ length: 10 }).map((_, row) => Array.from({ length: 12 }).map((__, col) => <circle key={`${row}-${col}`} cx={31 + col * 51} cy={31 + row * 51} r="1.3" />))}
      </g>
      <text x="52" y="64" fill="#AEB1FF" fontSize="11" fontFamily="sans-serif" fontWeight="700">INSTITUTIONS LEARN AS THEY TEACH</text>
      <path d="M92 383 C166 383 151 302 226 302 C300 302 285 221 359 221 C433 221 418 140 492 140" fill="none" stroke="#6AC7B6" strokeWidth="3" />
      {[
        {x:92,y:383,n:'01',t:'INHERIT',s:'Knowledge received'},
        {x:226,y:302,n:'02',t:'PRACTISE',s:'Capability formed'},
        {x:359,y:221,n:'03',t:'CONTRIBUTE',s:'Progress created'},
        {x:492,y:140,n:'04',t:'PASS FORWARD',s:'Possibility expands'},
      ].map((n, index) => <g key={n.t}><circle cx={n.x} cy={n.y} r="31" fill={index === 3 ? '#087A75' : '#173F4A'} stroke={index === 3 ? '#78D1C0' : '#456671'} strokeWidth="2" /><text x={n.x} y={n.y+4} textAnchor="middle" fill="white" fontSize="12" fontFamily="sans-serif" fontWeight="700">{n.n}</text><text x={n.x} y={n.y+58} textAnchor="middle" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="700">{n.t}</text><text x={n.x} y={n.y+77} textAnchor="middle" fill="#A8BCC0" fontSize="11" fontFamily="sans-serif">{n.s}</text></g>)}
      <path d="m156 350 10-3-2 10M289 269l10-3-2 10M423 188l10-3-2 10" fill="none" stroke="#A8BCC0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="51" y="448" width="518" height="1" fill="#34545E" />
      <text x="51" y="480" fill="#DCE6E7" fontSize="11" fontFamily="sans-serif" fontWeight="700">EACH COHORT SHOULD LEAVE THE SYSTEM STRONGER</text>
    </svg>
  );
}
