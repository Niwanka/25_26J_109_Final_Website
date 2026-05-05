import { useEffect, useState } from 'react';

const Domain = () => {
  const [activeSection, setActiveSection] = useState('literature');

  const sections = [
    { id: 'literature', title: 'Literature Survey' },
    { id: 'gap', title: 'Research Gap' },
    { id: 'problem', title: 'Research Problem' },
    { id: 'objectives', title: 'Research Objectives' },
    { id: 'methodology', title: 'Methodology' },
    { id: 'technologies', title: 'Technologies Used' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full py-32 bg-brand-light relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50/50 -z-10 blur-3xl"></div>
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Project Domain</h2>
        <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">Foundational research and technical architecture of the NeuroLens platform.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
        {/* Sticky TOC */}
        <aside className="md:w-1/4 hidden md:block">
          <div className="sticky top-28 p-8 bg-white rounded-3xl border border-sky-100 shadow-sm">
            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">On This Page</h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all text-sm font-semibold ${
                    activeSection === section.id
                      ? 'bg-brand-light text-sky-600 shadow-sm border border-sky-100'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="md:w-3/4 space-y-12">
          <section id="literature" className="scroll-mt-32 p-10 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-8 h-px bg-sky-600 mr-4"></span> Literature Survey
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg max-w-none">
              <p>
                Early digital screening for Parkinson's Disease has been pursued across four principal biomarker domains. Drotar et al. established that kinematic parameters from digitized handwriting correlate strongly with motor impairment. Tsanas et al. demonstrated high accuracy in PD discrimination using nonlinear acoustic dysphonia markers.
              </p>
              <p>
                For wearable sensing, IMU-based accelerometers have quantified tremor with clinical-grade accuracy. However, the deployment of quantized neural networks directly onto resource-constrained microcontrollers—the TinyML paradigm—remains largely unexplored for PD-specific applications.
              </p>
            </div>
          </section>

          <section id="gap" className="scroll-mt-32 p-10 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-8 h-px bg-sky-600 mr-4"></span> Research Gap
            </h3>
            <div className="text-slate-600 leading-relaxed text-lg">
              <p>
                Early and non-invasive screening for Parkinson's Disease is currently constrained by the need for specialist clinical visits and subjective assessments. Most existing digital platforms remain confined to offline research pipelines and do not integrate wearable edge inference, mobile deployment, and cloud-based fusion within a single accessible application.
              </p>
            </div>
          </section>

          <section id="problem" className="scroll-mt-32 p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-sky-400 mb-8 flex items-center uppercase tracking-widest text-sm">
                 Research Problem
              </h3>
              <p className="text-2xl font-medium leading-tight italic">
                "How can we unify multi-modal digital biomarkers—handwriting, voice, wearable tremor, and cognitive assessment—into a unified, accessible screening platform using TinyML and cloud-based fusion?"
              </p>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          </section>

          <section id="objectives" className="scroll-mt-32 p-10 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-8 h-px bg-sky-600 mr-4"></span> Research Objectives
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                'Develop a multi-task assessment protocol covering drawing, voice, wearable sensing, and cognitive tests.',
                'Integrate an on-device TinyML tremor classifier deployed to a BLE wearable for real-time offline inference.',
                'Implement rigorous kinematic feature engineering with coordination-preserving 60 Hz resampling.',
                'Establish an AUC-weighted late fusion mechanism to produce a clinically interpretable global risk score.',
                'Validate a digitized cognitive battery (TMT-A and SDMT) against established neuropsychological instruments.'
              ].map((obj, i) => (
                <div key={i} className="flex items-start p-6 bg-brand-light/50 border border-sky-50 rounded-2xl hover:border-sky-200 transition-colors">
                  <span className="text-sky-600 font-bold mr-4 text-xl">0{i+1}.</span>
                  <p className="text-slate-600 font-medium">{obj}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="methodology" className="scroll-mt-32 p-10 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-8 h-px bg-sky-600 mr-4"></span> Methodology
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-8 bg-brand-light/50 rounded-3xl border border-sky-50">
                  <h4 className="font-bold text-slate-900 mb-4">Mobile Client</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">React Native application for user interaction and high-fidelity data capture.</p>
               </div>
               <div className="p-8 bg-brand-light/50 rounded-3xl border border-sky-50">
                  <h4 className="font-bold text-slate-900 mb-4">Cloud Tier</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">FastAPI microservices for ML inference orchestration and fusion.</p>
               </div>
               <div className="p-8 bg-brand-light/50 rounded-3xl border border-sky-50">
                  <h4 className="font-bold text-slate-900 mb-4">Edge Wearable</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">Custom ESP32 device running quantized 1D CNN for tremor analysis.</p>
               </div>
            </div>
          </section>

          <section id="technologies" className="scroll-mt-32 p-10 bg-white rounded-[2.5rem] border border-sky-100 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
               <span className="w-8 h-px bg-sky-600 mr-4"></span> Technologies & Tools
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
              {[
                { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'FastAPI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
                { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
                { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
                { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
                { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
                { name: 'Github', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Vite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg' }
              ].map((tech) => (
                <div key={tech.name} className="flex flex-col items-center group">
                  <div className="w-16 h-16 p-3 bg-brand-light rounded-2xl border border-sky-50 flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-lg group-hover:border-sky-200 group-hover:-translate-y-1">
                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain transition-all duration-300" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-sky-600 transition-colors">{tech.name}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Domain;
