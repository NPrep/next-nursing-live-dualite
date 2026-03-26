import React from 'react';
import { Phone, MapPin } from 'lucide-react';

export const TopBar = () => {
  return (
    <div className="hidden border-b border-brand-gold/30 bg-brand-blue py-2 text-sm text-white md:block">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-6">
          <a
            href="tel:+916377639169"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/15"
          >
            <Phone size={14} className="text-brand-gold" />
            <span>+91 6377 6391 69</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-brand-gold" />
          <span className="font-medium">Online classes • Students across India</span>
        </div>
      </div>
    </div>
  );
};
