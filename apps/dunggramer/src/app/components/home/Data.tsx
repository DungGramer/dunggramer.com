import Hand from '-!react-svg-loader!@assets/hand.svg';
import Send from '-!react-svg-loader!@assets/send.svg';

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        DungGramer
        <Hand />
      </h1>
      <h3 className="home__subtitle">Front-end Developer</h3>
      <p className="home__description">
        I am a highly motivated software engineer interested in front-end with a
        passion to learn and develop projects using modern tech.
      </p>

      <a href="#contact" className="button button--flex">
        Say Hello
        <Send />
      </a>
    </div>
  );
};

export default Data;
