import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingAppPage = () => {
  return (
    <PageLayout title="Next Live Nursing App">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          'Online classes',
          'Recorded lectures',
          'Study resources',
        ].map((item) => (
          <div key={item} className="p-6 rounded-2xl shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item}</h3>
            <p className="text-gray-600">Part of the digital platform experience for exam candidates.</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed mt-8">
        The platform provides online classes, recorded lectures and study resources for nursing exam preparation.
      </p>
    </PageLayout>
  );
};
