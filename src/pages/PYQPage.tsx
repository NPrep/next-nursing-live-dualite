import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FileText, ExternalLink, Download } from 'lucide-react';

const paperCategories = [
  {
    category: "AIIMS NORCET Papers",
    papers: [
      { title: "NORCET 7 prelims - (Sep) 2024", link: "https://links.nprep.in/aXOX5oZXPZb" },
      { title: "NORCET 3 - June 2023", link: "https://links.nprep.in/weaumiphIZb" },
      { title: "NORCET - 3 (2022) Shift - 1", link: "https://links.nprep.in/f2X7pvwHMZb" },
      { title: "NORCET 3 - 2022 ; Shift-II", link: "https://links.nprep.in/K7VH496yQZb" },
      { title: "NORCET 20 Nov, Shift 2", link: "https://links.nprep.in/xkOMXfpAhZb" },
    ]
  },
  {
    category: "RRB Nursing Officer Papers",
    papers: [
      { title: "RRB Shift - I (20 JULY )", link: "https://links.nprep.in/Wm36lpRx0Zb" },
      { title: "RRB Shift - I (21 July 2019)", link: "https://links.nprep.in/9PwNw5DuPZb" },
      { title: "RRB Nursing Superintendent 29 APRIL Shift 3", link: "https://links.nprep.in/8LR9YaHPEZb" },
      { title: "RRB Nursing Officer", link: "https://links.nprep.in/iYJK63NtHZb" },
      { title: "RRB Nursing Officer-2021", link: "https://links.nprep.in/QNGYhi8GfZb" },
    ]
  },
  {
    category: "CHO (Community Health Officer) Papers",
    papers: [
      { title: "Rajasthan CHO - 2024", link: "https://links.nprep.in/rocuf2uwYXb" },
      { title: "Rajasthan CHO-2023", link: "https://links.nprep.in/J4rAoKv3ZZb" },
      { title: "MP CHO", link: "https://links.nprep.in/OT7EWR5r3Zb" },
      { title: "MP CHO Paper - 2022", link: "https://links.nprep.in/EKC5ZE7r3Zb" },
      { title: "UK CHO - 2021", link: "https://links.nprep.in/3MAAJScs3Zb" },
      { title: "UP CHO", link: "https://links.nprep.in/7eNfOtC51Zb" },
      { title: "NHM Haryana CHO Official Paper (Held On: 29 Jan 2023)", link: "https://links.nprep.in/SBr7raqs3Zb" },
    ]
  }
];

export const PYQPage = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Previous Year Question Papers" 
          subtitle="Practice with real exam papers to understand the pattern"
        />

        <div className="space-y-10 max-w-5xl mx-auto">
          {paperCategories.map((section, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
              <div className="bg-brand-blue text-white px-6 py-4 border-b border-blue-800 flex items-center justify-between">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <FileText size={20} className="text-brand-gold" />
                  {section.category}
                </h3>
                <span className="text-xs bg-brand-red px-2 py-1 rounded text-white font-bold hidden sm:inline-block">
                  {section.papers.length} Papers
                </span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <tbody className="divide-y divide-gray-100">
                    {section.papers.map((paper, paperIdx) => (
                      <tr key={paperIdx} className="hover:bg-blue-50 transition-colors group">
                        <td className="p-4 pl-6">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-brand-red transition-colors"></div>
                            <span className="font-medium text-gray-800 block md:inline group-hover:text-brand-blue transition-colors">
                              {paper.title}
                            </span>
                          </div>
                        </td>
                        <td className="p-4 pr-6 text-right whitespace-nowrap">
                          <a 
                            href={paper.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-5 py-2 rounded font-bold text-xs transition-all uppercase shadow-sm"
                          >
                            <span>Download</span>
                            <Download size={14} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
