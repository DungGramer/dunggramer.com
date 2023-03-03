import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">DungGramer</h1>

        <nav>
          <ul className="footer__list">
            <li>
              <a href="#about" className="footer__link">
                About
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" className="footer__link">
                Testimonials
              </a>
            </li>
          </ul>

          <div className="footer__social">
            <a
              href="https://facebook.com/DungGramer"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook" />
            </a>
            <a
              href="https://instagram.com/dung.gramer"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram" />
            </a>
            <a
              href="https://tiktok.com/@dunggramer"
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bx bxl-tiktok" />
            </a>
          </div>
        </nav>

        <span className="footer__copy">
          &copy; 2023 DungGramer. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
