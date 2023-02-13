import Home from 'apps/dunggramer/src/app/components/home/Home';
import Header from './components/header';
import About from '@/src/app/components/about/About';
import Skills from '@/src/app/components/skills/Skills';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
