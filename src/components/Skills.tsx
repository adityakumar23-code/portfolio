import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Sparkles, 
  Coffee, 
  Layout, 
  Braces, 
  FileCode, 
  Atom, 
  Server, 
  Palette, 
  GitBranch, 
  Binary, 
  Layers, 
  Database, 
  Wrench, 
  Cpu, 
  Bot, 
  FileJson,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode': return <FileCode className="w-5 h-5 text-blue-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'Braces': return <Braces className="w-5 h-5 text-yellow-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-orange-400" />;
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-green-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-teal-400" />;
      case 'Code': return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-red-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-emerald-400" />;
      case 'FileJson': return <FileJson className="w-5 h-5 text-yellow-300" />;
      case 'Binary': return <Binary className="w-5 h-5 text-indigo-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-emerald-400" />;
      case 'Database': return <Database className="w-5 h-5 text-sky-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-slate-400" />;
      default: return <Code2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  const filteredCategories = activeTab === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => {
        if (activeTab === 'languages') return c.category.includes('Languages');
        if (activeTab === 'fullstack') return c.category.includes('Full Stack');
        if (activeTab === 'ai') return c.category.includes('AI');
        if (activeTab === 'cs') return c.category.includes('Computer Science');
        return true;
      });

  return (
    <section id="skills" className="py-20 bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technical Toolkit
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built through 2nd-year academic rigor in C, Java, and Python, paired with modern Full Stack web engineering and certified IBM Prompt Engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Technologies' },
            { id: 'languages', label: 'Languages (C, Java, Python, HTML)' },
            { id: 'fullstack', label: 'Full Stack & Web' },
            { id: 'ai', label: 'AI & Prompt Engineering' },
            { id: 'cs', label: 'CS Fundamentals & DSA' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-2 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {cat.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-emerald-400">
                  {cat.skills.length} competencies
                </span>
              </div>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-emerald-500/30 group-hover:scale-105 transition-all">
                          {getIcon(skill.icon)}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[11px] font-medium text-slate-400">
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs font-mono font-semibold text-slate-400">
                        {skill.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>

                    {/* Detail text */}
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Academic Certificate Highlight Banner */}
        <div className="mt-14 p-6 rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900 to-emerald-950/30 border border-indigo-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Certified Competencies Verified</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              Prompt Engineering for Everyone (IBM Cognitive Class) & AI Fluency
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl">
              Practical experience engineering prompts, setting zero/few-shot constraints, evaluating response quality, and integrating AI with C, Java, Python, and React applications.
            </p>
          </div>

          <a
            href="#certifications"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shrink-0 shadow-lg shadow-indigo-600/20 transition-all"
          >
            Explore Credentials
          </a>
        </div>

      </div>
    </section>
  );
};
