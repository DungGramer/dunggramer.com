import About from 'components/about/About';
import Header from 'components/header';
import Hero from 'components/hero/Hero';
import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
    </>
  );
}

export default Index;
