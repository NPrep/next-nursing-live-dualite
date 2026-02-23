import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 1,
    title: "GOLD Batch",
    description: "The ultimate comprehensive batch for all nursing officer exams.",
    features: [
      "NORCET 10 & 11/ CHO / BTSC/ KGMU/ GMCH - All Covered",
      "900 Hours - Basic to Advanced Theory (with Clinicals)",
      "100 Hrs - Rapid Revision 2.0",
      "30,000 Questions - QBank (Topic Wise)",
      "Daily Test Series",
      "Previous Year Papers",
      "Subject Wise Papers"
    ],
    link: "https://gold.nprep.in",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "Best Seller"
  },
  {
    id: 2,
    title: "Rapid Revision 2.0",
    description: "Fast-track your preparation with high-yield content.",
    features: [
      "NORCET/ CHO/ BTSC/ KGMU/ GMCH - All Covered",
      "Complete Nursing Syllabus in 100 Hours",
      "Previous Year Papers - with Explainations",
      "Daily Test Series",
      "30,000+ Questions - QBank ( Topic Wise)",
      "Subject Wise Tests"
    ],
    link: "https://rapid.nprep.in",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "Crash Course"
  },
  {
    id: 3,
    title: "Test Series",
    description: "Practice to perfection with our extensive question bank.",
    features: [
      "30,000+ Questions - QBank(Topic Wise)",
      "Each Question with Explaination",
      "Subject Wise Tests",
      "Daily Test Series",
      "Previous Year Question Papers",
      "IBQs, Clinical Scenario Questions"
    ],
    link: "https://qtestseries.nprep.in",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tag: "Practice"
  }
];

export const Courses = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Our Premium Courses" 
          subtitle="Choose the right batch for your preparation"
        />

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/10 transition-colors z-10"></div>
                <img loading="lazy" 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-brand-red text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
                  {course.tag}
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6">
                  {course.description}
                </p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-brand-gold flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-900 text-white py-3 rounded font-bold text-sm transition-colors uppercase border-b-4 border-blue-900 active:border-b-0 active:translate-y-1"
                >
                  Join Now <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
