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
    title: 'Coaching',
    icon: 'dg-knowledge-sharing',
    description:
      'Add significant value to any individual seeking to grow and develop their career in the web development industry.',
    services: [
      `Personalized Learning: As a coach, I provide personalized learning experiences, tailored to meet the unique needs of each individual. This approach ensures that my clients receive the exact skills necessary for their career growth.`,
      `Access to Latest Tools and Trends: Coaching requires keeping up with the latest trends and updates in the industry. I stay up to date with the latest tools, tactics, and trends used in the field, ensuring that my clients get access to the latest resources.`,
      `Guidance and Mentorship: Coaching comes with guidance in professional development, and I can mentor my clients through their growth process. This mentorship benefit is invaluable in a world where connection and mentorship are essential elements for career growth.`,
      `Enhanced Technical Skills: My coaching experiences have allowed me to improve my skills in web development, including my expertise in new web development tools and techniques.`,
      `Increased Focus and Efficiency: Coaching to develop web development skills can rejuvenate focus and constructiveness in the goal attainment process. Learning under the guidance of a coach increases the success rate of goal achievement.`,
      `Professional Network: I have developed a network of experienced developers and designers throughout my coaching experience. Hiring a web development coach with a strong and active network can help clients find new opportunities.`,
      `Cost-Effectiveness: Coaching can save clients' time and money by providing a structured learning environment, eliminating the need for expensive technical training programs.`,
      `Confidence Building: Coaching can enhance confidence in the developer's web development abilities, making them more productive and valuable to their employers.`,
    ],
  },
  {
    title: 'Web Development',
    icon: 'dg-arrow',
    description:
      'Web frontend development involves creating the visual and interactive elements of a website that are visible to users.',
    services: [
      `Building Scalable Solutions: I have developed expertise in applying the latest tools and technologies to develop scalable, modular and maintainable front-end applications.`,
      `Diverse Skill Set: Through my time spent in frontend development, I have worked on a variety of projects that require different design elements and coding languages. This experience has helped me to develop a diverse skill set, which can be invaluable when working with different clients, teams, and projects.`,
      `User-Centric Approach: Focus on user experience and user-centered design has helped me develop websites that are user-friendly and intuitive to navigate.`,
      `Creativity: I have a creative mind and I love to create new things. I am always looking for new ideas and ways to improve my work.`,
      `Responsive Design: My websites are designed to look good on all devices, from desktops to tablets and mobile phones.`,
    ],
  },
  {
    title: 'SEO Optimization',
    icon: 'dg-magnifying-glass',
    description:
      'Search engine optimization (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.',
    services: [
      `Improved Website Visibility: SEO optimization increases the rankings of a business's website on search engine result pages, increasing its visibility to potential customers, while increasing traffic and leading to a better conversion rate.`,
      `Enhanced User Experience: SEO optimization improves website usability by ensuring it is easy to navigate, relevant and user-friendly, ensuring an optimal user experience for website visitors.`,
      `Long-Lasting Impact: SEO optimization strategies are long-lasting, and a solid implementation can sustain a website’s visibility for years, leading to higher continuous traffic and conversions.`,
      `Analytics Tracking and Site Optimization: SEO optimization offers insights into website performance, thereby allowing for the optimization of site capabilities through the regular improvement of advertising, content and functionality, which improves user engagement, retention, and ultimately conversion.`,

      // `Keyword Research: I have experience in keyword research, which is the process of identifying the most relevant keywords for a website. This process is essential for improving the ranking of a website in search engine results.`,
      // `On-Page Optimization: I have experience in on-page optimization, which involves optimizing the content of a website to improve its ranking in search engine results. This process includes optimizing the title, meta description, and other elements of a website.`,
      // `Off-Page Optimization: I have experience in off-page optimization, which involves optimizing the backlinks of a website to improve its ranking in search engine results. This process includes building backlinks from other websites.`,
      // `Technical SEO: I have experience in technical SEO, which involves optimizing the technical aspects of a website to improve its ranking in search engine results. This process includes optimizing the website's speed, structure, and other technical aspects.`,
      // `Content Marketing: I have experience in content marketing, which involves creating and promoting content to improve the ranking of a website in search engine results. This process includes creating content that is relevant to the target audience and promoting it through social media.`,
      // `Link Building: I have experience in link building, which involves building backlinks to a website to improve its ranking in search engine results. This process includes creating content that is relevant to the target audience and promoting it through social media.`,
    ],
  },
  /* {
    title: 'Freelancing',
    icon: 'dg-freelancer',
    description:
      'I have worked with clients from all over the world, in a variety of industries and fields.',
    services: [
      `All-in-one Solution: As a freelancer, I can help you with all aspects of your web development project, from the initial design to the final deployment.`,
      `Flexible Scheduling: I am available to work on your project at any time, and I can be available for long or short-term projects.`,
      `Affordable Pricing: My rates are highly competitive, and I am able to offer affordable pricing for all types of projects.`,
      `Quick Turnaround: I am able to work on your project quickly and efficiently, and I can deliver the final product within the agreed-upon timeframe.`,
      `High-Quality Work: I am committed to providing the highest quality work, and I am always willing to go the extra mile to ensure that your project is completed to your satisfaction.`,
      `Dedicated Work: I am dedicated to your project, and I will work hard to ensure that your project is completed on time and within budget.`,
      `Communication: I am always available to answer any questions or concerns that you may have about your project.`,
      `Technical Support: I am always available to provide technical support for your project, and I will be happy to answer any questions that you may have.`,
      `Project Management: I am able to manage your project from start to finish, including the initial design and development phases, and the final deployment.`,
      `Dedicated Support: I am always available to answer any questions or concerns that you may have about your project, and I am always willing to go the extra mile to ensure that your project is completed to your satisfaction.`,
      `Quality Assurance: I am committed to providing the highest quality work, and I am always willing to go the extra mile to ensure that your project is completed to your satisfaction.`,
    ],
  } */
];

const ServicesContent = ({ title, icon, description, services, toggleState, toggleTab, index }) => {
  return (
    <div className={styles['services__content']}>
      <div>
        <i className={clsx(icon, styles['services__icon'])} />
        <h3 className={styles['services__title']}>{title}</h3>
      </div>

      <span className={styles['services__button']} onClick={() => toggleTab(index)}>
        View More
        <i className={clsx('dg-arrow-right', styles['services__button-icon'])} />
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

const ServicesModal = ({ toggleState, services, index, title, description, toggleTab }) => {
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
            <li key={index} className={styles['services__modal-service']}>
              <i className="dg-check-circle" />
              <p className={styles['services__modal-info']}>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
