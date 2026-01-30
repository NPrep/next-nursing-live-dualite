import React from 'react';
import { Link } from 'react-router-dom';

export const CallToAction = () => {
  return (
    <section className="py-16 bg-brand-red text-white relative overflow-hidden">
       {/* Pattern Overlay */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase">Admissions Open for 2025 Batch</h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Start your journey to become a Nursing Officer today. Limited seats available for offline batches.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/contact" 
            className="bg-white text-brand-red px-10 py-4 rounded font-bold uppercase text-lg hover:bg-gray-100 transition-colors shadow-lg border-b-4 border-gray-300"
          >
            Apply Now
          </Link>
          <a 
            href="tel:+916377639169" 
            className="bg-brand-blue border-2 border-brand-blue text-white px-10 py-4 rounded font-bold uppercase text-lg hover:bg-blue-900 transition-colors shadow-lg"
          >
            Call: +91 6377 6391 69
          </a>
        </div>
      </div>
    </section>
  );
};
