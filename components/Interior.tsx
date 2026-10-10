import Image from 'next/image';
import Link from 'next/link';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon, ArrowRight01Icon, ArrowUpRight01Icon, CheckmarkCircle02Icon, SparklesIcon } from '@hugeicons/core-free-icons';
import Navbar from '@/components/Navbar';
import SiteFooter from '@/components/SiteFooter';

export function InteriorShell({ children }: { children: React.ReactNode }) {
  return <main className="interior-page"><Navbar />{children}<SiteFooter /></main>;
}

export function Breadcrumb({ section, current, href = '/' }: { section: string; current: string; href?: string }) {
  return <div className="breadcrumb"><Link href={href}><HugeiconsIcon icon={ArrowLeft01Icon} size={15} /> {section}</Link><span>/</span><strong>{current}</strong></div>;
}

export function InteriorHero({
  section,
  current,
  title,
  accent,
  description,
  image,
  imageAlt,
  visual,
  children,
  tone = 'indigo',
}: {
  section: string;
  current: string;
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
  image?: string;
  imageAlt?: string;
  visual?: React.ReactNode;
  children?: React.ReactNode;
  tone?: string;
}) {
  return (
    <section className={`inner-hero tone-${tone}`}>
      <div className="inner-grid-bg" />
      <div className="container">
        <Breadcrumb section={section} current={current} />
        <div className={`inner-hero-layout ${image || visual ? '' : 'no-photo'}`}>
          <div className="inner-hero-copy">
            <h1>{title}{accent && <><br /><span>{accent}</span></>}</h1>
            <p>{description}</p>
            <div className="inner-hero-actions"><Link href="/contact" className="button primary">Discuss a partnership <HugeiconsIcon icon={ArrowUpRight01Icon} size={18} /></Link>{children}</div>
          </div>
          {image && <div className="inner-hero-photo"><Image src={image} alt={imageAlt || ''} fill priority sizes="(max-width: 900px) 94vw, 48vw" /><div className="inner-photo-overlay" /><span className="inner-photo-label"><i /> BAYESSTACK / IN PRACTICE</span></div>}
          {visual && <div className="inner-hero-graphic">{visual}</div>}
        </div>
      </div>
    </section>
  );
}

export function SectionIntro({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return <div className={`inner-section-intro ${center ? 'is-centered' : ''}`}><p className="section-kicker">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export function OutcomeStrip({ items }: { items: Array<{ value: string; label: string; note?: string }> }) {
  return <div className="outcome-strip">{items.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span>{item.note && <small>{item.note}</small>}</div>)}</div>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map(item => <li key={item}><HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />{item}</li>)}</ul>;
}

export function PageCTA({
  eyebrow = 'BUILD THE NEXT CAPABILITY',
  title,
  text,
  linkText = 'Discuss a Partnership',
}: {
  eyebrow?: string;
  title: string;
  text: string;
  linkText?: string;
}) {
  return (
    <section className="inner-cta-section">
      <div className="container">
        <div className="inner-cta-card">
          <div className="inner-cta-grid" />
          <span className="cta-spark"><HugeiconsIcon icon={SparklesIcon} size={22} /></span>
          <div><p className="section-kicker dark-kicker">{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
          <Link href="/contact" className="button primary">{linkText} <HugeiconsIcon icon={ArrowRight01Icon} size={18} /></Link>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inner-text-link">{children}<HugeiconsIcon icon={ArrowUpRight01Icon} size={17} /></Link>;
}
