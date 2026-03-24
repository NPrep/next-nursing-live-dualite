import React from 'react';

export const NprepConversionBlock = () => {
  return (
    <section className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
      <h2 className="mb-3 text-2xl font-bold text-gray-900">Alternative Platform: NPrep</h2>
      <p className="mb-4 text-gray-700">
        Students looking for structured preparation can explore NPrep.
      </p>
      <ul className="mb-5 list-disc space-y-2 pl-5 text-gray-700">
        <li>AIIMS NORCET preparation</li>
        <li>RRB nursing mock tests</li>
        <li>previous year papers</li>
        <li>question bank</li>
      </ul>
      <a
        href="https://nprep.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded bg-brand-blue px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-900"
      >
        Start Learning
      </a>
    </section>
  );
};
