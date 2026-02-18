import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Image - AIIMS Style Building */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/aiims-building-bg.svg" 
          alt="AIIMS Building Background" 
          className="w-full h-full object-cover opacity-20"
        />
        {/* Subtle white gradient to fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block bg-brand-blue/5 text-brand-blue px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm mb-2 border border-brand-blue/20">
              India's #1 Nursing Institute
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-brand-blue">
              Prepare for <span className="text-brand-red">Nursing Officer</span> Exams with Experts
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed md:border-l-4 md:border-brand-gold md:pl-4 mx-auto md:mx-0">
              Join NNLONE for AIIMS NORCET, RRB, ESIC & State Nursing Exams. 
              Proven results, experienced faculty, and comprehensive study material.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 rounded font-bold uppercase tracking-wide text-center transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-b-4 border-red-800"
              >
                Enroll Now
              </Link>
              <Link 
                to="/courses" 
                className="bg-white hover:bg-gray-50 text-brand-blue px-8 py-4 rounded font-bold uppercase tracking-wide text-center transition-all shadow-md border border-gray-200 hover:border-brand-blue"
              >
                View Courses
              </Link>
            </div>
            
            <div className="pt-8 flex flex-wrap justify-center md:justify-start items-center gap-6 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                <span>Offline Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                <span>Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-red rounded-full"></div>
                <span>Test Series</span>
              </div>
            </div>
          </div>

          {/* Hero Image / Form Area */}
          <div className="hidden md:block relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Nursing Classroom" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-brand-gold/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-brand-blue text-lg">New Offline Batch</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Registration Open for 2025</p>
                  </div>
                  <div className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    Filling Fast
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 -right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
