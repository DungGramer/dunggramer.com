import About from '@/src/app/components/about/About';
import Home from '@/src/app/components/home/Home';
import Services from '@/src/app/components/services/Services';
import Skills from '@/src/app/components/skills/Skills';
import Header from './components/header';
import Qualification from '@/src/app/components/qualification/Qualification';
import Testimonials from '@/src/app/components/Testimonials/Testimonials';

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
        <Testimonials />
      </main>
    </>
  );
}

export default App;
