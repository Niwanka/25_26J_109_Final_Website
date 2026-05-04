import { Mail, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Niwanka Pathirathna',
      role: 'Undergraduate student',
      id: 'IT22093332',
      email: 'it22093332@my.sliit.lk',
      initials: 'NP',
      image: '/images/niwanka.png'
    },
    {
      name: 'Chanuthi Savithma',
      role: 'Undergraduate student',
      id: 'IT22551498',
      email: 'it22551498@my.sliit.lk',
      initials: 'CS',
      image: '/images/chanuthi.jpeg'
    },
    {
      name: 'Yasasvi Vilochana',
      role: 'Undergraduate student',
      id: 'IT22079336',
      email: 'it22079336@my.sliit.lk',
      initials: 'YV',
      image: '/images/yasasvi.jpeg'
    },
    {
      name: 'Sriharan Saravanan',
      role: 'Undergraduate student',
      id: 'IT22884060',
      email: 'it22884060@my.sliit.lk',
      initials: 'SS',
      image: '/images/sriharan.jpeg'
    }
  ];

  const supervisors = [
    { name: 'Prof. Samantha Thelijjagoda', role: 'Main Supervisor', email: 'samantha.t@sliit.lk', image: '/images/supervisor.jpeg' },
    { name: 'Dr. Mahima Weerasinghe', role: 'Co-Supervisor', email: 'mahima.w@sliit.lk', image: '/images/co supervisor.jpeg' }
  ];

  return (
    <div className="flex flex-col w-full py-32 bg-brand-light">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Research Team</h2>
        <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">The dedicated researchers and engineering team behind the NeuroLens project.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm hover:shadow-xl transition-all duration-500 group">
              <div className="w-40 h-40 rounded-3xl overflow-hidden mb-8 shadow-md border-4 border-white transition-all duration-500 transform group-hover:scale-105">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-900 flex items-center justify-center text-white text-3xl font-bold">{member.initials}</div>
                )}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-sky-600 font-bold text-[10px] uppercase tracking-widest mb-4">{member.role}</p>
              <a href={`mailto:${member.email}`} className="text-slate-400 hover:text-sky-600 transition-colors">
                <Mail size={18} />
              </a>
            </div>
          ))}
        </div>

        {/* Supervisors Section */}
        <div className="mt-32 pt-32 border-t border-sky-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-16 text-center tracking-tight">Supervised By</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {supervisors.map((sup, idx) => (
              <div key={idx} className="flex items-center p-8 bg-white rounded-[2.5rem] border border-sky-100 group hover:shadow-2xl transition-all duration-500 shadow-sm">
                <div className="w-24 h-24 rounded-full overflow-hidden mr-8 border-4 border-white shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform">
                   <img src={sup.image} alt={sup.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{sup.name}</h4>
                  <p className="text-sky-600 font-bold text-xs uppercase tracking-widest mb-4">{sup.role}</p>
                  <a href={`mailto:${sup.email}`} className="flex items-center text-slate-400 hover:text-sky-600 transition-colors text-sm font-medium">
                    <Mail size={14} className="mr-2" /> {sup.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Section */}
        <div className="mt-32 bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <ShieldCheck className="text-sky-400" size={48} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-8">About Our Project</h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                NeuroLens is a final year research project conducted at the <span className="text-white font-semibold">Sri Lanka Institute of Information Technology (SLIIT), Department of Computer Science</span>. Our goal is to bridge the gap in Parkinson's Disease screening through accessible, multimodal digital biomarkers.
              </p>
            </div>
            {/* Subtle light effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-600/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
