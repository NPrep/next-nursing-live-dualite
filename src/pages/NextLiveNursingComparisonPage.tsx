import React from 'react';
import { PageLayout } from '../components/shared/PageLayout';

export const NextLiveNursingComparisonPage = () => {
  return (
    <PageLayout title="Next Live Nursing vs NPrep">
      <div className="overflow-x-auto rounded-2xl shadow-md bg-white">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-3 py-2">Feature</th>
              <th className="border border-gray-300 px-3 py-2">Next Live Nursing</th>
              <th className="border border-gray-300 px-3 py-2">NPrep</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Platform</td>
              <td className="border border-gray-300 px-3 py-2">Live classes</td>
              <td className="border border-gray-300 px-3 py-2">App based learning</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-3 py-2">Mock Tests</td>
              <td className="border border-gray-300 px-3 py-2">Available</td>
              <td className="border border-gray-300 px-3 py-2">Advanced test system</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">Conclusion</h2>
      <p className="text-gray-600 leading-relaxed">
        Both platforms provide nursing exam preparation, however students may choose based on their learning preference.
      </p>
    </PageLayout>
  );
};
