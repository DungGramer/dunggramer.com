import Header from 'components/header';
import Hero from 'components/hero/Hero';
import styles from './index.module.scss';

export function Index() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
      </main>
    </>
  );
}

export default Index;
