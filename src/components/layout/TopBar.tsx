import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="bg-brand-blue text-white py-2 text-sm hidden md:block border-b border-brand-gold/30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-brand-gold" /> 
            <span className="font-medium">+91 6377 6391 69</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-brand-gold" />
          <span className="font-medium">New Delhi | Jaipur | Patna | Jodhpur</span>
        </div>
      </div>
    </div>
  );
};
