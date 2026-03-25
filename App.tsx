import React, { useEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ParticleBackground from "./components/ParticleBackground";
import CoursesPage from "./pages/CoursesPage";
import DemosPage from "./pages/DemosPage";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppFrame: React.FC = () => (
  <div className="app-shell">
    <ParticleBackground />
    <div className="page-shell">
      <Header />
      <main className="page-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/demos" element={<DemosPage />} />
        </Routes>
      </main>
      <div className="footer-space" />
    </div>
  </div>
);

const App: React.FC = () => (
  <HashRouter>
    <ScrollToTop />
    <AppFrame />
  </HashRouter>
);

export default App;
