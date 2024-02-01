import { FooterWithLogoBelow } from '#blog-frontend/components/FooterWithLogoBelow/App';
import { HeroImage } from '#blog-frontend/components/HeroImage';
import Latest from '#blog-frontend/components/Latest';
import New from '#blog-frontend/components/New';
import Recommendations from '#blog-frontend/components/Recommendations';
import TimelessGems from '#blog-frontend/components/TimelessGems';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroImage />
      <Recommendations />
      <Latest />
      <New />
      <TimelessGems />
      <FooterWithLogoBelow />
    </>
  );
}
