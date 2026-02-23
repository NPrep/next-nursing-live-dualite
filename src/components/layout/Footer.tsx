import React from 'react';
import { Facebook, Instagram, Youtube, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t-4 border-brand-gold bg-brand-dark pb-8 pt-16 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-6 border-l-4 border-brand-red pl-3 text-xl font-bold uppercase text-white">About NNLONE</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              NNLONE Nursing Academy prepares aspirants for AIIMS NORCET, RRB, ESIC, DSSSB and state nursing officer exams with structured online and offline support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded bg-brand-blue p-2 transition hover:bg-blue-800"><Facebook size={18} color="white" /></a>
              <a href="#" className="rounded bg-pink-600 p-2 transition hover:bg-pink-700"><Instagram size={18} color="white" /></a>
              <a href="#" className="rounded bg-brand-red p-2 transition hover:bg-red-800"><Youtube size={18} color="white" /></a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-brand-red pl-3 text-xl font-bold uppercase text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Our Courses', path: '/courses' },
                { name: 'PYQ Papers', path: '/pyq' },
                { name: 'Mock Tests', path: '/free-tests' },
                { name: 'Subject Tests', path: '/subject-tests' },
                { name: 'Blog', path: '/blog' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="flex items-center text-sm transition-colors hover:text-brand-gold">
                    <ChevronRight size={14} className="mr-2 text-brand-red" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-brand-red pl-3 text-xl font-bold uppercase text-white">Our Courses</h3>
            <ul className="space-y-3">
              {['GOLD Batch', 'Rapid Revision 2.0', 'Test Series', 'Free Resources'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="flex items-center text-sm transition-colors hover:text-brand-gold">
                    <ChevronRight size={14} className="mr-2 text-brand-red" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 border-l-4 border-brand-red pl-3 text-xl font-bold uppercase text-white">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone size={20} className="mr-3 flex-shrink-0 text-brand-red" />
                <span>+91 6377 6391 69</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="mx-auto mb-4 max-w-4xl text-gray-400 italic">
            Disclaimer: This is not an official government portal. This is an educational support platform for nursing exam preparation.
          </p>
          <p className="mb-1">&copy; {new Date().getFullYear()} NNLONE Nursing Academy. All Rights Reserved.</p>
          <p className="text-xs text-gray-400">NNLONE Nursing Academy (nextlivenursing.com)</p>
        </div>
      </div>
    </footer>
  );
};
