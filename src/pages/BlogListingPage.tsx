import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/ui/SectionHeading';
import { blogPosts } from '../data/blogData';
import { Calendar, User, ArrowRight, ChevronRight } from 'lucide-react';

export const BlogListingPage = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Nursing Exam Insights" 
          subtitle="Latest strategies, exam updates, and study tips from experts"
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden divide-y divide-gray-100">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-blue-50 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-grow">
                     <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-brand-red" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <User size={14} className="text-brand-red" />
                        {post.author}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-2">
                        {post.title}
                      </Link>
                    </h3>
                  </div>

                  <div className="flex-shrink-0">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-400 group-hover:bg-brand-blue group-hover:text-white transition-all"
                    >
                      <ChevronRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
