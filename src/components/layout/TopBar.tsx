import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="hidden border-b border-brand-gold/30 bg-brand-blue py-2 text-sm text-white md:block">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-brand-gold" />
            <span className="font-medium">+91 6377 6391 69</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-brand-gold" />
          <span className="font-medium">Online classes • Students across India</span>
        </div>
      </div>
    </div>
  );
};
