import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex flex-wrap gap-4 text-sm">
          <Link to="/next-live-nursing-review" className="text-gray-700 hover:text-brand-blue">Review</Link>
          <Link to="/next-live-nursing-fees" className="text-gray-700 hover:text-brand-blue">Fees</Link>
          <Link to="/next-live-nursing-vs-nprep" className="text-gray-700 hover:text-brand-blue">Comparison</Link>
          <Link to="/next-live-nursing-alternatives" className="text-gray-700 hover:text-brand-blue">Alternatives</Link>
        </div>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} nextlivenursing.com</p>
      </div>
    </footer>
  );
};
