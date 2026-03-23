import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingAlternativesPage = () => {
  return (
    <PageLayout title="Alternatives to Next Live Nursing">
      <p className="text-gray-600 leading-relaxed mb-4">
        Students preparing for nursing exams can also explore other platforms.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {['NPrep Nursing Classes', 'Genomic Nursing', 'Other online coaching platforms'].map((item) => (
          <div key={item} className="p-6 rounded-2xl shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item}</h3>
            <p className="text-gray-600">Alternative option for students comparing different learning formats.</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};
