import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

// Using randomuser.me for placeholder faces to avoid copyright issues with real people
const achievers = [
  { id: 1, name: "Priya Sharma", rank: "AIR 15", exam: "NORCET 2024", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Rahul Verma", rank: "Rank 4", exam: "RRB Staff Nurse", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Anjali Singh", rank: "AIR 22", exam: "AIIMS Delhi", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 4, name: "Vikram Yadav", rank: "Rank 1", exam: "UP CHO", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/86.jpg" },
  { id: 5, name: "Neha Gupta", rank: "AIR 56", exam: "DSSSB", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 6, name: "Amit Kumar", rank: "Rank 8", exam: "ESIC", img: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://randomuser.me/api/portraits/men/11.jpg" },
];

export const Results = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Recent Selections" 
          subtitle="Celebrating the success of our students who made us proud"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {achievers.map((student) => (
            <div key={student.id} className="text-center group">
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-brand-blue/10 group-hover:border-brand-gold transition-colors shadow-lg">
                  <img 
                    src={student.img} 
                    alt={student.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 left-0 bg-brand-red text-white text-xs font-bold py-1 px-2 rounded-full mx-auto w-max shadow-md border border-white">
                  {student.rank}
                </div>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{student.name}</h3>
              <p className="text-brand-blue font-medium text-sm">{student.exam}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-brand-blue/5 border border-brand-blue/10 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-brand-blue mb-2">1000+ Selections in Last 3 Years</h3>
          <p className="text-gray-600 mb-6">Join the league of successful Nursing Officers.</p>
          <button className="bg-brand-blue text-white px-8 py-3 rounded font-bold uppercase hover:bg-blue-900 transition-colors border-b-4 border-blue-900">
            View All Results
          </button>
        </div>
      </div>
    </section>
  );
};
