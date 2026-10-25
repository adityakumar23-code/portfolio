import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  Award, 
  Code2 
} from 'lucide-react';
import { PERSONAL_INFO, CERTIFICATES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPdfModal: (id: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenPdfModal }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const plainTextResume = `========================================================
ADITYA KUMAR
Full Stack Developer & 2nd Year Undergraduate
Christ Academy Institute for Advanced Studies
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
========================================================

PROFESSIONAL SUMMARY
Second-year undergraduate student at Christ Academy Institute for Advanced Studies specializing in Full Stack Development. Strong grounding in core computer science (C, Java, Python, Data Structures) combined with modern responsive web engineering (HTML5, CSS3, JavaScript, React). Certified in Prompt Engineering for Everyone by IBM Developer Skills Network (Cognitive Class) and trained in the AI Fluency Framework.

EDUCATION
• Bachelor of Computer Applications (BCA) — 2nd Year (2024 - Present)
  Christ Academy Institute for Advanced Studies (CAIAS)
  Aggregate: 8.8 / 10.0 CGPA
  Coursework: Data Structures in C, Object-Oriented Programming with Java, Python Programming, Web Technologies, Database Management.

INDUSTRY CERTIFICATIONS
• Prompt Engineering for Everyone (AI0117EN)
  Cognitive Class (Powered by IBM Developer Skills Network) — Oct 19, 2026
  Credential ID: 3d8685bc9f114c459d7c230f900716b9
  Focus: Few-shot prompting, system role instructions, hallucination mitigation, context grounding.
• AI Fluency Framework & Foundations (2026)
  Focus: Responsible AI literacy, generative AI workflows, evaluation loops.

TECHNICAL SKILLS
• Programming Languages: C Language, Java, Python, JavaScript (ES6+), HTML5, CSS3
• Web & Frameworks: React.js, Tailwind CSS, Node.js & Express, REST APIs
• AI & Prompting: Prompt Engineering, Few-Shot & Chain-of-Thought, System Framing, AI Fluency
• Core Fundamentals: Data Structures & Algorithms, Object-Oriented Design (OOP), Git/GitHub, SQL

KEY PROJECTS
1. PromptCraft AI Studio (React, TypeScript, IBM Prompting Principles)
   - Interactive prompt engineering workbench implementing few-shot exemplars and JSON validation.
2. CampusSync — Student Academic Hub (React, Node.js, Tailwind CSS)
   - Centralized college notes sharing, syllabus tracker, and peer revision portal.
3. AlgoSprint: DSA Visualizer (C, Java, JavaScript)
   - Visualizing pointer manipulation, QuickSort, MergeSort, and memory allocation steps.
4. Java OOP Store & Billing Engine (Java, File I/O, OOP)
   - Command-line retail system utilizing inheritance, custom exceptions, and polymorphic billing.
========================================================`;

  const handleCopyText = () => {
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:border-none print:shadow-none print:max-h-full print:bg-white print:text-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar (hidden during print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70 print:hidden">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 className="font-bold text-white text-base">
                Curriculum Vitae — Aditya Kumar
              </h3>
              <p className="text-xs text-slate-400">
                Christ Academy Institute for Advanced Studies • 2nd Year BCA
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="p-6 sm:p-10 space-y-6 overflow-y-auto flex-1 bg-slate-900 text-slate-200 print:bg-white print:text-black print:p-8">
          
          {/* Header */}
          <div className="border-b border-slate-800 print:border-black pb-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-white print:text-black tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-semibold text-emerald-400 print:text-emerald-700 mt-1">
                2nd Year BCA • Full Stack Developer & AI Enthusiast
              </p>
              <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                Christ Academy Institute for Advanced Studies, Bengaluru, India
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-300 print:text-gray-700 text-left sm:text-right">
              <p className="flex items-center sm:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </p>
              <p>GitHub: github.com/adityakumar-dev</p>
              <p>Status: Available for Internships</p>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-gray-300 pb-1">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed">
              Second-year undergraduate student at <strong>Christ Academy Institute for Advanced Studies</strong> specializing in Full Stack Development. Strong foundation in core computer science and logic (C, Java, Python, Data Structures) blended with modern web development (HTML5, CSS3, JavaScript, React). Certified in <strong>Prompt Engineering for Everyone</strong> by the IBM Developer Skills Network (Cognitive Class) and experienced in applied AI workflow optimization.
            </p>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-gray-300 pb-1">
              Education
            </h2>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-white print:text-black text-sm">
                  Bachelor of Computer Applications (BCA) — 2nd Year
                </h3>
                <span className="text-xs font-medium text-slate-400 print:text-gray-600">2024 – Present</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 print:text-emerald-700">
                Christ Academy Institute for Advanced Studies (CAIAS), Bengaluru
              </p>
              <p className="text-xs text-slate-300 print:text-gray-700 mt-1">
                Current Aggregate: <strong>8.8 / 10.0 CGPA</strong> • Focus on Data Structures, C Language, Java OOP, Python, Web Engineering & DBMS.
              </p>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-gray-300 pb-1">
              Certifications & Accreditations
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white print:text-black text-xs sm:text-sm">
                    Prompt Engineering for Everyone (AI0117EN)
                  </h4>
                  <span className="text-slate-400 print:text-gray-600">October 19, 2026</span>
                </div>
                <p className="text-emerald-400 print:text-emerald-700 font-medium mt-0.5">
                  Cognitive Class • Powered by IBM Developer Skills Network
                </p>
                <p className="text-slate-300 print:text-gray-700 mt-1">
                  Credential ID: <span className="font-mono text-indigo-300 print:text-indigo-800">3d8685bc9f114c459d7c230f900716b9</span> (Official PDF attached).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/60 print:bg-gray-50 border border-slate-800 print:border-gray-200">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white print:text-black text-xs sm:text-sm">
                    AI Fluency Framework & Foundations
                  </h4>
                  <span className="text-slate-400 print:text-gray-600">2026</span>
                </div>
                <p className="text-slate-300 print:text-gray-700 mt-0.5">
                  Generative AI literacy, model evaluation loops, ethical AI guardrails, and workflow automation.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Skills Matrix */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-gray-300 pb-1">
              Technical Skillset
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <strong className="text-white print:text-black">Programming Languages:</strong>{' '}
                <span className="text-slate-300 print:text-gray-700">C Language, Java, Python, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div>
                <strong className="text-white print:text-black">Web & Frontend:</strong>{' '}
                <span className="text-slate-300 print:text-gray-700">React.js, Tailwind CSS, Responsive Web Design, Component Architecture</span>
              </div>
              <div>
                <strong className="text-white print:text-black">AI & Prompting:</strong>{' '}
                <span className="text-slate-300 print:text-gray-700">Few-Shot Prompting, Persona Framing, Context Grounding, JSON output schema</span>
              </div>
              <div>
                <strong className="text-white print:text-black">Core Computer Science:</strong>{' '}
                <span className="text-slate-300 print:text-gray-700">Data Structures & Algorithms, Object-Oriented Design (OOP), Git/GitHub, SQL</span>
              </div>
            </div>
          </section>

          {/* Academic & Personal Projects */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 print:text-emerald-800 border-b border-slate-800 print:border-gray-300 pb-1">
              Featured Projects
            </h2>
            <div className="space-y-2.5 text-xs">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white print:text-black">{p.title}</span>
                    <span className="text-slate-400 print:text-gray-600 font-mono text-[11px]">{p.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 print:text-gray-700">{p.description}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
