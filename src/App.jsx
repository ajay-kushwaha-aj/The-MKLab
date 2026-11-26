import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResearchPage from "./pages/ResearchPage";
import TeamPage from "./pages/TeamPage";
import PublicationsPage from "./pages/PublicationsPage";
import TeachingPage from "./pages/TeachingPage";
import NewsPage from "./pages/NewsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PiCvPage from "./pages/PiCvPage";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
    } else {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/teaching" element={<TeachingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/cv" element={<PiCvPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
