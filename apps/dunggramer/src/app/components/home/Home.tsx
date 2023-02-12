import Social from 'apps/dunggramer/src/app/components/home/Social';
import './Home.scss';
import Data from 'apps/dunggramer/src/app/components/home/Data';
import ScrollDown from '@/src/app/components/home/ScrollDown';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
