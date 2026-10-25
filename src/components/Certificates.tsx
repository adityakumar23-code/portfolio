import React from 'react';
import { 
  Award, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  CheckCircle, 
  Download, 
  Sparkles, 
  Eye,
  Building2,
  Calendar,
  Layers
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

interface CertificatesProps {
  onOpenPdfModal: (certId: string) => void;
}

export const Certificates: React.FC<CertificatesProps> = ({ onOpenPdfModal }) => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications & Industry Accreditations
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Formally recognized training in Prompt Engineering, AI Fluency Framework, and Full Stack software engineering.
          </p>
        </div>

        {/* Featured Certificate Card: IBM Cognitive Class Prompt Engineering */}
        <div className="mb-12 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-indigo-500/25 to-teal-500/20 rounded-3xl blur-xl opacity-75"></div>

          <div className="relative bg-slate-900/90 backdrop-blur-xl border border-indigo-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Credential (AI0117EN)</span>
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Authenticity
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Prompt Engineering for Everyone
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm sm:text-base flex items-center gap-2">
                    <span>CognitiveClass.ai</span>
                    <span className="text-slate-500">•</span>
                    <span>Powered by IBM Developer Skills Network</span>
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Earned by Aditya Kumar on October 19, 2026. This comprehensive certification validates competency in crafting structured system instructions, few-shot demonstration exemplars, preventing LLM hallucinations through context grounding, and engineering reliable responses across large language models.
                </p>

                {/* Key competencies learned */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Core Competencies Validated:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Prompt Directives & Role Framing',
                      'Few-Shot & Zero-Shot Optimization',
                      'Context Grounding & Hallucination Defense',
                      'Chain-of-Thought (CoT) Prompting',
                      'Structured Output (JSON/Markdown)',
                      'IBM Skills Network Certification Standard'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Credential ID and Links */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Credential ID & Verification
                    </span>
                    <p className="font-mono text-xs text-indigo-300 font-medium">
                      3d8685bc9f114c459d7c230f900716b9
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5">
                    <button
                      onClick={() => onOpenPdfModal('ibm-prompt-engineering')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Inspect Certificate PDF</span>
                    </button>

                    <a
                      href="https://courses.cognitiveclass.ai/certificates/3d8685bc9f114c459d7c230f900716b9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <span>Verify on CognitiveClass</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Certificate Preview Box */}
              <div className="lg:col-span-5">
                <div 
                  onClick={() => onOpenPdfModal('ibm-prompt-engineering')}
                  className="cursor-pointer group relative bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl p-4 transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10"
                >
                  {/* Certificate Mockup Frame */}
                  <div className="bg-white text-slate-900 rounded-xl p-5 aspect-[1.4/1] flex flex-col justify-between border-4 border-slate-200 relative overflow-hidden group-hover:scale-[1.01] transition-transform">
                    {/* Watermark/header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                          CC
                        </div>
                        <span className="font-bold text-xs tracking-tight text-slate-800">CognitiveClass.ai</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">AI0117EN</span>
                    </div>

                    {/* Certificate Body */}
                    <div className="my-auto text-center space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-slate-500">This is to certify that</p>
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                        Aditya Kumar
                      </h4>
                      <p className="text-[9px] text-slate-600">
                        successfully completed and received a passing grade in
                      </p>
                      <p className="text-xs sm:text-sm font-extrabold text-blue-900">
                        Prompt Engineering for Everyone
                      </p>
                      <p className="text-[9px] text-slate-500 italic">
                        Powered by IBM Developer Skills Network
                      </p>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-slate-200 pt-2 text-[8px] text-slate-500 font-mono">
                      <span>October 19, 2026</span>
                      <span className="text-blue-700 font-semibold">Verified Credential</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 text-white p-4">
                      <div className="p-3 rounded-full bg-emerald-500 text-slate-950 shadow-lg">
                        <Eye className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold">Click to View Official PDF</span>
                      <span className="text-[10px] text-slate-300">Contains IBM verification barcode</span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 text-emerald-400" />
                      Original PDF Document
                    </span>
                    <span className="text-emerald-400 font-medium">Click to inspect</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Additional Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATES.slice(1).map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    {cert.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {cert.issueDate}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills gained */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Key Topics Covered:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-950 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">
                  {cert.credentialId ? `ID: ${cert.credentialId}` : 'Academic Track'}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Curriculum
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
