import About from 'components/about/About';
import Header from 'components/header';
import Hero from 'components/hero/Hero';
import Skills from 'components/skills/Skills';
import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default Index;
