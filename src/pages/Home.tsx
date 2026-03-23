import React from 'react';
import { Link } from 'react-router-dom';
import { NprepConversionBlock } from '../components/shared/NprepConversionBlock';

export const Home = () => {
  return (
    <main className="bg-white">
      <section className="py-16 text-center bg-gray-50 px-6">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Next Live Nursing Platform Overview</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Next Live Nursing is an online coaching platform for nursing officer exams.
          </p>
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

      <section className="py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mt-8 mb-3 text-gray-900">What You Will Find Here</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Platform Review', path: '/next-live-nursing-review', text: 'Neutral platform review and features.' },
              { title: 'Course Details', path: '/next-live-nursing-app', text: 'Overview of classes and platform format.' },
              { title: 'Fees Information', path: '/next-live-nursing-fees', text: 'General pricing guidance and fee notes.' },
              { title: 'Comparison', path: '/next-live-nursing-vs-nprep', text: 'Side-by-side view of key differences.' },
            ].map((item) => (
              <Link key={item.title} to={item.path} className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NprepConversionBlock />
    </main>
  );
};
