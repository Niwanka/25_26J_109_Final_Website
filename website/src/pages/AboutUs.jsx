import { Mail, User } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Niwanka Pathirathna',
      role: 'Undergraduate Student',
      id: 'IT22093332',
      email: 'it22093332@my.sliit.lk',
      initials: 'NP'
    },
    {
      name: 'Chanuthi Savithma',
      role: 'Undergraduate Student',
      id: 'IT22551498',
      email: 'it22551498@my.sliit.lk',
      initials: 'CS'
    },
    {
      name: 'Yasasvi Vilochana',
      role: 'Undergraduate Student',
      id: 'IT22079336',
      email: 'it22079336@my.sliit.lk',
      initials: 'YV'
    },
    {
      name: 'Sriharan Saravanan',
      role: 'Undergraduate Student',
      id: 'IT22884060',
      email: 'it22884060@my.sliit.lk',
      initials: 'SS'
    }
  ];

  const supervisors = [
    { name: 'Prof. Samantha Thelijjagoda', role: 'Main Supervisor', email: 'samantha.t@sliit.lk' },
    { name: 'Dr. Mahima Weerasinghe', role: 'Co-Supervisor', email: 'mahima.w@sliit.lk' }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet the Team</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">The dedicated students behind the NeuroLens research project.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg border-4 border-white">
                {member.initials}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-semibold text-xs uppercase tracking-wider mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm mb-6">ID: {member.id}</p>
              
              <div className="flex space-x-3 mt-auto">
                <a href={`mailto:${member.email}`} className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-primary-600 hover:bg-primary-50 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Supervisors Section */}
        <div className="mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center uppercase tracking-widest">Supervised By</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {supervisors.map((sup, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-center min-w-[300px]">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold mr-4">
                  {sup.name.split('. ').pop()[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{sup.name}</h4>
                  <p className="text-gray-500 text-xs">{sup.role}</p>
                </div>
                <a href={`mailto:${sup.email}`} className="ml-auto text-primary-600 hover:text-primary-700">
                  <Mail size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* About Project Section */}
        <div className="bg-gray-900 text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-bold mb-8">About Our Project</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
              <p>
                NeuroLens is a final year research project conducted at the <span className="text-white font-semibold">Sri Lanka Institute of Information Technology (SLIIT), Department of Computer Science</span>. Our goal is to bridge the gap in Parkinson's Disease screening through accessible, multimodal digital biomarkers.
              </p>
              <p>
                By unifying handwriting kinematics, voice acoustics, wearable tremor quantification, and interactive cognitive assessment, we provide a unified risk score that leverages the power of TinyML for edge-based clinical assessment.
              </p>
            </div>
          </div>
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600 rounded-full blur-[120px] opacity-20 -mr-48 -mt-48"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
