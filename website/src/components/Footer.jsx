

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-white/5 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Project Info */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">NeuroLens</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A multimodal mobile platform for early Parkinson's Disease screening using TinyML and cross-modal feature fusion. Final Year Project 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#domain" className="text-gray-400 hover:text-white transition-colors text-sm">Domain</a></li>
              <li><a href="#milestones" className="text-gray-400 hover:text-white transition-colors text-sm">Milestones</a></li>
              <li><a href="#documents" className="text-gray-400 hover:text-white transition-colors text-sm">Documents</a></li>
              <li><a href="#presentations" className="text-gray-400 hover:text-white transition-colors text-sm">Presentations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:neurolens26@gmail.com" className="hover:text-white transition-colors">neurolens26@gmail.com</a></li>
              <li>Department of Computer Science</li>
              <li>Sri Lanka Institute of Information Technology (SLIIT)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            © 2026 NeuroLens. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
