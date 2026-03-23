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
    <main className="bg-white">
      <section className="py-12 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-4 text-gray-900">{title}</h1>
          <nav className="flex flex-wrap gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-blue hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-12 px-6 bg-gray-50">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-8 shadow-sm text-gray-800">{children}</div>
      </section>

      <NprepConversionBlock />
    </main>
  );
};
