import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingReviewPage = () => {
  return (
    <PageLayout title="Next Live Nursing Review">
      <p className="mb-6">
        Next Live Nursing is an online platform that provides coaching for nursing officer exams such as AIIMS NORCET and RRB Nursing.
      </p>

      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Courses Offered</h2>
      <ul className="mb-6 list-disc space-y-2 pl-5">
        <li>NORCET preparation</li>
        <li>RRB nursing coaching</li>
        <li>Online live classes</li>
      </ul>

      <h2 className="mb-3 text-2xl font-semibold text-gray-900">Features</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Live classes</li>
        <li>Recorded lectures</li>
        <li>Online learning platform</li>
      </ul>
    </PageLayout>
  );
};
