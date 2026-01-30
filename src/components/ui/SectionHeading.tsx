import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  center?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, className, center = true }) => {
  return (
    <div className={cn("mb-10", center ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 uppercase tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <div className="w-24 h-1.5 bg-brand-red mx-auto mb-4 rounded-full relative overflow-hidden">
             <div className="absolute top-0 left-0 h-full w-1/2 bg-brand-gold"></div>
        </div>
      )}
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};
