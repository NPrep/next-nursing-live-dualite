import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { UserCheck, BookOpen, MonitorPlay, Award, Users, ClipboardList } from 'lucide-react';

const features = [
  {
    icon: <UserCheck size={32} />,
    title: 'Expert Faculty',
    description: 'Led by NNLONE senior nursing mentors with 10+ years of exam-oriented teaching experience.'
  },
  {
    icon: <BookOpen size={32} />,
    title: 'Updated Study Material',
    description: 'NNLONE + NPrep notes aligned with the latest NORCET, ESIC, RRB and state nursing exam patterns.'
  },
  {
    icon: <MonitorPlay size={32} />,
    title: 'Hybrid Learning',
    description: 'Offline classroom support + online live classes and recorded revision via NPrep app access.'
  },
  {
    icon: <ClipboardList size={32} />,
    title: 'Structured Test Series',
    description: 'Daily quizzes, subject-wise tests and full-length mocks with performance tracking dashboards.'
  },
  {
    icon: <Award size={32} />,
    title: 'Proven Results',
    description: 'Result-focused mentorship with consistent selections in NORCET and other nursing recruitment exams.'
  },
  {
    icon: <Users size={32} />,
    title: 'Doubt Support',
    description: 'Dedicated doubt-solving sessions, mentor follow-ups and guided revision strategy calls.'
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-16 text-white md:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full overflow-hidden opacity-10">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-brand-red mix-blend-overlay blur-3xl"></div>
        <div className="absolute right-0 top-1/2 h-64 w-64 rounded-full bg-brand-gold mix-blend-overlay blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <SectionHeading
          title="Why Choose NNLONE?"
          subtitle="We combine classroom discipline, app-based learning, and exam analytics to improve your final score."
          light
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border border-brand-blue/50 bg-blue-900/40 p-8 backdrop-blur-sm transition-colors hover:border-brand-gold/50 hover:bg-brand-blue/60"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-red shadow-lg transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-brand-gold">{feature.title}</h3>
              <p className="leading-relaxed text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
