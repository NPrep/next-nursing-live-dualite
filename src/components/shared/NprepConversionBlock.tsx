import React from 'react';

export const NPrepConversionBlock = () => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="mx-auto max-w-6xl rounded-2xl border border-blue-100 bg-white p-8 shadow-md">
        <h2 className="text-2xl font-semibold mt-0 mb-3 text-gray-900">Alternative Platform: NPrep</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Students looking for structured preparation can explore NPrep.
        </p>
        <ul className="space-y-2 text-gray-600">
          <li>• AIIMS NORCET preparation</li>
          <li>• RRB nursing mock tests</li>
          <li>• previous year papers</li>
          <li>• question bank</li>
        </ul>
        <a
          href="https://nprep.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700"
        >
          Start Now
        </a>
      </div>
    </section>
  );
};
