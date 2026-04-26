import { useState } from 'react';
import { Calendar, CheckCircle, Clock, ChevronDown } from 'lucide-react';

const Milestones = () => {
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      name: 'Project Proposal',
      description: 'Defined the multimodal screening framework and identified key biomarkers (Kinematic, Voice, Wearable, Cognitive).',
      date: 'September 2025',
      weightage: '10%',
      status: 'Completed',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      name: 'Progress Presentation 1',
      description: 'Completed TinyML on-device 1D CNN training and integration with the ESP32 wearable sensor.',
      date: 'January 2026',
      weightage: '20%',
      status: 'Completed',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      name: 'Progress Presentation 2',
      description: 'Finalized drawing kinematic feature extraction and voice dual-path analysis (Acoustic + Linguistic).',
      date: 'March 2026',
      weightage: '20%',
      status: 'Completed',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      name: 'Final Presentation',
      description: 'Demonstration of the unified AUC-weighted risk fusion and cross-platform mobile application.',
      date: 'May 2026',
      weightage: '40%',
      status: 'Upcoming',
      statusColor: 'text-primary-600 bg-primary-50'
    },
    {
      name: 'Viva',
      description: 'Comprehensive defense of the NeuroLens methodology and validation against clinical datasets (PPMI).',
      date: 'June 2026',
      weightage: '10%',
      status: 'Upcoming',
      statusColor: 'text-primary-600 bg-primary-50'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen pb-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Milestones</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Tracking our journey and key achievements throughout the academic year.</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Dropdown Selector */}
        <div className="relative mb-12">
          <label className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Select Milestone</label>
          <div className="relative group">
            <select
              className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-6 py-4 pr-12 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all font-bold text-gray-700 shadow-sm cursor-pointer"
              value={selectedMilestone}
              onChange={(e) => setSelectedMilestone(parseInt(e.target.value))}
            >
              {milestones.map((m, i) => (
                <option key={i} value={i}>{m.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-transform group-hover:translate-y-[-40%]" />
          </div>
        </div>

        {/* Selected Milestone Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">{milestones[selectedMilestone].name}</h2>
              <span className={`px-4 py-1 rounded-full text-sm font-bold ${milestones[selectedMilestone].statusColor}`}>
                {milestones[selectedMilestone].status}
              </span>
           </div>
           
           <p className="text-lg text-gray-600 leading-relaxed mb-10">
             {milestones[selectedMilestone].description}
           </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                  <Calendar className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Target Date</p>
                  <p className="font-bold text-gray-900">{milestones[selectedMilestone].date}</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-50 rounded-2xl">
                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                  <Clock className="text-primary-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase">Weightage</p>
                  <p className="font-bold text-gray-900">{milestones[selectedMilestone].weightage}</p>
                </div>
              </div>
           </div>
        </div>

        {/* Timeline Visualization */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">Project Timeline</h3>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 flex items-center justify-center ${
                    m.status === 'Completed' ? 'bg-green-500' : m.status === 'In Progress' ? 'bg-amber-500' : 'bg-gray-300'
                  }`}>
                    {m.status === 'Completed' && <CheckCircle size={16} className="text-white" />}
                  </div>
                  
                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                      <p className="text-xs font-bold text-primary-600 mb-1">{m.date}</p>
                      <h4 className="font-bold text-gray-900">{m.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Milestones;
