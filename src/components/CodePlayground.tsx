import React, { useState } from 'react';
import { 
  Terminal, 
  Copy, 
  Check, 
  Play, 
  Code2, 
  FileCode, 
  Coffee, 
  Sparkles, 
  Layers, 
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { CODE_SAMPLES, CodeSample } from '../data/portfolioData';

export const CodePlayground: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showTerminal, setShowTerminal] = useState(true);

  const activeSample = CODE_SAMPLES[selectedIdx];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsExecuting(true);
    setTimeout(() => {
      setIsExecuting(false);
      setShowTerminal(true);
    }, 450);
  };

  const getLanguageBadge = (lang: string) => {
    switch (lang) {
      case 'prompt':
        return { label: 'IBM Prompt Template', icon: Sparkles, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
      case 'c':
        return { label: 'C Language (Pointers)', icon: FileCode, color: 'text-blue-400 bg-blue-500/10 border-blue-500/30' };
      case 'java':
        return { label: 'Java (OOP & Streams)', icon: Coffee, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
      case 'python':
        return { label: 'Python (Scripting)', icon: Terminal, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'html':
        return { label: 'HTML5 & CSS3', icon: Layers, color: 'text-orange-400 bg-orange-500/10 border-orange-500/30' };
      default:
        return { label: lang, icon: Code2, color: 'text-slate-400 bg-slate-800 border-slate-700' };
    }
  };

  return (
    <section id="codelab" className="py-20 bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Code & Prompt Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Applied Code & Prompt Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Inspect real implementations demonstrating Aditya's coursework in C, Java, Python, HTML, and IBM Cognitive Class prompt architecture.
          </p>
        </div>

        {/* Language Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {CODE_SAMPLES.map((sample, idx) => {
            const badge = getLanguageBadge(sample.language);
            const Icon = badge.icon;
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={sample.language}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-slate-950' : ''}`} />
                <span>{sample.title}</span>
              </button>
            );
          })}
        </div>

        {/* Code Card Frame */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Window Title Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <span className="font-mono text-xs text-slate-400 font-medium pl-2 border-l border-slate-800">
                {activeSample.fileName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRun}
                disabled={isExecuting}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 disabled:opacity-60 transition-all shadow-sm"
              >
                {isExecuting ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Compiling...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Snippet</span>
                  </>
                )}
              </button>

              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Description banner */}
          <div className="px-5 py-2.5 bg-slate-950/40 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <span>{activeSample.description}</span>
            <span className="font-mono text-[11px] text-emerald-400 font-medium">UTF-8 • Student Lab</span>
          </div>

          {/* Split view: Code view & Terminal Output */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            
            {/* Code Content (7 cols) */}
            <div className="lg:col-span-7 p-4 sm:p-6 bg-slate-950/80 overflow-x-auto font-mono text-xs leading-relaxed border-b lg:border-b-0 lg:border-r border-slate-800">
              <pre className="text-slate-300">
                <code>{activeSample.code}</code>
              </pre>
            </div>

            {/* Terminal Output (5 cols) */}
            <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-950 flex flex-col justify-between font-mono">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Terminal Output</span>
                  </span>
                  <span className="text-[10px] text-slate-500">status: ok (0)</span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-xs text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {activeSample.output}
                </div>
              </div>

              {/* Lab Annotation */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  Verified as part of 2nd-year curriculum at Christ Academy Institute for Advanced Studies.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
