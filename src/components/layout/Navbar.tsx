import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Review', path: '/next-live-nursing-review' },
  { name: 'Fees', path: '/next-live-nursing-fees' },
  { name: 'App', path: '/next-live-nursing-app' },
  { name: 'Comparison', path: '/next-live-nursing-vs-nprep' },
  { name: 'Alternatives', path: '/next-live-nursing-alternatives' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-xl font-bold text-brand-blue">
          Next Live Nursing
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm font-medium text-gray-700 hover:text-brand-blue">
              {link.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <nav className="border-t border-gray-200 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} className="text-sm font-medium text-gray-700" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
