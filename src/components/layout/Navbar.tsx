import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { TopBar } from './TopBar';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'PYQ', path: '/pyq' },
    { name: 'Mock Tests', path: '/free-tests' },
    { name: 'Subject Tests', path: '/subject-tests' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <>
      <TopBar />
      <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Text Based */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-brand-blue tracking-tighter leading-none">
                  NNLONE
                </span>
                <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest leading-none">
                  Nursing Academy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-700 hover:text-brand-red font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://nprep.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded font-bold uppercase text-sm transition-colors shadow-sm border-b-4 border-red-800 active:border-b-0 active:translate-y-1"
              >
                Admission open
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-brand-blue"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden nprep-mobile-drawer">
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-6 py-3 text-gray-700 hover:bg-brand-blue/5 hover:text-brand-blue font-medium border-b border-gray-50 last:border-none"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-4">
                <a
                  href="https://nprep.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-brand-red text-white px-6 py-3 rounded font-bold uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Admission open
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
