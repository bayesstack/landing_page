'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const solutions = [
  ['Programs', '/solutions/programs', 'Industry-shaped, faculty-led'],
  ['Labs', '/solutions/labs', 'Centers for ambitious work'],
  ['Partnerships', '/solutions/partnerships', 'Industry within reach'],
];

const domains = [
  ['AI Engineering', '/domains/ai-engineering'],
  ['Cloud & Platform', '/domains/cloud-platform-engineering'],
  ['Cybersecurity', '/domains/cybersecurity-digital-trust'],
  ['FinTech & Quant', '/domains/fintech-quantitative-systems'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="BayesStack home">
          <Image src="/brand/logos/symbol-primary.svg" alt="" width={26} height={34} priority />
          <span>BayesStack</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-dropdown">
            <button type="button" className="nav-trigger" aria-haspopup="true">
              Solutions <ChevronDown size={14} strokeWidth={2.2} />
            </button>
            <div className="dropdown-panel solutions-panel">
              <p className="dropdown-label">Our learning system</p>
              {solutions.map(([label, href, text], index) => (
                <Link href={href} key={href} className="dropdown-link">
                  <span className={`dropdown-index index-${index + 1}`}>0{index + 1}</span>
                  <span><strong>{label}</strong><small>{text}</small></span>
                </Link>
              ))}
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-trigger" aria-haspopup="true">
              Domains <ChevronDown size={14} strokeWidth={2.2} />
            </button>
            <div className="dropdown-panel domains-panel">
              <p className="dropdown-label">Strategic pillars</p>
              {domains.map(([label, href], index) => (
                <Link href={href} key={href} className="domain-dropdown-link">
                  <span className={`domain-dot dot-${index + 1}`} />{label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <Link href="/contact" className="button primary nav-cta">
          Discuss a Partnership <span aria-hidden="true">→</span>
        </Link>
        <button
          type="button"
          className="menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <p className="mobile-section-label">Solutions</p>
          {solutions.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}<span>→</span></Link>)}
          <p className="mobile-section-label">Domains</p>
          {domains.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}<span>→</span></Link>)}
          <Link href="/about" onClick={() => setOpen(false)}>About<span>→</span></Link>
          <Link href="/contact" className="button primary" onClick={() => setOpen(false)}>Discuss a Partnership <span>→</span></Link>
        </nav>
      </div>
    </header>
  );
}
