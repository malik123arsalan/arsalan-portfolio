/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { HireMeModal } from './components/HireMeModal';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectResolveX } from './pages/ProjectResolveX';
import { ProjectCropHealth } from './pages/ProjectCropHealth';
import { SkillsPage } from './pages/SkillsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);

  const handleOpenCV = () => setIsCVModalOpen(true);
  const handleCloseCV = () => setIsCVModalOpen(false);

  const handleOpenHire = () => setIsHireModalOpen(true);
  const handleCloseHire = () => setIsHireModalOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
        {/* Navigation */}
        <Navbar onOpenCV={handleOpenCV} onOpenHire={handleOpenHire} />

        {/* Dynamic Route Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenCV={handleOpenCV} onOpenHire={handleOpenHire} />} />
            <Route path="/about" element={<AboutPage onOpenCV={handleOpenCV} />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/resolvex-ai" element={<ProjectResolveX />} />
            <Route path="/projects/crop-health-detection" element={<ProjectCropHealth />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenCV={handleOpenCV} />

        {/* Universal CV Modal */}
        <CVModal isOpen={isCVModalOpen} onClose={handleCloseCV} />

        {/* Interactive Hire Me Modal */}
        <HireMeModal isOpen={isHireModalOpen} onClose={handleCloseHire} />
      </div>
    </BrowserRouter>
  );
}
