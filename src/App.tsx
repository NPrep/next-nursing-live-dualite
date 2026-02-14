import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { ContactPage } from './pages/ContactPage';
import { Courses } from './components/home/Courses';
import { PYQPage } from './pages/PYQPage';
import { FreeTestsPage } from './pages/FreeTestsPage';
import { SubjectTestsPage } from './pages/SubjectTestsPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { RouterWrapper } from './next/RouterWrapper';

// Simple wrappers for page layout
const CoursesPage = () => <div className="pt-10"><Courses /></div>;

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/pyq" element={<PYQPage />} />
            <Route path="/free-tests" element={<FreeTestsPage />} />
            <Route path="/subject-tests" element={<SubjectTestsPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
