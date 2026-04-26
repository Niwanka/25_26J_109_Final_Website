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
      title: 'Final Presentation',
      date: 'May 2026',
      description: 'Comprehensive demonstration of the complete NeuroLens platform and fusion results.',
      link: '#',
      status: 'Upcoming'
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Presentations</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Visual summaries and slide decks from our key project assessments.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {presentations.map((p, idx) => (
            <div key={idx} className="group flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                {p.image ? (
                   <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <Presentation size={48} className="text-gray-200" />
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    p.status === 'Available' ? 'bg-green-500 text-white' : 'bg-gray-400 text-white'
                  }`}>
                    {p.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-400 text-xs mb-3">
                  <Calendar size={14} className="mr-2" />
                  {p.date}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex-grow">{p.title}</h3>
                
                {p.status === 'Available' ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-primary-600 text-white rounded-xl font-bold text-sm hover:bg-primary-700 transition-colors flex items-center justify-center"
                  >
                    View Slides <ExternalLink size={16} className="ml-2" />
                  </a>
                ) : (
                  <button disabled className="w-full py-3 bg-gray-100 text-gray-400 rounded-xl font-bold text-sm flex items-center justify-center cursor-not-allowed">
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
