import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Domain from './pages/Domain';
import Milestones from './pages/Milestones';
import Documents from './pages/Documents';
import Presentations from './pages/Presentations';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-light text-slate-800 font-sans antialiased">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Home />
        </section>
        <section id="domain">
          <Domain />
        </section>
        <section id="milestones">
          <Milestones />
        </section>
        <section id="documents">
          <Documents />
        </section>
        <section id="presentations">
          <Presentations />
        </section>
        <section id="about">
          <AboutUs />
        </section>
        <section id="contact">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
