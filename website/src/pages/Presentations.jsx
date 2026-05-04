import { Presentation, ExternalLink, Calendar } from 'lucide-react';

const Presentations = () => {
  const presentations = [
    {
      title: 'Project Proposal Presentation',
      date: 'September 2025',
      description: 'Initial pitch for the multimodal PD screening concept and TinyML integration.',
      link: '/docs/25-26J-109-Project Presentation.pdf',
      status: 'Available'
    },
    {
      title: 'Progress Presentation I',
      date: 'January 2026',
      description: 'Showcasing the TinyML 1D CNN on-device inference results and wearable prototype.',
      link: '/docs/Progress Presentation 1  25-26J-109.pdf',
      status: 'Available'
    },
    {
      title: 'Progress Presentation II',
      date: 'March 2026',
      description: 'Demonstration of the integrated React Native mobile client and FastAPI backend.',
      link: '/docs/progress presentation 2 (1).pdf',
      status: 'Available'
    },
    {
      title: 'Final Presentation & Viva',
      date: 'June 2026',
      description: 'The final comprehensive demonstration and methodology defense of the NeuroLens platform.',
      link: '#',
      status: 'Ready'
    }
  ];

  return (
    <div className="flex flex-col w-full py-32 bg-brand-light border-y border-sky-100">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Presentations</h2>
        <div className="w-24 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">Visual summaries and slide decks from key project assessment phases.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentations.map((p, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-slate-900 flex items-center justify-center p-8 relative">
                <Presentation size={48} className="text-white/20" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    p.status === 'Available' ? 'bg-emerald-500 text-white' : 'bg-slate-400 text-white'
                  }`}>
                    {p.status}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs font-bold mb-4">
                  <Calendar size={14} className="mr-2" />
                  {p.date}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-8 flex-grow">{p.title}</h3>
                
                {p.status === 'Available' ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-sky-600 text-white rounded-xl font-bold text-sm hover:bg-sky-700 transition-all flex items-center justify-center shadow-lg shadow-sky-600/20"
                  >
                    View Slides <ExternalLink size={16} className="ml-2" />
                  </a>
                ) : (
                  <button disabled className="w-full py-4 bg-slate-100 text-slate-400 rounded-xl font-bold text-sm flex items-center justify-center cursor-not-allowed">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentations;
