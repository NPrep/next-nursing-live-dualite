import React from 'react';
import { Facebook, Instagram, Youtube, Phone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-300 pt-16 pb-8 border-t-4 border-brand-gold">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 uppercase border-l-4 border-brand-red pl-3">About NNLONE</h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              India's No.1 Nursing Coaching Institute for AIIMS NORCET, RRB, ESIC, DSSSB, and State Nursing Officer Exams. We provide the best offline and online coaching with experienced faculty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-brand-blue p-2 rounded hover:bg-blue-800 transition"><Facebook size={18} color="white" /></a>
              <a href="#" className="bg-pink-600 p-2 rounded hover:bg-pink-700 transition"><Instagram size={18} color="white" /></a>
              <a href="#" className="bg-brand-red p-2 rounded hover:bg-red-800 transition"><Youtube size={18} color="white" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 uppercase border-l-4 border-brand-red pl-3">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Our Courses', path: '/courses' },
                { name: 'PYQ Papers', path: '/pyq' },
                { name: 'Mock Tests', path: '/free-tests' },
                { name: 'Subject Tests', path: '/subject-tests' },
                { name: 'Blog', path: '/blog' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="flex items-center hover:text-brand-gold transition-colors text-sm">
                    <ChevronRight size={14} className="text-brand-red mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 uppercase border-l-4 border-brand-red pl-3">Our Courses</h3>
            <ul className="space-y-3">
              {['GOLD Batch', 'Rapid Revision 2.0', 'Test Series', 'Subject Wise Tests'].map((item) => (
                <li key={item}>
                  <Link to="/courses" className="flex items-center hover:text-brand-gold transition-colors text-sm">
                    <ChevronRight size={14} className="text-brand-red mr-2" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 uppercase border-l-4 border-brand-red pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <Phone size={20} className="text-brand-red mr-3 flex-shrink-0" />
                <a href="tel:+916377639169" className="hover:text-brand-gold transition-colors">+91 6377 6391 69</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p className="nprep-disclaimer-banner mb-4 text-gray-400 max-w-4xl mx-auto italic">
            Disclaimer: This is not an official government portal. This is a help portal regarding nursing exams and coaching. All information provided is for educational purposes only.
          </p>
          <p>&copy; {new Date().getFullYear()} NNLONE Nursing Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
