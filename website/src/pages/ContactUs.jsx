import { Mail, Phone, MapPin, Code, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const ContactUs = () => {
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-2xl">Have questions or interested in our research? Get in touch with us.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left Column: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 text-lg leading-relaxed">
              We welcome collaborations, inquiries from fellow researchers, and feedback on our work. Feel free to reach out via the form or our direct contact details.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-2xl mr-6 text-primary-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email</h4>
                  <p className="text-gray-600">it22093332@my.sliit.lk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-2xl mr-6 text-primary-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Location</h4>
                  <p className="text-gray-600">Sri Lanka Institute of Information Technology (SLIIT), Malabe, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-4 bg-primary-50 rounded-2xl mr-6 text-primary-600">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">GitHub</h4>
                  <p className="text-gray-600">github.com/neurolens-fyp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl p-10 md:p-14 relative overflow-hidden">
            {state.succeeded ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600">Thanks for reaching out! We'll get back to you as soon as possible.</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-8 text-primary-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Name</label>
                    <input 
                      required
                      type="text" 
                      name="name"
                      placeholder="Your name"
                      className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email</label>
                    <input 
                      required
                      type="email" 
                      name="email"
                      placeholder="Your email"
                      className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Subject</label>
                  <input 
                    required
                    type="text" 
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all outline-none"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Message</label>
                  <textarea 
                    required
                    rows="5"
                    name="message"
                    placeholder="Tell us about your interest..."
                    className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all outline-none resize-none"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1" />
                </div>
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-primary-600 text-white rounded-xl font-bold text-lg hover:bg-primary-700 shadow-lg shadow-primary-600/20 transition-all transform active:scale-[0.98] flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <>Sending... <Loader2 size={20} className="ml-3 animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={20} className="ml-3" /></>
                  )}
                </button>
                {state.errors && !state.succeeded && (
                  <p className="text-red-500 text-sm text-center">Something went wrong. Please try again later.</p>
                )}
              </form>
            )}
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-50 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
