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
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="https://images.dualite.app/de7c7353-5b72-41c6-a07c-4a725f050847/asset-86e42b85-da8b-464d-912c-6ce94173786f.webp" 
                alt="NNLONE Logo" 
                className="h-20 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
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
              <Link
                to="/contact"
                className="bg-brand-red hover:bg-red-700 text-white px-6 py-2.5 rounded font-bold uppercase text-sm transition-colors shadow-sm border-b-4 border-red-800 active:border-b-0 active:translate-y-1"
              >
                Admission Open
              </Link>
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
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg z-50">
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
                <Link
                  to="/contact"
                  className="block w-full text-center bg-brand-red text-white px-6 py-3 rounded font-bold uppercase"
                  onClick={() => setIsOpen(false)}
                >
                  Admission Open
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
