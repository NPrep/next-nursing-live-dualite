import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Play, ExternalLink } from 'lucide-react';

const mockTests = [
  { id: 1, title: "NORCET Mock Test", link: "https://links.nprep.in/XMYlOC6F5Zb" },
  { id: 2, title: "AIIMS Nursing Officer Exams", link: "https://links.nprep.in/u34K12Mq6Zb" },
  { id: 3, title: "KGMU Nursing Officer", link: "https://links.nprep.in/NOfgXlxg6Zb" },
  { id: 4, title: "SGPGI Nursing Officer", link: "https://links.nprep.in/C0hk9CHg6Zb" },
  { id: 5, title: "PGIMER Mock Test", link: "https://links.nprep.in/X6m4Q62F6Zb" },
  { id: 6, title: "RRB Nursing Officer", link: "https://links.nprep.in/pC4gYL3eSZb" },
  { id: 7, title: "AIIMS CRE Mock Test", link: "https://links.nprep.in/VpwyAGbG6Zb" },
];

export const FreeTestsPage = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Free Mock Tests" 
          subtitle="Assess your preparation level with our free online tests"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-red bg-red-50 px-2 py-1 rounded">
                    Mock Test
                  </span>
                  <span className="flex items-center gap-1 text-xs font-bold text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-brand-blue transition-colors">
                  {test.title}
                </h3>
              </div>

              <a 
                href={test.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white font-bold py-2.5 rounded transition-all uppercase flex items-center justify-center gap-2"
              >
                <Play size={18} /> Start Test <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
