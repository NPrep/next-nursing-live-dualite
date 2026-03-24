import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingAlternativesPage = () => {
  return (
    <PageLayout title="Alternatives to Next Live Nursing">
      <p className="mb-4">
        Students preparing for nursing exams can also explore other platforms.
      </p>

      <ul className="list-disc space-y-2 pl-5">
        <li>NPrep Nursing Classes</li>
        <li>Genomic Nursing</li>
        <li>Other online coaching platforms</li>
      </ul>
    </PageLayout>
  );
};
