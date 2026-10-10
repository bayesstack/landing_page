import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DomainDetail from '@/components/DomainDetail';
import { domainBySlug, domainList, type DomainSlug } from '@/lib/domains';

export const dynamicParams = false;

export function generateStaticParams() {
  return domainList.map(domain => ({ slug: domain.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const domain = domainBySlug[slug as DomainSlug];
  if (!domain) return {};
  return {
    title: `${domain.shortName} | BayesStack Domains`,
    description: domain.proposition,
  };
}

export default async function DomainPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const domain = domainBySlug[slug as DomainSlug];
  if (!domain) notFound();
  return <DomainDetail domain={domain} />;
}
