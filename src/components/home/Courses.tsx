import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CheckCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type CourseCard = {
  id: number;
  title: string;
  description: string;
  features: string[];
  tag: string;
  curriculumBadge?: string;
  batchTiming?: string;
  image?: string;
  link: string;
  cta: string;
  internal?: boolean;
};

const courses: CourseCard[] = [
  {
    id: 1,
    title: 'GOLD Batch',
    description: 'The ultimate comprehensive batch for all nursing officer exams.',
    features: [
      'NORCET 10 & 11 / CHO / BTSC / KGMU / GMCH - All covered',
      '900 hours - Basic to advanced theory (with clinicals)',
      '100 hours - Rapid Revision 2.0',
      '30,000 questions - Topic-wise QBank',
      'Daily test series and performance analysis',
      'Previous year papers with explanations',
      'Subject-wise practice papers'
    ],
    link: 'https://gold.nprep.in',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Best Seller',
    curriculumBadge: 'NNLONE + NPrep Curriculum',
    batchTiming: 'Morning Batch: 8 AM - 12 PM • Evening Batch: 5 PM - 9 PM',
    cta: 'Join Now'
  },
  {
    id: 2,
    title: 'Rapid Revision 2.0',
    description: 'Fast-track your preparation with high-yield, exam-focused content.',
    features: [
      'NORCET / CHO / BTSC / KGMU / GMCH - All covered',
      'Complete nursing syllabus in 100 hours',
      'Previous year papers with explanations',
      'Daily test series',
      '30,000+ questions - Topic-wise QBank',
      'Subject-wise tests'
    ],
    link: 'https://rapid.nprep.in',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Crash Course',
    curriculumBadge: 'NNLONE + NPrep Curriculum',
    batchTiming: 'Morning Batch: 8 AM - 12 PM • Evening Batch: 5 PM - 9 PM',
    cta: 'Join Now'
  },
  {
    id: 3,
    title: 'Test Series',
    description: 'Practice to perfection with our extensive nursing question bank.',
    features: [
      '30,000+ questions - Topic-wise QBank',
      'Each question with explanation',
      'Subject-wise tests',
      'Daily test series',
      'Previous year papers with explanations',
      'IBQs and clinical scenario questions'
    ],
    link: 'https://qtestseries.nprep.in',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'Practice',
    curriculumBadge: 'NNLONE + NPrep Curriculum',
    batchTiming: 'Live online practice window: 6 AM - 11 PM',
    cta: 'Join Now'
  },
  {
    id: 4,
    title: 'Free Resources',
    description: 'Access PYQs and mock tests curated by NNLONE for daily practice.',
    features: [
      'Downloadable previous year papers with explanations',
      'Difficulty-based mock tests (Easy / Medium / Hard)',
      'Question counts and exam-style practice sets',
      'Completely free for nursing aspirants'
    ],
    link: '/#free-resources',
    tag: 'Free Access',
    cta: 'Explore Free Resources',
    internal: true
  }
];

export const Courses = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeading title="Our Premium Courses" subtitle="Choose the right batch for your preparation" />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:shadow-2xl"
            >
              {course.image ? (
                <div className="relative h-44 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-brand-blue/20 transition-colors group-hover:bg-brand-blue/10"></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 z-20 rounded bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    {course.tag}
                  </div>
                </div>
              ) : (
                <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-blue to-blue-900 px-6 text-center">
                  <div className="absolute right-4 top-4 rounded bg-brand-red px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
                    {course.tag}
                  </div>
                  <p className="text-lg font-semibold text-white">Start with free PYQs &amp; mock tests</p>
                </div>
              )}

              <div className="flex flex-grow flex-col p-6">
                {course.curriculumBadge && (
                  <span className="mb-3 inline-flex w-fit rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-blue">
                    {course.curriculumBadge}
                  </span>
                )}
                <h3 className="mb-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-brand-blue">{course.title}</h3>
                <p className="mb-3 text-sm text-gray-600">{course.description}</p>
                {course.batchTiming && <p className="mb-5 text-xs font-semibold text-brand-red">{course.batchTiming}</p>}

                <div className="mb-8 flex-grow space-y-3">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0 text-brand-gold" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {course.internal ? (
                  <Link
                    to={course.link}
                    className="flex w-full items-center justify-center gap-2 rounded border-b-4 border-blue-900 bg-brand-blue py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-900 active:translate-y-1 active:border-b-0"
                  >
                    {course.cta} <ArrowRight size={16} />
                  </Link>
                ) : (
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded border-b-4 border-blue-900 bg-brand-blue py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-blue-900 active:translate-y-1 active:border-b-0"
                  >
                    {course.cta} <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
