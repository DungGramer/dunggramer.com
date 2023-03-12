import { ReactComponent as Send } from 'public/send.svg';
import { ReactComponent as Hanoi } from 'public/hanoi.svg';
import { useCallback, useEffect, useRef } from 'react';
import styles from './Contact.module.scss';

import emailjs from '@emailjs/browser';
import clsx from 'clsx';

const Contact = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current as HTMLFormElement,
        process.env.EMAILJS_PUBLIC_KEY
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
      <Hanoi id={'hanoi'} />
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className={clsx('container grid', styles['contact__container'])}>
        <div className={styles['contact__content']}>
          <h3 className={styles['contact__title']}>Talk to me</h3>

          <div className={styles['contact__info']}>
            {ContactData.map((contact) => (
              <ContactCard key={contact.title} {...contact} />
            ))}
          </div>
        </div>

        <div className={styles["contact__content"]}>
          <h3 className={styles["contact__title"]}>Write me your project</h3>

          <form
            className={styles['contact__form']}
            ref={form}
            onSubmit={sendEmail}
          >
            <div className={styles['contact__form-div']}>
              <label htmlFor="" className={styles['contact__form-tag']}>
                Name
              </label>
              <input
                name="name"
                type="text"
                autoComplete="name"
                inputMode="text"
                className={styles['contact__form-input']}
                placeholder="Insert your name"
              />
            </div>

            <div className={styles['contact__form-div']}>
              <label htmlFor="" className={styles['contact__form-tag']}>
                Email
              </label>
              <input
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                className={styles['contact__form-input']}
                placeholder="Insert your name"
              />
            </div>

            <div
              className={clsx(
                styles['contact__form-div'],
                styles['contact__form-area']
              )}
            >
              <label htmlFor="" className={styles["contact__form-tag"]}>
                Project
              </label>
              <textarea
                name="project"
                cols={30}
                rows={10}
                className={styles['contact__form-input']}
                placeholder="Write your project"
              ></textarea>
            </div>

            <button className="button button--flex">
              Send Message
              <Send className={styles["send"]} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactData = [
  {
    title: 'Email',
    data: 'dung.dev.gramer@gmail.com',
    link: 'mailto:dung.dev.gramer@gmail.com',
    icon: 'dg-mail-send',
  },
  {
    title: 'Phone',
    data: '+84 334 565 999',
    link: 'tel:+84334565999',
    icon: 'dg-phone',
  },
  {
    title: 'Message',
    data: 'DungGramer',
    link: 'https://m.me/DungGramer',
    icon: 'dg-messenger',
  },
];

const ContactCard = ({ title, data, link, icon }) => {
  return (
    <div className={styles['contact__card']}>
      <i className={clsx(styles['contact__card-icon'], icon)} />

      <h3 className={styles['contact__card-title']}>{title}</h3>
      <span className={styles['contact__card-data']}>{data}</span>

      <a href={link} className={styles['contact__button']}>
        Contact me
        <i className={clsx('dg-arrow-right', styles['contact__button-icon'])} />
      </a>
    </div>
  );
};

export default Contact;
