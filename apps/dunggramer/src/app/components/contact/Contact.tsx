import Send from '-!react-svg-loader!@assets/send.svg';
import Hanoi from '-!react-svg-loader!@assets/hanoi.svg';
import { useCallback, useEffect, useRef } from 'react';
import './Contact.scss';

import emailjs from '@emailjs/browser';
import { environment } from '@/src/environments/environment';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        environment.EMAILJS_SERVICE_ID as string,
        environment.EMAILJS_TEMPLATE_ID as string,
        form.current as HTMLFormElement,
        environment.EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.warn(error.text);
        }
      );
  };

  const gotToLocation = useCallback(() => {
    window.open('https://goo.gl/maps/RR7LLeZRR647BHVN7', '_blank', 'noopener');
  }, []);

  useEffect(() => {
    const location = document.querySelector('#location') as SVGGElement;
    if (!location) return;
    
    location.addEventListener('mousedown', gotToLocation);

    return () => {
      location.removeEventListener('mousedown', gotToLocation);
    };
  }, [gotToLocation]);

  return (
    <section className="contact section" id="contact">
      <Hanoi />
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon" />

              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                dung.dev.gramer@gmail.com
              </span>

              <a
                href="mailto:dung.dev.gramer@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx-bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bx-phone contact__card-icon" />

              <h3 className="contact__card-title">Phone</h3>
              <span className="contact__card-data">+84 334 565 999</span>

              <a href="tel:+84334565999" className="contact__button">
                Write me
                <i className="bx-bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon" />

              <h3 className="contact__card-title">Message</h3>
              <span className="contact__card-data">DungGramer</span>

              <a href="https://m.me/DungGramer" className="contact__button">
                Contact me
                <i className="bx-bx-right-arrow-alt contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>

          <form className="contact__form" ref={form} onSubmit={sendEmail}>
            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Name
              </label>
              <input
                name="name"
                type="text"
                autoComplete="name"
                inputMode="text"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label htmlFor="" className="contact__form-tag">
                Email
              </label>
              <input
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label htmlFor="" className="contact__form-tag">
                Project
              </label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <Send />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
