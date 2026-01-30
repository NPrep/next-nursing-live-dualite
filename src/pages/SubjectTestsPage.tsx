import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BookOpen, ExternalLink, Play } from 'lucide-react';

const subjectTests = [
  { id: 1, title: "MSN (Medical Surgical Nursing)", link: "https://links.nprep.in/hm3aQhddIZb" },
  { id: 2, title: "OBG (Obstetrics & Gynaecology)", link: "https://links.nprep.in/cpRfJAdQPYb" },
  { id: 3, title: "CHN (Community Health Nursing)", link: "https://links.nprep.in/vGYx4MAtWZb" },
  { id: 4, title: "Pediatrics Nursing", link: "https://links.nprep.in/NbTlCc02ZZb" },
  { id: 5, title: "Psychiatry / Mental Health", link: "https://links.nprep.in/mEhGXn27ZZb" },
  { id: 6, title: "Nutrition", link: "https://links.nprep.in/xqzNDqLI1Zb" },
  { id: 7, title: "Nursing Research", link: "https://links.nprep.in/IuYQSDcC6Zb" },
];

export const SubjectTestsPage = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Subject Wise Tests" 
          subtitle="Master each subject individually with our focused tests"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectTests.map((test) => (
            <div key={test.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-1 rounded">
                    Subject Test
                  </span>
                  <BookOpen size={18} className="text-brand-gold" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6 group-hover:text-brand-red transition-colors">
                  {test.title}
                </h3>
              </div>

              <a 
                href={test.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-blue text-white hover:bg-blue-900 font-bold py-2.5 rounded transition-all uppercase flex items-center justify-center gap-2 border-b-4 border-blue-900 active:border-b-0 active:translate-y-1"
              >
                <Play size={18} /> Attempt Now <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
