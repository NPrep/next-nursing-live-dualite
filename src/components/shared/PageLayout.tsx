import React from 'react';
import { Link } from 'react-router-dom';
import { NprepConversionBlock } from './NprepConversionBlock';

type PageLayoutProps = {
  title: string;
  children: React.ReactNode;
};

const quickLinks = [
  { label: 'Review', path: '/next-live-nursing-review' },
  { label: 'Fees', path: '/next-live-nursing-fees' },
  { label: 'Comparison', path: '/next-live-nursing-vs-nprep' },
  { label: 'Alternatives', path: '/next-live-nursing-alternatives' },
];

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <main className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="mb-6 text-4xl font-bold text-gray-900">{title}</h1>

        <nav className="mb-8 flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <section className="rounded-xl border border-gray-200 bg-white p-6 text-gray-800">{children}</section>
        <NprepConversionBlock />
      </div>
    </main>
  );
};
