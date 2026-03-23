import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { RouterWrapper } from './next/RouterWrapper';
import { Home } from './pages/Home';
import { NextLiveNursingReviewPage } from './pages/NextLiveNursingReviewPage';
import { NextLiveNursingComparisonPage } from './pages/NextLiveNursingComparisonPage';
import { NextLiveNursingFeesPage } from './pages/NextLiveNursingFeesPage';
import { NextLiveNursingAppPage } from './pages/NextLiveNursingAppPage';
import { NextLiveNursingAlternativesPage } from './pages/NextLiveNursingAlternativesPage';

type AppProps = {
  initialPath?: string;
};

function App({ initialPath = '/' }: AppProps) {
  return (
    <RouterWrapper initialPath={initialPath}>
      <div className="flex min-h-screen flex-col bg-gray-50 font-sans text-gray-900">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/next-live-nursing-review" element={<NextLiveNursingReviewPage />} />
            <Route path="/next-live-nursing-vs-nprep" element={<NextLiveNursingComparisonPage />} />
            <Route path="/next-live-nursing-fees" element={<NextLiveNursingFeesPage />} />
            <Route path="/next-live-nursing-app" element={<NextLiveNursingAppPage />} />
            <Route path="/next-live-nursing-alternatives" element={<NextLiveNursingAlternativesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </RouterWrapper>
  );
}

export default App;
