import React from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Calendar, 
  FileText,
  User,
  GraduationCap
} from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateId: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateId
}) => {
  if (!isOpen) return null;

  const certificate = CERTIFICATES.find(c => c.id === certificateId) || CERTIFICATES[0];
  const pdfUrl = certificate.pdfPath || '/assets/aistudio/IBMSkillsNetwork_AI0117EN_Certificate___Cognitive_Class_3fc5b340.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base sm:text-lg">
                  {certificate.title}
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {certificate.issuer}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download="Aditya_Kumar_IBM_Prompt_Engineering_Certificate.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 rounded-lg transition-colors"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split view with PDF preview and metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
          
          {/* PDF Viewer (8 cols) */}
          <div className="lg:col-span-8 bg-slate-950 p-3 sm:p-5 flex flex-col justify-center items-center min-h-[420px] lg:min-h-[580px] border-b lg:border-b-0 lg:border-r border-slate-800">
            {certificate.pdfPath ? (
              <div className="w-full h-full flex flex-col">
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  className="w-full h-full min-h-[460px] lg:min-h-[550px] rounded-xl border border-slate-800 bg-white"
                >
                  {/* Fallback if browser blocks PDF inside object */}
                  <div className="flex flex-col items-center justify-center p-8 text-center space-y-4 bg-slate-900 rounded-xl h-full">
                    <FileText className="w-16 h-16 text-indigo-400" />
                    <div>
                      <h4 className="text-white font-bold text-lg">Official PDF Certificate Ready</h4>
                      <p className="text-slate-400 text-xs max-w-sm mt-1">
                        IBMSkillsNetwork_AI0117EN_Certificate___Cognitive_Class for Aditya Kumar.
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-emerald-500 text-slate-950 rounded-lg text-xs font-bold hover:bg-emerald-400 transition-colors inline-flex items-center gap-1.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open PDF in New Tab</span>
                      </a>
                      <a
                        href={pdfUrl}
                        download
                        className="px-4 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-700 transition-colors inline-flex items-center gap-1.5"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </object>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400">
                <FileText className="w-12 h-12 mx-auto mb-2 text-indigo-400" />
                <p>Digital verified credential badge</p>
              </div>
            )}
          </div>

          {/* Certificate Credential Information (4 cols) */}
          <div className="lg:col-span-4 p-5 sm:p-6 bg-slate-900 space-y-5 overflow-y-auto">
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                Official Credential Record
              </span>
              <h4 className="text-lg font-bold text-white leading-snug">
                {certificate.title}
              </h4>
              <p className="text-xs text-slate-300">
                Issued to: <strong className="text-white">Aditya Kumar</strong>
              </p>
            </div>

            {/* Quick Metadata List */}
            <div className="space-y-3 bg-slate-950/70 p-4 rounded-2xl border border-slate-800 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  Candidate:
                </span>
                <span className="text-white font-medium">Aditya Kumar</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                  College:
                </span>
                <span className="text-emerald-400 font-medium text-right text-[11px]">Christ Academy</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Issue Date:
                </span>
                <span className="text-white font-medium">{certificate.issueDate}</span>
              </div>

              {certificate.credentialId && (
                <div className="pt-2 border-t border-slate-800/80 space-y-1">
                  <span className="text-slate-400 text-[11px]">Credential ID:</span>
                  <p className="font-mono text-[11px] text-indigo-300 break-all bg-slate-900 p-1.5 rounded border border-slate-800">
                    {certificate.credentialId}
                  </p>
                </div>
              )}
            </div>

            {/* Description */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Credential Overview
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {certificate.description}
              </p>
            </div>

            {/* Skills learned */}
            <div className="space-y-2">
              <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Validated Skills
              </h5>
              <div className="space-y-1.5">
                {certificate.skillsLearned.map((skill, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons on mobile */}
            <div className="pt-4 border-t border-slate-800 sm:hidden flex flex-col gap-2">
              <a
                href={pdfUrl}
                download
                className="w-full py-2.5 rounded-xl bg-slate-800 text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>
              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-500 text-slate-950 text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify on CognitiveClass.ai</span>
                </a>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
