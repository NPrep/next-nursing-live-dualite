import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { UserCheck, BookOpen, MonitorPlay, Award, Users, ClipboardList } from 'lucide-react';

const features = [
  {
    icon: <UserCheck size={32} />,
    title: "Expert Faculty",
    description: "Learn from India's top nursing educators and subject matter experts."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Updated Study Material",
    description: "Comprehensive notes covering the latest syllabus and exam patterns."
  },
  {
    icon: <MonitorPlay size={32} />,
    title: "Hybrid Learning",
    description: "Flexible offline and online classes to suit your schedule."
  },
  {
    icon: <ClipboardList size={32} />,
    title: "Test Series",
    description: "Regular mock tests with detailed analysis to track your progress."
  },
  {
    icon: <Award size={32} />,
    title: "Proven Results",
    description: "Highest selection ratio in NORCET and State Nursing exams."
  },
  {
    icon: <Users size={32} />,
    title: "Doubt Support",
    description: "Dedicated doubt clearing sessions and mentorship."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-blue text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-red rounded-full mix-blend-overlay blur-3xl"></div>
         <div className="absolute top-1/2 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose NNLONE?</h2>
          <div className="w-24 h-1.5 bg-brand-gold mx-auto mb-6 rounded-full"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            We don't just teach; we mentor you to success. Here is why thousands of nursing students trust us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-900/40 backdrop-blur-sm border border-brand-blue/50 p-8 rounded-lg hover:bg-brand-blue/60 transition-colors hover:border-brand-gold/50 group">
              <div className="bg-white text-brand-red w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-gold transition-colors">{feature.title}</h3>
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
