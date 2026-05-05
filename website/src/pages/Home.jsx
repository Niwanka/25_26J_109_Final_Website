import { Target, Lightbulb, Cog, Cpu, ArrowRight, FileText, Presentation, Milestone } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      title: 'Multimodal Fusion',
      description: 'Unified risk scoring through the fusion of drawing, voice, tremor, and cognitive digital biomarkers.',
      icon: <Target className="text-sky-600" size={32} />
    },
    {
      title: 'TinyML on Edge',
      description: 'Real-time tremor classification using quantized neural networks deployed on low-power BLE wearables.',
      icon: <Cpu className="text-sky-600" size={32} />
    },
    {
      title: 'Kinematic Analysis',
      description: 'High-fidelity capture of drawing patterns to extract micro-movements invisible to the human eye.',
      icon: <Cog className="text-sky-600" size={32} />
    },
    {
      title: 'Acoustic Biomarkers',
      description: 'Non-invasive voice analysis to identify early speech impairment through phonation and prosody.',
      icon: <Lightbulb className="text-sky-600" size={32} />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-bg.png"
            alt="NeuroLens Background"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              NeuroLens: Multimodal <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">
                Parkinson's Screening
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl">
              An advanced research platform for early Parkinson's Disease screening using TinyML, cross-modal feature fusion, and digital biomarkers.
            </p>
            <div className="flex flex-wrap gap-5">
              <a
                href="#domain"
                className="px-8 py-4 bg-sky-600 text-white rounded-full font-bold text-lg hover:bg-sky-700 transition-all shadow-lg shadow-sky-900/20 flex items-center"
              >
                Learn More <ArrowRight className="ml-2" size={20} />
              </a>
              <a
                href="#documents"
                className="px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center"
              >
                Project Documents
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center text-slate-400">
          <span className="text-[10px] uppercase tracking-widest mb-2 font-bold">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-slate-400 to-transparent"></div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 px-6 bg-brand-light relative overflow-hidden border-y border-sky-100">
        {/* Subtle decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl -z-10 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10 -ml-48 -mb-48"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-heading mb-4 text-slate-900">Research Focus</h2>
            <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
            <p className="section-subheading mx-auto">Our research unifies multiple diagnostic domains into a single, accessible edge-AI platform.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex flex-col p-10 bg-white border border-sky-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="mb-8 p-4 bg-sky-50 w-fit rounded-2xl group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Quick Links Section */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <a href="#documents" className="flex items-center p-8 bg-white border border-sky-100 rounded-[2.5rem] hover:border-sky-500 hover:shadow-2xl transition-all group shadow-sm">
            <div className="p-4 bg-sky-50 rounded-2xl mr-5 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-sm">
              <FileText size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Documents</h4>
              <p className="text-slate-500 text-sm">Reports & Research Papers</p>
            </div>
          </a>
          <a href="#presentations" className="flex items-center p-8 bg-white border border-sky-100 rounded-[2.5rem] hover:border-sky-500 hover:shadow-2xl transition-all group shadow-sm">
            <div className="p-4 bg-sky-50 rounded-2xl mr-5 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-sm">
              <Presentation size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Presentations</h4>
              <p className="text-slate-500 text-sm">Milestone Slide Decks</p>
            </div>
          </a>
          <a href="#milestones" className="flex items-center p-8 bg-white border border-sky-100 rounded-[2.5rem] hover:border-sky-500 hover:shadow-2xl transition-all group shadow-sm">
            <div className="p-4 bg-sky-50 rounded-2xl mr-5 group-hover:bg-sky-600 group-hover:text-white transition-colors shadow-sm">
              <Milestone size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-lg">Milestones</h4>
              <p className="text-slate-500 text-sm">Project Timeline</p>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
