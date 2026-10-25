import React from 'react';
import { 
  GraduationCap, 
  Code, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  BookOpen, 
  BrainCircuit, 
  Cpu, 
  Terminal,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_TIMELINE } from '../data/portfolioData';

interface AboutProps {
  onOpenCertificateModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenCertificateModal }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic & Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Aditya Kumar
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A dedicated 2nd-year undergraduate full-stack developer blending robust systems programming fundamentals with modern web engineering and applied AI workflows.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2.5">
                <BrainCircuit className="w-5 h-5 text-emerald-400" />
                <span>Undergraduate Focus & Development Philosophy</span>
              </h3>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                I am currently in my <strong className="text-emerald-400 font-semibold">2nd year of full stack engineering</strong>, passionate about understanding software from the bare bones of memory and algorithms up to sleek, accessible web user interfaces.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My undergraduate journey began with procedural logic in <strong className="text-white font-medium">C</strong>, where I developed a keen intuition for memory allocation, pointer arithmetic, and algorithmic complexity. I further expanded into Object-Oriented Programming with <strong className="text-white font-medium">Java</strong> (encapsulation, polymorphism, collections) and rapid automation with <strong className="text-white font-medium">Python</strong>.
              </p>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                On the web front, I craft responsive user interfaces using <strong className="text-teal-400 font-medium">HTML5, CSS3/Tailwind, and modern JavaScript/React</strong>. Recognizing the revolution in large language models, I earned my credential in <strong className="text-indigo-400 font-medium">Prompt Engineering for Everyone</strong> from the IBM Developer Skills Network (Cognitive Class) and immersed myself in the <strong className="text-indigo-400 font-medium">AI Fluency Framework</strong> to design deterministic, safe, and productive AI tools.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                    <Terminal className="w-4 h-4" />
                    <span>Systems & Core Logic</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Pointer manipulation, struct layouts, sorting algorithms, and clean object hierarchies in C and Java.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Applied AI & Prompts</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    IBM-certified prompt engineering: few-shot exemplars, role directives, hallucination guardrails, and AI fluency.
                  </p>
                </div>
              </div>

              {/* What I am looking for */}
              <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Seeking Software Engineering & Full Stack Internships
                </span>
                <button
                  onClick={onOpenCertificateModal}
                  className="font-medium text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1"
                >
                  <span>Verify IBM Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Education & Milestones Timeline (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-indigo-400" />
                <span>Education Timeline</span>
              </h3>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-800">
                {EDUCATION_TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative pl-8 space-y-1.5">
                    {/* Timeline dot */}
                    <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-emerald-400 ring-4 ring-slate-900"></div>

                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-400">
                        {item.period}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                        {item.stage}
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-sm sm:text-base">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.highlights.map((h, hIdx) => (
                        <span
                          key={hIdx}
                          className="px-2 py-0.5 text-[10px] rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Quote / Motivation */}
              <div className="p-4 rounded-2xl bg-indigo-950/30 border border-indigo-500/20 text-xs text-slate-300 space-y-1">
                <div className="font-semibold text-indigo-300 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Student Goal</span>
                </div>
                <p className="leading-relaxed">
                  "Continuously shipping clean, readable code — turning academic computer science theory into responsive, functional real-world applications."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
