import React, { useState } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  CheckCircle, 
  Terminal, 
  Play, 
  Sparkles, 
  Layers, 
  RefreshCw,
  Copy,
  Check
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'done'>('idle');
  const [customInput, setCustomInput] = useState('');
  const [simOutput, setSimOutput] = useState<string | null>(null);

  if (!project) return null;

  const handleRunSimulation = () => {
    setSimulationState('running');
    setTimeout(() => {
      setSimulationState('done');
      if (project.id === 'promptcraft-studio') {
        setSimOutput(JSON.stringify({
          status: "success",
          analysis: "Prompt strictly formatted following IBM AI0117EN guidelines.",
          persona: "Senior Code Reviewer",
          few_shot_status: "Verified (1 demonstration attached)",
          tokens_estimated: 142
        }, null, 2));
      } else if (project.id === 'algosprint-visualizer') {
        setSimOutput("Array: [64, 34, 25, 12, 22, 11, 90]\n-> QuickSort Partition around pivot: 90\n-> Left: [64, 34, 25, 12, 22, 11]\n-> Sorted Output: [11, 12, 22, 25, 34, 64, 90]\nTime Complexity: O(N log N) | Space: O(log N)");
      } else if (project.id === 'campus-sync') {
        setSimOutput("Connected to Christ Academy Student Database...\nLoaded 42 Subject Notes (C Programming, Java OOP, Python, Mathematics)\nNext Scheduled Class: 'Advanced Web Engineering' at 10:30 AM in Lab 304.");
      } else {
        setSimOutput(`Process initialized for ${project.title}.\nAll test cases passed with exit code 0.`);
      }
    }, 700);
  };

  const copyGithubLink = () => {
    if (project.githubUrl) {
      navigator.clipboard.writeText(project.githubUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Layers className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">
                {project.title}
              </h3>
              <p className="text-xs text-slate-400">
                {project.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          {/* Status & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
                {project.category.toUpperCase()}
              </span>
              <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                {project.status} ({project.year})
              </span>
            </div>

            {project.githubUrl && (
              <button
                onClick={copyGithubLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Link Copied!' : 'Copy Repo URL'}</span>
              </button>
            )}
          </div>

          {/* Deep dive description */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Architectural Overview & Purpose
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Capabilities & Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-950 text-emerald-300 border border-emerald-500/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Live Demo Simulation Playground */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Interactive Runtime Simulation</span>
              </div>
              <button
                onClick={handleRunSimulation}
                disabled={simulationState === 'running'}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 transition-all"
              >
                {simulationState === 'running' ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Test Execution</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 min-h-[90px] whitespace-pre-wrap">
              {simOutput ? (
                simOutput
              ) : (
                <span className="text-slate-500">
                  Click 'Test Execution' to simulate the live runtime logic for {project.title}...
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Aditya Kumar • Christ Academy Institute for Advanced Studies
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
