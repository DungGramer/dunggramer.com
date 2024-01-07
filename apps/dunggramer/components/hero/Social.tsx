import styles from './Social.module.scss';

const Social = () => {
  return (
    <div className={styles['home__social']}>
      {SocialData.map((social, index) => (
        <SocialChild key={index} {...social} />
      ))}
    </div>
  );
};

const SocialData = [
  {
    name: 'Github',
    link: 'https://github.com/DungGramer',
    icon: 'dg-github-alt',
  },
  {
    name: 'Linkedin',
    link: 'https://linkedin.com/in/dunggramer',
    icon: 'dg-linkedin-alt',
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/DungGramer',
    icon: 'dg-facebook-f',
  },
];

const SocialChild = ({ link, icon }) => {
  return (
    <a href={link} className={styles['home__social-icon']} target="_blank" rel="noreferrer">
      <i className={icon} />
    </a>
  );
};

export default Social;
