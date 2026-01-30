import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { FileText, ClipboardList, ArrowRight, Download, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FreeResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Free Study Resources" 
          subtitle="Boost your preparation with our free materials and tests"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* PYQ Card */}
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-blue text-white p-4 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                <FileText size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Previous Year Papers</h3>
                <p className="text-gray-600">Download solved papers of NORCET, RRB & more</p>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {['AIIMS NORCET 2023 Paper', 'RRB Staff Nurse 2019 Shift-1', 'ESIC Nursing Officer 2018'].map((item, i) => (
                <li key={i} className="flex items-center justify-between bg-white p-3 rounded border border-blue-100">
                  <span className="font-medium text-gray-700">{item}</span>
                  <Download size={18} className="text-brand-blue" />
                </li>
              ))}
            </ul>

            <Link 
              to="/pyq" 
              className="inline-flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wide hover:text-brand-red transition-colors"
            >
              View All Papers <ArrowRight size={18} />
            </Link>
          </div>

          {/* Free Tests Card */}
          <div className="bg-red-50 rounded-xl p-8 border border-red-100 hover:shadow-lg transition-shadow group">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-red text-white p-4 rounded-lg shadow-md group-hover:scale-110 transition-transform">
                <ClipboardList size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Free Mock Tests</h3>
                <p className="text-gray-600">Practice with exam-level questions daily</p>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {['Daily Nursing Quiz #45', 'Anatomy & Physiology Mini Test', 'NORCET Mega Mock Test (Free)'].map((item, i) => (
                <li key={i} className="flex items-center justify-between bg-white p-3 rounded border border-red-100">
                  <span className="font-medium text-gray-700">{item}</span>
                  <PlayCircle size={18} className="text-brand-red" />
                </li>
              ))}
            </ul>

            <Link 
              to="/free-tests" 
              className="inline-flex items-center gap-2 text-brand-red font-bold uppercase tracking-wide hover:text-brand-blue transition-colors"
            >
              Attempt Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
