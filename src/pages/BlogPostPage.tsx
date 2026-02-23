import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, User, Clock, ChevronLeft, Share2 } from 'lucide-react';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.slug === slug);
  
  // Find related posts
  const relatedPosts = post 
    ? blogPosts.filter(p => post.relatedArticles.includes(p.id))
    : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h2>
        <button 
          onClick={() => navigate('/blog')}
          className="bg-brand-blue text-white px-6 py-2 rounded font-bold"
        >
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Progress Bar (Optional visual touch) */}
      <div className="h-1 bg-gray-100 w-full fixed top-0 left-0 z-50">
        <div className="h-full bg-brand-red w-0" id="progress-bar"></div>
      </div>

      {/* Hero Header */}
      <div className="bg-brand-dark text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img loading="lazy" src={post.image} alt="Background" className="w-full h-full object-cover blur-sm" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/blog" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
            <ChevronLeft size={20} /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <User size={16} className="text-brand-red" />
              <span>By {post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-brand-red" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-red" />
              <span>15 Min Read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          
          {/* Main Content */}
          <article className="max-w-none">
            {/* Render HTML Content safely */}
            <div 
              className="prose prose-lg prose-blue max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-brand-blue hover:prose-a:text-brand-red prose-img:rounded-xl"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Related Articles Widget */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4 border-l-4 border-brand-red pl-3">
                Related Articles
              </h3>
              <div className="space-y-4">
                {relatedPosts.length > 0 ? (
                  relatedPosts.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <h4 className="font-medium text-gray-800 group-hover:text-brand-blue transition-colors line-clamp-2 text-sm mb-1">
                        {related.title}
                      </h4>
                      <p className="text-xs text-gray-500">{related.date}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-gray-500">More articles coming soon.</p>
                )}
              </div>

              {/* CTA Widget */}
              <div className="mt-8 bg-brand-blue text-white p-6 rounded-xl text-center">
                <h4 className="font-bold text-xl mb-2">Crack NORCET 2025</h4>
                <p className="text-sm text-blue-100 mb-4">Join our Gold Batch and get mentored by experts.</p>
                <Link 
                  to="/courses" 
                  className="block w-full bg-brand-red hover:bg-red-700 text-white font-bold py-2 rounded transition-colors uppercase text-sm"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
