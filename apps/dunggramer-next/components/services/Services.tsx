import { useCallback, useState } from 'react';
import clsx from 'clsx';
import styles from './Services.module.scss';

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = useCallback((index: number) => {
    setToggleState(index);
  }, []);

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className={clsx('container grid', styles['services__container'])}>
        {ServicesData.map((service, index) => (
          <ServicesContent
            key={index}
            {...service}
            toggleState={toggleState}
            toggleTab={toggleTab}
            index={index + 1}
          />
        ))}
      </div>
    </section>
  );
};

const ServicesData = [
  {
    title: 'Web Design',
    icon: 'uil uil-web-grid',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: [
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
    ],
  },
  {
    title: 'Web Development',
    icon: 'uil uil-server-network',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: [
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
    ],
  },
  {
    title: 'Coaching',
    icon: 'uil uil-edit',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: [
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
      'I develop the user interface.',
    ],
  },
];

const ServicesContent = ({
  title,
  icon,
  description,
  services,
  toggleState,
  toggleTab,
  index,
}) => {
  return (
    <div className={styles['services__content']}>
      <div>
        <i className={icon} />
        <h3 className={styles['services__title']}>{title}</h3>
      </div>

      <span
        className={styles['services__button']}
        onClick={() => toggleTab(index)}
      >
        View More
        <i
          className={clsx('dg-arrow-right', styles['services__button-icon'])}
        />
      </span>

      <ServicesModal
        toggleState={toggleState}
        services={services}
        index={index}
        title={title}
        description={description}
        toggleTab={toggleTab}
      />
    </div>
  );
};

const ServicesModal = ({
  toggleState,
  services,
  index,
  title,
  description,
  toggleTab,
}) => {
  return (
    <div
      className={clsx(styles['services__modal'], {
        [styles['active-modal']]: toggleState === index,
      })}
    >
      <div className={styles['services__modal-content']}>
        <i
          onClick={() => toggleTab(0)}
          className={clsx('dg-times', styles['services__modal-close'])}
        />

        <h3 className={styles['services__modal-title']}>{title}</h3>
        <p className={styles['services__modal-description']}>{description}</p>

        <ul className={clsx('grid', styles['services__modal-services'])}>
          {services.map((service, index) => (
            <li key={index} className={styles["services__modal-service"]}>
              <i className="dg-check-circle" />
              <p className={styles["services__modal-info"]}>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
