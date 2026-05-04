import { useState } from 'react';
import { Calendar, CheckCircle, Clock, ChevronDown, BookOpen } from 'lucide-react';

const Milestones = () => {
  const milestones = [
    {
      name: 'Project Proposal',
      description: 'Defined the multimodal screening framework and identified key biomarkers (Kinematic, Voice, Wearable, Cognitive).',
      date: 'September 2025',
      weightage: '10%',
      status: 'Completed',
    },
    {
      name: 'Progress Presentation 1',
      description: 'Completed TinyML on-device 1D CNN training and integration with the ESP32 wearable sensor.',
      date: 'January 2026',
      weightage: '20%',
      status: 'Completed',
    },
    {
      name: 'Progress Presentation 2',
      description: 'Finalized drawing kinematic feature extraction and voice dual-path analysis (Acoustic + Linguistic).',
      date: 'March 2026',
      weightage: '20%',
      status: 'Completed',
    },
    {
      name: 'Final Presentation & Viva',
      description: 'Comprehensive demonstration of the unified AUC-weighted risk fusion and cross-platform mobile application. Comprehensive defense of the NeuroLens methodology and validation against clinical datasets (PPMI).',
      date: 'May 2026',
      weightage: '50%',
      status: 'Upcoming',
    },
    {
      name: 'Research Paper Publication',
      description: 'Submission and publication of the NeuroLens research findings in a high-impact academic journal/conference.',
      date: 'June 2026',
      weightage: 'N/A',
      status: 'Upcoming',
    }
  ];

  const [selectedMilestone, setSelectedMilestone] = useState(milestones.length - 2); // Default to Final Presentation

  return (
    <div className="flex flex-col w-full py-32 bg-brand-light border-y border-sky-100">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Project Timeline</h2>
        <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">Tracking our research progress and key academic milestones.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Milestone Detail Card */}
        <div className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-sky-100 shadow-2xl mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8">
            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${milestones[selectedMilestone].status === 'Completed' ? 'bg-emerald-100 text-emerald-700' : 'bg-sky-100 text-sky-700'
              }`}>
              {milestones[selectedMilestone].status}
            </span>
          </div>

          <h3 className="text-3xl font-extrabold text-slate-900 mb-8">{milestones[selectedMilestone].name}</h3>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            {milestones[selectedMilestone].description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <div className="p-3 bg-brand-light rounded-2xl mr-5">
                <Calendar className="text-sky-600" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Target Date</p>
                <p className="font-bold text-slate-900">{milestones[selectedMilestone].date}</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="p-3 bg-brand-light rounded-2xl mr-5">
                <Clock className="text-sky-600" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Assessment Weight</p>
                <p className="font-bold text-slate-900">{milestones[selectedMilestone].weightage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative space-y-12">
          {/* Main vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-sky-100 -translate-x-1/2 z-0">
            {/* Progress highlight line */}
            <div
              className="absolute top-0 left-0 w-full bg-sky-600 shadow-[0_0_15px_rgba(2,132,199,0.4)] transition-all duration-1000 ease-in-out"
              style={{
                height: `${(milestones.reduce((acc, m, idx) => m.status === 'Completed' ? idx : acc, 0) / (milestones.length - 1)) * 100}%`
              }}
            ></div>
          </div>

          {milestones.map((m, i) => (
            <button
              key={i}
              onClick={() => setSelectedMilestone(i)}
              className={`relative w-full flex items-center group transition-all z-10 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
            >
              {/* Dot */}
              <div className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full z-10 -translate-x-1/2 transition-all border-4 border-brand-light ${selectedMilestone === i
                  ? 'bg-sky-600 scale-125 ring-8 ring-sky-100 shadow-[0_0_15px_rgba(2,132,199,0.6)]'
                  : m.status === 'Completed'
                    ? 'bg-sky-500 scale-110 ring-4 ring-sky-50 shadow-[0_0_10px_rgba(2,132,199,0.4)]'
                    : 'bg-slate-300 group-hover:bg-slate-400'
                }`}>
                {m.status === 'Completed' && selectedMilestone !== i && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                )}
              </div>

              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} text-left`}>
                <div className={`p-8 rounded-[2rem] border transition-all duration-300 ${selectedMilestone === i
                    ? 'bg-white border-sky-100 shadow-xl'
                    : m.status === 'Completed'
                      ? 'bg-white/40 border-sky-100 opacity-90'
                      : 'bg-transparent border-transparent grayscale opacity-50 hover:opacity-100'
                  }`}>
                  <p className={`text-xs font-bold mb-2 uppercase tracking-widest ${m.status === 'Completed' ? 'text-sky-600' : 'text-slate-400'
                    }`}>{m.date}</p>
                  <h4 className={`font-bold text-lg ${m.status === 'Completed' ? 'text-slate-900' : 'text-slate-500'
                    }`}>{m.name}</h4>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Milestones;
