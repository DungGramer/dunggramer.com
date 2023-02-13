import Info from '@/src/app/components/about/Info';
import './About.scss';
import Files from '-!react-svg-loader!@assets/files.svg';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="assets/about.jpg" alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>

          <a href="assets/John-Cv.pdf" className="button button--flex">
            Download CV
            <Files />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
