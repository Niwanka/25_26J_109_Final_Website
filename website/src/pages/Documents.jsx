import { FileText, ExternalLink, Lock } from 'lucide-react';

const Documents = () => {
  const categories = [
    {
      title: 'Project Charters',
      items: [
        { title: 'Project Proposal Report', type: 'PDF', size: '2.4 MB' },
        { title: 'Literature Review & Gap Analysis', type: 'PDF', size: '4.1 MB' },
        { title: 'Software Requirements Specification', type: 'PDF', size: '1.8 MB' }
      ]
    },
    {
      category: 'Research Papers',
      icon: <BookOpen size={24} />,
      items: [
        { title: 'NeuroLens: Multimodal Mobile Platform (Published)', type: 'PDF', size: '3.2 MB' },
        { title: 'TinyML for PD Tremor Quantification', type: 'PDF', size: '2.1 MB' }
      ]
    },
    {
      category: 'Final Reports',
      icon: <CheckCircle size={24} />,
      items: [
        { title: 'Final Research Dissertation', type: 'PDF', size: '12.5 MB' },
        { title: 'User Manual & Technical Documentation', type: 'PDF', size: '5.4 MB' }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documents</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Access all project documentation, reports, and technical specifications.</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6 mb-12 flex items-start">
          <div className="p-2 bg-white rounded-lg shadow-sm mr-4">
            <FileText className="text-primary-600 w-5 h-5" />
          </div>
          <p className="text-primary-900 text-sm">
            <span className="font-bold">Note:</span> Click "View" to open the document in Google Drive. Documents marked <span className="font-bold italic">Pending</span> will be uploaded after submission.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-1.5 h-6 bg-primary-600 rounded-full mr-3"></span>
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.documents.map((doc, docIdx) => (
                  <div key={docIdx} className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl ${doc.status === 'Available' ? 'bg-primary-50 text-primary-600' : 'bg-gray-50 text-gray-400'}`}>
                        <FileText size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{doc.name}</h4>
                        <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${
                          doc.status === 'Available' ? 'text-green-600 bg-green-50' : 'text-gray-400 bg-gray-50'
                        }`}>
                          {doc.status}
                        </span>
                      </div>
                    </div>
                    
                    {doc.status === 'Available' ? (
                      <a
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary-600 text-white text-xs font-bold rounded-lg hover:bg-primary-700 transition-colors flex items-center"
                      >
                        View <ExternalLink size={14} className="ml-2" />
                      </a>
                    ) : (
                      <button disabled className="px-4 py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded-lg flex items-center cursor-not-allowed">
                        Coming Soon <Lock size={14} className="ml-2" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
