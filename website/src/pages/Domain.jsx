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

  const technologies = [
    'React', 'Vite', 'Tailwind CSS', 'Lucide React', 'Python', 'TensorFlow', 'TinyML', 'BLE', 'MQTT', 'MongoDB'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
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
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Project Domain</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Exploring the research foundation and technical architecture of NeuroLens.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row gap-12">
        {/* Sticky TOC */}
        <aside className="md:w-1/4 hidden md:block">
          <div className="sticky top-24 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">Navigation</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                    activeSection === section.id
                      ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="md:w-3/4 space-y-20">
          <section id="literature" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Literature Survey</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-700 space-y-4">
              <p>
                Early digital screening for Parkinson's Disease has been pursued across four principal biomarker domains. Drotar et al. established that kinematic parameters from digitized handwriting correlate strongly with motor impairment. Tsanas et al. demonstrated high accuracy in PD discrimination using nonlinear acoustic dysphonia markers.
              </p>
              <p>
                For wearable sensing, IMU-based accelerometers have quantified tremor with clinical-grade accuracy. However, the deployment of quantized neural networks directly onto resource-constrained microcontrollers—the TinyML paradigm—remains largely unexplored for PD-specific applications.
              </p>
            </div>
          </section>

          <section id="gap" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Gap</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-700">
              <p>
                Early and non-invasive screening for Parkinson's Disease is currently constrained by the need for specialist clinical visits and subjective assessments. Most existing digital platforms remain confined to offline research pipelines and do not integrate wearable edge inference, mobile deployment, and cloud-based fusion within a single accessible application.
              </p>
            </div>
          </section>

          <section id="problem" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Problem</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-700">
              <p className="font-semibold text-lg text-primary-900 mb-2 italic">
                "How can we unify multi-modal digital biomarkers—handwriting, voice, wearable tremor, and cognitive assessment—into a unified, accessible screening platform using TinyML and cloud-based fusion?"
              </p>
            </div>
          </section>

          <section id="objectives" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Objectives</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-700">
              <ol className="list-decimal list-inside space-y-4">
                <li>Develop a multi-task assessment protocol covering drawing, voice, wearable sensing, and cognitive tests.</li>
                <li>Integrate an on-device TinyML tremor classifier deployed to a BLE wearable for real-time offline inference.</li>
                <li>Implement rigorous kinematic feature engineering with coordination-preserving 60 Hz resampling.</li>
                <li>Establish an AUC-weighted late fusion mechanism to produce a clinically interpretable global risk score.</li>
                <li>Validate a digitized cognitive battery (TMT-A and SDMT) against established neuropsychological instruments.</li>
              </ol>
            </div>
          </section>

          <section id="methodology" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Methodology</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm leading-relaxed text-gray-700 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <p><span className="font-bold">Mobile Client:</span> React Native application for user interaction and high-fidelity data capture.</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <p><span className="font-bold">Cloud Tier:</span> FastAPI microservices for ML inference orchestration and AUC-weighted fusion.</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p><span className="font-bold">Edge Wearable:</span> Custom ESP32 device running quantized 1D CNN for tremor analysis.</p>
              </div>
            </div>
          </section>

          <section id="technologies" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-wrap gap-3">
                {['React Native', 'Expo', 'FastAPI', 'TinyML', 'ESP32', '1D CNN', 'BLE', 'Google Firestore', 'Praat', 'Python'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-primary-50 text-primary-700 font-semibold rounded-lg border border-primary-100 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Domain;
