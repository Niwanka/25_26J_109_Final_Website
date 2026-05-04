import { FileText, ExternalLink, Lock, Download } from 'lucide-react';

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
        { name: 'Assessment Checklist 2 (Data Analysis)', status: 'Available', link: '/docs/25-26J-109_Data_Analysis_Report (1).pdf', type: 'PDF', size: '3.5 MB' },
        { name: 'Assessment Checklist 3 (MLOps Report)', status: 'Available', link: '/docs/25-26J-109_MLOps Report.pdf', type: 'PDF', size: '2.1 MB' },
        { name: 'Assessment Checklist 4 (Ethical Analysis Report)', status: 'Available', link: '/docs/25-26J-109_Ethical Analysis Report.pdf', type: 'PDF', size: '1.4 MB' }
      ]
    },
    {
      title: 'Research Papers',
      documents: [
        { name: 'I2CACIS 2026: NeuroLens - Multimodal Mobile Platform', status: 'Available', link: '/docs/I2CACIS2026_NeuroLens__A_Multimodal_Mobile_Platform_for_Early_ (1).pdf', type: 'PDF', size: '1.2 MB' },
        { name: 'Multimodal Fusion Architecture (Upcoming Publication)', status: 'Pending', link: null, type: 'PDF', size: '1.5 MB' }
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
    <div className="flex flex-col w-full py-32 bg-brand-light">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Research Documents</h2>
        <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">Access formal documentation, technical reports, and peer-reviewed outputs.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {categories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
                 <span className="w-6 h-1 bg-sky-600 mr-4 rounded-full"></span>
                 {category.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.documents.map((doc, docIdx) => (
                  <div key={docIdx} className="p-8 bg-white border border-slate-100 rounded-3xl hover:border-sky-500 hover:shadow-xl transition-all flex items-start justify-between">
                    <div className="flex items-start space-x-5">
                      <div className={`p-4 rounded-2xl ${doc.status === 'Available' ? 'bg-sky-50 text-sky-600' : 'bg-slate-50 text-slate-300'}`}>
                        <FileText size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-2">{doc.name}</h4>
                        <div className="flex items-center space-x-3">
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                            doc.status === 'Available' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-400'
                          }`}>
                            {doc.status}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    
                    {doc.status === 'Available' ? (
                      <div className="flex space-x-1">
                        <a href={doc.link} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-sky-600 transition-colors">
                          <ExternalLink size={20} />
                        </a>
                        <a href={doc.link} download className="p-2 text-slate-400 hover:text-sky-600 transition-colors">
                          <Download size={20} />
                        </a>
                      </div>
                    ) : (
                      <Lock size={20} className="text-slate-200 mt-1" />
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
