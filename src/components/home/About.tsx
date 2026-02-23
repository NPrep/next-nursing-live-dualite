import React from 'react';
import { CheckCircle } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-blue/10 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-red/10 rounded-full -z-10"></div>
            <img loading="lazy" 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Nursing Institute Building" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
            <div className="absolute bottom-8 left-8 bg-white p-6 rounded shadow-lg border-l-4 border-brand-blue max-w-xs hidden md:block">
              <p className="text-4xl font-bold text-brand-blue mb-1">15+</p>
              <p className="text-gray-600 font-medium">Years of Excellence in Nursing Education</p>
            </div>
          </div>

          <div>
            <div className="text-left mb-6">
               <h4 className="text-brand-red font-bold uppercase tracking-wider mb-2">Who We Are</h4>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 Best Nursing Coaching Institute in India
               </h2>
               <div className="w-16 h-1.5 bg-brand-blue mb-6"></div>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              NNLONE is a premier institute dedicated to preparing nursing aspirants for competitive exams like AIIMS NORCET, RRB, ESIC, DSSSB, and State Nursing Officer exams. With a team of expert faculty and a proven track record of selections, we are committed to shaping the future of nursing professionals in India.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer both offline and online coaching programs designed to meet the diverse needs of students. Our comprehensive study material, regular test series, and personalized guidance ensure that every student achieves their dream of becoming a Nursing Officer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Experienced Faculty Team',
                'Updated Study Material',
                'Regular Mock Tests',
                'Doubt Clearing Sessions',
                'Library Facility',
                'Hostel Assistance'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-brand-red flex-shrink-0" />
                  <span className="font-medium text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
