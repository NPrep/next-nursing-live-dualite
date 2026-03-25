import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="absolute inset-0 z-0 opacity-60">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-blue/15 blur-3xl"></div>
        <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-brand-red/15 blur-3xl"></div>
        <div className="absolute -bottom-16 left-1/3 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <div className="mb-2 inline-block rounded-sm border border-brand-blue/20 bg-brand-blue/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-blue">
              India&apos;s Trusted Nursing Academy
            </div>
            <h1 className="text-4xl font-bold leading-tight text-brand-blue md:text-6xl">
              Prepare for <span className="text-brand-red">Nursing Officer</span> Exams with Experts
            </h1>
            <p className="mx-auto max-w-lg border-brand-gold text-lg leading-relaxed text-gray-600 md:mx-0 md:border-l-4 md:pl-4 md:text-xl">
              Join NNLONE Nursing Academy for AIIMS NORCET, RRB, ESIC &amp; state nursing exams.
              Proven mentorship, structured curriculum, and daily practice support.
            </p>
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row md:justify-start">
              <Link
                to="/contact"
                className="border-b-4 border-red-800 bg-brand-red px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-red-700 hover:shadow-xl"
              >
                Enroll Now
              </Link>
              <Link
                to="/courses"
                className="rounded border border-gray-200 bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-brand-blue shadow-md transition-all hover:border-brand-blue hover:bg-gray-50"
              >
                View Courses
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm font-medium text-gray-500 md:justify-start">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                <span>Offline Batches</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                <span>Live Online Classes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-red"></div>
                <span>Students Across India</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative overflow-hidden rounded-xl border border-gray-100 shadow-2xl transition-transform duration-500 hover:rotate-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="NNLONE nursing classroom"
                className="h-auto w-full"
              />
              <div className="absolute bottom-0 left-0 right-0 border-t border-brand-gold/30 bg-white/95 p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-lg font-bold text-brand-blue">New Offline Batch</p>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Registration Open for March 2026</p>
                  </div>
                  <div className="rounded-full bg-brand-blue px-3 py-1 text-xs font-bold text-white">
                    New Batch Starting March
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 top-10 -z-10 h-32 w-32 rounded-full bg-brand-gold/10 blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-brand-blue/5 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
