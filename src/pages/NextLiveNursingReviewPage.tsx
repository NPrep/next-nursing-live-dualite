import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingReviewPage = () => {
  return (
    <PageLayout title="Next Live Nursing Review">
      <p className="text-gray-600 leading-relaxed">
        Next Live Nursing is an online platform that provides coaching for nursing officer exams such as AIIMS NORCET and RRB Nursing.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Courses Offered</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {['NORCET preparation', 'RRB nursing coaching', 'Online live classes'].map((item) => (
          <div key={item} className="p-6 rounded-2xl shadow-md bg-white">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">{item}</h3>
            <p className="text-gray-600">Structured coaching module for nursing officer exam candidates.</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Features</h2>
      <ul className="space-y-2 text-gray-600">
        <li>• Live classes</li>
        <li>• Recorded lectures</li>
        <li>• Online learning platform</li>
      </ul>
    </PageLayout>
  );
};
