import Image from 'next/image';
import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Link href="/" className="brand">
            <Image src="/brand/logos/symbol-primary.svg" alt="" width={27} height={35} />
            <span>BayesStack</span>
          </Link>
          <p>Institutional Learning System.</p>
          <small>Curriculum × Practice × Industry</small>
        </div>
        <div className="footer-links">
          <div><strong>Solutions</strong><Link href="/solutions/programs">Programs</Link><Link href="/solutions/labs">Labs</Link><Link href="/solutions/partnerships">Partnerships</Link></div>
          <div><strong>Domains</strong><Link href="/domains/ai-engineering">AI Engineering</Link><Link href="/domains/cloud-platform-engineering">Cloud & Platform</Link><Link href="/domains/cybersecurity-digital-trust">Cybersecurity</Link><Link href="/domains/fintech-quantitative-systems">FinTech & Quant</Link></div>
          <div><strong>Company</strong><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 BayesStack. All rights reserved.</span><span>Built for institutions shaping what comes next.</span></div>
    </footer>
  );
}
