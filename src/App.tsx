/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { CodePlayground } from './components/CodePlayground';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';
import { Award, FileText, ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenCertificate = (certId: string = 'ibm-prompt-engineering') => {
    setSelectedCertId(certId);
    setIsCertModalOpen(true);
  };

  const handleCloseCertificate = () => {
    setIsCertModalOpen(false);
  };

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 bg-grid-pattern relative selection:bg-emerald-500/30 selection:text-white">
      {/* Top ambient radial light */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial-glow pointer-events-none -z-0" />

      {/* Main Navigation */}
      <Navbar 
        onOpenResume={handleOpenResume}
        onOpenCertificateModal={() => handleOpenCertificate('ibm-prompt-engineering')}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero 
          onOpenCertificateModal={() => handleOpenCertificate('ibm-prompt-engineering')}
          onOpenResume={handleOpenResume}
        />

        <About 
          onOpenCertificateModal={() => handleOpenCertificate('ibm-prompt-engineering')}
        />

        <Skills />

        <Certificates 
          onOpenPdfModal={handleOpenCertificate}
        />

        <Projects 
          onSelectProject={handleSelectProject}
        />

        <CodePlayground />

        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenCertificateModal={() => handleOpenCertificate('ibm-prompt-engineering')}
        onOpenResume={handleOpenResume}
      />

      {/* Modals */}
      <CertificateModal 
        isOpen={isCertModalOpen}
        onClose={handleCloseCertificate}
        certificateId={selectedCertId || 'ibm-prompt-engineering'}
      />

      <ProjectDetailModal 
        project={selectedProject}
        onClose={handleCloseProject}
      />

      <ResumeModal 
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
        onOpenPdfModal={handleOpenCertificate}
      />

      {/* Floating Action Button for Instant Certificate Inspection */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-2.5">
        <button
          onClick={() => handleOpenCertificate('ibm-prompt-engineering')}
          className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-900 text-slate-200 border border-emerald-500/40 shadow-xl shadow-black/50 hover:border-emerald-400 hover:scale-105 active:scale-95 transition-all text-xs font-semibold backdrop-blur-md"
          title="Inspect IBM Prompt Engineering PDF Certificate"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <Award className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">IBM Certificate</span>
        </button>
      </aside>
    </div>
  );
}
