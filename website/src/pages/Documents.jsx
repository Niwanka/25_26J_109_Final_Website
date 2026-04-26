import { FileText, ExternalLink, Lock, Download, BookOpen, CheckCircle } from 'lucide-react';

const Documents = () => {
  const categories = [
    {
      title: 'Project Proposals',
      documents: [
        { name: 'Individual Proposal - Niwanka (IT22093332)', status: 'Available', link: '/docs/IT22093332_RP_proposal.pdf', type: 'PDF', size: '0.9 MB' },
        { name: 'Individual Proposal - Chanuthi (IT22551498)', status: 'Available', link: '/docs/IT22551498_Proposal_Report.pdf', type: 'PDF', size: '0.8 MB' },
        { name: 'Individual Proposal - Yasasvi (IT22079336)', status: 'Available', link: '/docs/IT22079336_RP_proposal.pdf', type: 'PDF', size: '0.9 MB' },
        { name: 'Individual Proposal - Sriharan (IT22884060)', status: 'Available', link: '/docs/IT22884060_RP_Propoal_Report.pdf', type: 'PDF', size: '0.8 MB' }
      ]
    },
    {
      title: 'Checklist Documents',
      documents: [
        { name: 'Assessment Checklist 1', status: 'Available', link: '/docs/25-26J-109.xlsx', type: 'XLSX', size: '24 KB' },
        { name: 'Assessment Checklist 2 (Data Analysis)', status: 'Available', link: '/docs/25-26J-109_Data_Analysis_Report (1).pdf', type: 'PDF', size: '3.5 MB' }
      ]
    },
    {
      title: 'Research Papers',
      documents: [
        { 
          name: 'NeuroLens: Multimodal Mobile Platform', 
          status: 'Available', 
          link: '/docs/NeuroLens_With_Authors.pdf', 
          type: 'PDF', 
          size: '1.1 MB' 
        }
      ]
    },
    {
      title: 'Final Reports',
      documents: [
        { name: 'Final Research Dissertation', status: 'Pending', link: null, type: 'PDF', size: '12.5 MB' },
        { name: 'User Manual & Technical Documentation', status: 'Pending', link: null, type: 'PDF', size: '5.4 MB' }
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
            <span className="font-bold">Note:</span> Click "View" or "Download" to access the documents. Documents marked <span className="font-bold italic">Pending</span> will be uploaded after submission.
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
                        <div className="flex items-center space-x-2 mt-1">
                          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full inline-block ${
                            doc.status === 'Available' ? 'text-green-600 bg-green-50' : 'text-gray-400 bg-gray-50'
                          }`}>
                            {doc.status}
                          </span>
                          <span className="text-[10px] text-gray-400 font-medium">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    {doc.status === 'Available' ? (
                      <div className="flex space-x-2">
                        <a
                          href={doc.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          title="View"
                        >
                          <ExternalLink size={20} />
                        </a>
                        <a
                          href={doc.link}
                          download
                          className="p-2 text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                          title="Download"
                        >
                          <Download size={20} />
                        </a>
                      </div>
                    ) : (
                      <button disabled className="p-2 text-gray-300 cursor-not-allowed">
                        <Lock size={20} />
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
