'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  AiBrain03Icon,
  ArrowDown01Icon,
  ArrowRight01Icon,
  ArrowUpRight01Icon,
  BankIcon,
  BookOpen02Icon,
  Cancel01Icon,
  CloudServerIcon,
  FlaskConicalIcon,
  Menu02Icon,
  SecurityCheckIcon,
  WorkHistoryIcon,
} from '@hugeicons/core-free-icons';
import { useEffect, useState } from 'react';

const solutions = [
  { label: 'Programs', href: '/solutions/programs', text: 'Credit-ready courses with faculty enablement', icon: BookOpen02Icon },
  { label: 'Labs', href: '/solutions/labs', text: 'A serious home for ambitious student work', icon: FlaskConicalIcon },
  { label: 'Partnerships', href: '/solutions/partnerships', text: 'Practitioners, reviews, challenges and immersion', icon: WorkHistoryIcon },
];

const domains = [
  { label: 'AI Engineering', href: '/domains/ai-engineering', text: 'Intelligent systems', icon: AiBrain03Icon, tone: 'violet' },
  { label: 'Cloud & Platform', href: '/domains/cloud-platform-engineering', text: 'Digital infrastructure', icon: CloudServerIcon, tone: 'sky' },
  { label: 'Cybersecurity', href: '/domains/cybersecurity-digital-trust', text: 'Digital trust', icon: SecurityCheckIcon, tone: 'emerald' },
  { label: 'FinTech & Quant', href: '/domains/fintech-quantitative-systems', text: 'Financial systems', icon: BankIcon, tone: 'amber' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="BayesStack home">
          <Image src="/brand/logos/symbol-primary.svg" alt="" width={32} height={42} priority />
          <span>BayesStack</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-dropdown">
            <button type="button" className="nav-trigger" aria-haspopup="true">
              Solutions <HugeiconsIcon icon={ArrowDown01Icon} size={15} strokeWidth={2} />
            </button>
            <div className="dropdown-panel solutions-panel">
              <div className="dropdown-heading"><span>Solutions</span><small>Three ways to build lasting institutional capability.</small></div>
              <div className="solution-dropdown-list">
                {solutions.map((item) => (
                  <Link href={item.href} key={item.href} className="dropdown-link">
                    <span className="dropdown-icon"><HugeiconsIcon icon={item.icon} size={21} strokeWidth={1.7} /></span>
                    <span><strong>{item.label}</strong><small>{item.text}</small></span>
                    <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={1.8} />
                  </Link>
                ))}
              </div>
              <Link href="/contact" className="dropdown-cta">Start with the gap you want to close <HugeiconsIcon icon={ArrowRight01Icon} size={16} /></Link>
            </div>
          </div>
          <div className="nav-dropdown">
            <button type="button" className="nav-trigger" aria-haspopup="true">
              Domains <HugeiconsIcon icon={ArrowDown01Icon} size={15} strokeWidth={2} />
            </button>
            <div className="dropdown-panel domains-panel">
              <div className="dropdown-heading"><span>Domains</span><small>Course portfolios for fields reshaping technology and finance.</small></div>
              <div className="domain-dropdown-grid">
                {domains.map((item) => (
                  <Link href={item.href} key={item.href} className={`domain-dropdown-link tone-${item.tone}`}>
                    <span><HugeiconsIcon icon={item.icon} size={20} strokeWidth={1.7} /></span>
                    <p><strong>{item.label}</strong><small>{item.text}</small></p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/about" className="nav-link">About</Link>
        </nav>

        <Link href="/contact" className="button primary nav-cta">
          Discuss a partnership <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} strokeWidth={2} />
        </Link>
        <button type="button" className="menu-button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <HugeiconsIcon icon={open ? Cancel01Icon : Menu02Icon} size={23} strokeWidth={1.8} />
        </button>
      </div>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <p className="mobile-section-label">Solutions</p>
          {solutions.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}><span><HugeiconsIcon icon={item.icon} size={20} />{item.label}</span><HugeiconsIcon icon={ArrowRight01Icon} size={17} /></Link>)}
          <p className="mobile-section-label">Domains</p>
          {domains.map((item) => <Link href={item.href} key={item.href} onClick={() => setOpen(false)}><span><HugeiconsIcon icon={item.icon} size={20} />{item.label}</span><HugeiconsIcon icon={ArrowRight01Icon} size={17} /></Link>)}
          <Link href="/about" onClick={() => setOpen(false)}><span>About</span><HugeiconsIcon icon={ArrowRight01Icon} size={17} /></Link>
          <Link href="/contact" className="button primary" onClick={() => setOpen(false)}>Discuss a partnership <HugeiconsIcon icon={ArrowUpRight01Icon} size={17} /></Link>
        </nav>
      </div>
    </header>
  );
}
