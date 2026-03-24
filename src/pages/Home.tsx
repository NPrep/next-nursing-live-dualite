import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const Home = () => {
  return (
    <PageLayout title="Next Live Nursing Platform Overview">
      <p className="mb-5 text-lg">
        Next Live Nursing is an online coaching platform for nursing officer exams.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-gray-900">What You Will Find Here</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Platform review</li>
        <li>Course details</li>
        <li>Fees information</li>
        <li>Comparison with other platforms</li>
      </ul>
    </PageLayout>
  );
};
