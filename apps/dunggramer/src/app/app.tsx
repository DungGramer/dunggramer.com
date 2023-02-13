import Home from 'apps/dunggramer/src/app/components/home/Home';
import Header from './components/header';
import About from '@/src/app/components/about/About';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
