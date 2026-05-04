import { useForm } from '@formspree/react';
import { Mail, MapPin, Globe, Send } from 'lucide-react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  return (
    <div className="flex flex-col w-full py-32 bg-brand-light border-t border-sky-100">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-24 text-center">
        <h2 className="section-heading mb-4 text-slate-900">Get in Touch</h2>
        <div className="w-16 h-1 bg-sky-600 mx-auto rounded-full mb-6"></div>
        <p className="section-subheading mx-auto">Have questions or interested in our research? We would love to hear from you.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl border border-slate-100">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-12">Contact Information</h3>
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="p-4 bg-sky-50 rounded-2xl mr-6 text-sky-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:neurolens26@gmail.com" className="text-slate-600 hover:text-sky-600 transition-colors">
                    neurolens26@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-4 bg-sky-50 rounded-2xl mr-6 text-sky-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">
                    Sri Lanka Institute of Information Technology (SLIIT), Malabe,<br/>
                    Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-4 bg-sky-50 rounded-2xl mr-6 text-sky-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Source Code</h4>
                  <a href="https://github.com/niwanka-pathirathna/NeuroLens" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-sky-600 transition-colors">
                    github.com/niwanka-pathirathna/NeuroLens
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-12">Send a Message</h3>
            {state.succeeded ? (
              <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-3xl text-center">
                <h4 className="text-emerald-700 font-bold text-lg mb-2">Message Sent!</h4>
                <p className="text-emerald-600">Thank you for reaching out. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="full-name" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Tell us about your interest..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-slate-900 text-white rounded-2xl py-5 font-bold text-lg hover:bg-slate-800 transition-all flex items-center justify-center disabled:opacity-50 group shadow-xl shadow-slate-900/10"
                >
                  {state.submitting ? 'Sending...' : 'Send Message'} 
                  <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
