import React, { useState } from 'react';
import { 
  ArrowRight, 
  Award, 
  Copy, 
  Check, 
  ExternalLink, 
  Code2, 
  Sparkles, 
  Terminal, 
  FolderGit2, 
  GraduationCap, 
  ShieldCheck,
  Download
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCertificateModal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCertificateModal, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glow & geometric accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-600/15 blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-indigo-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-emerald-500/10 blur-[100px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>2nd Year Undergraduate • Full Stack Track</span>
              </span>
              <button
                onClick={onOpenCertificateModal}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition-colors"
              >
                <Award className="w-3.5 h-3.5 text-indigo-400" />
                <span>IBM Certified: Prompt Engineering (AI0117EN)</span>
              </button>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Hi, I'm <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 tracking-tight">
                Second-Year Full Stack Developer & Applied AI Explorer
              </p>
            </div>

            {/* Brief Narrative */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Building modular web applications with <span className="text-white font-medium">React, HTML5 & Tailwind CSS</span>, 
              grounded in strong computer science fundamentals in <span className="text-emerald-400 font-medium">C, Java, and Python</span>. Certified in <span className="text-indigo-400 font-medium">Prompt Engineering for Everyone</span> by IBM Developer Skills Network and passionate about integrating AI frameworks into productive tools.
            </p>

            {/* Skill tags list */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider mr-1">Core Stack:</span>
              {['C Language', 'Java (OOP)', 'Python', 'HTML5 / CSS3', 'JavaScript', 'React', 'Prompt Engineering', 'AI Fluency'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-800 rounded-md hover:border-slate-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 hover:from-emerald-300 hover:to-teal-300 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCertificateModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Award className="w-4 h-4 text-emerald-400" />
                <span>Inspect Certificate</span>
              </button>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:text-white transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Profile Card & IBM Certification Badge (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 via-indigo-500/20 to-teal-500/30 rounded-3xl blur-xl opacity-75"></div>

              {/* Main Card */}
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-6">
                
                {/* Header of card with avatar info */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800/80">
                  <div className="flex items-center gap-3.5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-emerald-500/20">
                      AK
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{PERSONAL_INFO.name}</h3>
                      <p className="text-xs text-emerald-400 font-medium">BCA / B.Tech 2nd Year • Full Stack</p>
                      <p className="text-[11px] text-slate-400">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    Open to Work
                  </span>
                </div>

                {/* Spotlight: IBM Cognitive Class Certificate highlight card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-slate-900/80 border border-indigo-500/30 relative overflow-hidden group hover:border-indigo-500/60 transition-all">
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          IBM Developer Skills Network
                        </span>
                        <span className="text-[11px] text-slate-400">Oct 19, 2026</span>
                      </div>
                      <h4 className="font-bold text-white text-sm sm:text-base group-hover:text-indigo-300 transition-colors">
                        Prompt Engineering for Everyone
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        Course AI0117EN on CognitiveClass.ai — Few-shot prompting, persona engineering, and context grounding.
                      </p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-indigo-500/20 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-slate-400">
                      ID: 3d8685bc...
                    </span>
                    <button
                      onClick={onOpenCertificateModal}
                      className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Preview PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Quick Academic & Technical Matrix */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 font-medium">Coursework Status</span>
                    <p className="text-sm font-bold text-white">2nd Year Full Stack</p>
                    <p className="text-[11px] text-slate-400">Computer Science Major</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <span className="text-[11px] text-slate-400 font-medium">Core Languages</span>
                    <p className="text-sm font-bold text-emerald-400">C, Java & Python</p>
                    <p className="text-[11px] text-slate-400">+ HTML / JS & React</p>
                  </div>
                </div>

                {/* Quick actions row */}
                <div className="pt-2 flex items-center justify-between text-xs text-slate-400 border-t border-slate-800/80">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Verified Credentials
                  </span>
                  <button
                    onClick={onOpenResume}
                    className="font-medium text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-1"
                  >
                    <span>View Student CV</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Hero Stats Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-slate-700 transition-all text-center sm:text-left"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
