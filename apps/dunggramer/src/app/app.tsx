import Home from 'apps/dunggramer/src/app/components/home/Home';
import Header from './components/header';

export function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  );
}

export default App;
