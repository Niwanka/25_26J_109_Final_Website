import { Link } from 'react-router-dom';
import { Target, Lightbulb, Cog, Cpu, ArrowRight, FileText, Presentation, Milestone } from 'lucide-react';

const Home = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8 text-primary-500" />,
      title: "Research Problem",
      description: "Addressing the critical gaps in neurological data collection and real-time monitoring."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary-500" />,
      title: "Objectives",
      description: "Developing a non-invasive, high-precision system for continuous neurological assessment."
    },
    {
      icon: <Cog className="w-8 h-8 text-primary-500" />,
      title: "Methodology",
      description: "Leveraging multi-modal sensor fusion and advanced signal processing techniques."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary-500" />,
      title: "Technologies",
      description: "Built with cutting-edge TinyML, BLE, and cloud-native analytical frameworks."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0 z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              NeuroLens: Multimodal Parkinson's Screening
            </h1>
            <p className="text-xl text-primary-100 mb-10 leading-relaxed max-w-xl">
              A multimodal mobile platform for early Parkinson's Disease screening using TinyML and cross-modal feature fusion of motor and cognitive digital biomarkers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/documents" className="px-8 py-3 bg-white text-primary-700 font-bold rounded-full shadow-lg hover:bg-primary-50 transition-all flex items-center">
                View Documents <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="px-8 py-3 bg-primary-500/30 text-white font-bold rounded-full border border-primary-400/50 backdrop-blur-sm hover:bg-primary-500/40 transition-all">
                Meet the Team
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex flex-col items-center justify-center relative mt-12 md:mt-0">
             <div className="w-80 h-80 md:w-[32rem] md:h-[32rem] bg-primary-400/20 rounded-full blur-3xl absolute animate-pulse"></div>
             <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-[3rem] rotate-3 flex items-center justify-center overflow-hidden shadow-2xl border-4 border-white/20 relative z-10 transition-transform hover:rotate-0 duration-500">
                <img src="/images/PD intro new.jpg" alt="NeuroLens Parkinson's Screening" className="w-full h-full object-cover" />
             </div>
             <p className="text-xs text-primary-200/60 mt-6 italic z-10">
               Artwork courtesy of Parkinson's Europe
             </p>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Project Highlights</h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Meet the Team</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A dedicated group of undergraduate researchers from SLIIT, combining expertise in TinyML, Mobile Development, and Backend Systems.
              </p>
            </div>
            <Link to="/about" className="mt-6 md:mt-0 text-primary-600 font-bold hover:text-primary-700 transition-colors flex items-center group">
              Meet the Full Team <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Niwanka Pathirathna', role: 'Undergraduate Student', image: '/images/niwanka.png' },
              { name: 'Chanuthi Savithma', role: 'Undergraduate Student', image: '/images/chanuthi.jpeg' },
              { name: 'Yasasvi Vilochana', role: 'Undergraduate Student', image: '/images/yasasvi.jpeg' },
              { name: 'Sriharan Saravanan', role: 'Undergraduate Student', image: '/images/sriharan.jpeg' }
            ].map((member) => (
              <div key={member.name} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-primary-50 rounded-full flex items-center justify-center text-primary-700 text-3xl font-bold border-4 border-white shadow-md overflow-hidden mb-6 group-hover:scale-105 transition-transform duration-300">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-primary-200">{member.name.split(' ').map(n => n[0]).join('')}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 text-xs font-bold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/documents" className="flex items-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
            <div className="p-3 bg-white rounded-lg shadow-sm mr-4 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-lg font-bold text-primary-900">Project Documents</span>
          </Link>
          <Link to="/presentations" className="flex items-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
            <div className="p-3 bg-white rounded-lg shadow-sm mr-4 group-hover:scale-110 transition-transform">
              <Presentation className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-lg font-bold text-primary-900">Presentations</span>
          </Link>
          <Link to="/milestones" className="flex items-center p-6 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors group">
            <div className="p-3 bg-white rounded-lg shadow-sm mr-4 group-hover:scale-110 transition-transform">
              <Milestone className="w-6 h-6 text-primary-600" />
            </div>
            <span className="text-lg font-bold text-primary-900">Milestones</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
