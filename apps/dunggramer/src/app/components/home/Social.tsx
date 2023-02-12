import {
  UilFacebookF,
  UilGithubAlt,
  UilLinkedinAlt,
} from '@iconscout/react-unicons';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="//github.com/DungGramer"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <UilGithubAlt />
      </a>
      <a
        href="//linkedin.com/in/dunggramer"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <UilLinkedinAlt />
      </a>
      <a
        href="//facebook.com/DungGramer"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <UilFacebookF />
      </a>
    </div>
  );
};

export default Social;
