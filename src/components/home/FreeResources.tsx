import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { FileText, ClipboardList, ArrowRight, Download, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pyqPapers = [
  { name: 'AIIMS NORCET', year: '2023', size: '2.4 MB' },
  { name: 'RRB Staff Nurse Shift 1', year: '2019', size: '1.8 MB' },
  { name: 'ESIC Nursing Officer', year: '2018', size: '1.6 MB' }
];

const mockTests = [
  { name: 'Daily Nursing Quiz #45', difficulty: 'Easy', questions: 25 },
  { name: 'Anatomy & Physiology Mini Test', difficulty: 'Medium', questions: 40 },
  { name: 'NORCET Mega Mock Test', difficulty: 'Hard', questions: 100 }
];

const difficultyStyles: Record<string, string> = {
  Easy: 'bg-green-100 text-green-700',
  Medium: 'bg-amber-100 text-amber-700',
  Hard: 'bg-red-100 text-red-700'
};

export const FreeResources = () => {
  return (
    <section id="free-resources" className="py-16" style={{ backgroundColor: 'var(--bg-light, #f8fafc)' }}>
      <div className="container mx-auto border-l-4 border-brand-blue px-4 pl-6">
        <SectionHeading
          title="Free Study Resources"
          subtitle="PYQs and mock tests designed for NNLONE Nursing Academy learners"
        />

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group rounded-xl border border-blue-100 bg-blue-50 p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-brand-blue p-4 text-white shadow-md transition-transform group-hover:scale-110">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Previous Year Papers</h3>
                <p className="text-gray-600">Download solved papers of NORCET, RRB &amp; ESIC</p>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              {pyqPapers.map((paper) => (
                <li key={paper.name} className="rounded border border-blue-100 bg-white p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-gray-700">{paper.name}</span>
                    <Download size={18} className="text-brand-blue" />
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="rounded bg-blue-100 px-2 py-1 font-semibold text-brand-blue">{paper.year}</span>
                    <span className="text-gray-500">PDF • {paper.size}</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/pyq"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wide text-brand-blue transition-colors hover:text-brand-red"
            >
              View All Papers <ArrowRight size={18} />
            </Link>
          </div>

          <div className="group rounded-xl border border-red-100 bg-red-50 p-8 transition-shadow hover:shadow-lg">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-lg bg-brand-red p-4 text-white shadow-md transition-transform group-hover:scale-110">
                <ClipboardList size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free Mock Tests</h3>
                <p className="text-gray-600">Practice with exam-level questions daily</p>
              </div>
            </div>

            <ul className="mb-8 space-y-4">
              {mockTests.map((test) => (
                <li key={test.name} className="rounded border border-red-100 bg-white p-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-medium text-gray-700">{test.name}</span>
                    <PlayCircle size={18} className="text-brand-red" />
                  </div>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className={`rounded px-2 py-1 font-semibold ${difficultyStyles[test.difficulty]}`}>
                      {test.difficulty}
                    </span>
                    <span className="text-gray-500">{test.questions} Questions</span>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/free-tests"
              className="inline-flex items-center gap-2 font-bold uppercase tracking-wide text-brand-red transition-colors hover:text-brand-blue"
            >
              Attempt Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
