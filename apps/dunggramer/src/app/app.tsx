import About from '@/src/app/components/about/About';
import Home from '@/src/app/components/home/Home';
import Services from '@/src/app/components/services/Services';
import Skills from '@/src/app/components/skills/Skills';
import Header from './components/header';
import Qualification from '@/src/app/components/qualification/Qualification';
import Testimonials from '@/src/app/components/Testimonials/Testimonials';
import Contact from '@/src/app/components/contact/Contact';
import Footer from '@/src/app/components/footer/Footer';
import ScrollUp from '@/src/app/components/scroll-up/ScrollUp';
import Work from './components/work/Work';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
