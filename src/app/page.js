import Header from './sections/hero-section';
import Whyaielm from './sections/why-aielm';
import HowItWorks from './sections/how-it-works';
import Industries from './sections/industries';
import Casestudy from './sections/case-study';
import Contact from './sections/contact';
import SolutionSection from './sections/solution-section';
import AboutSection from './sections/about-section';

const Page = () => {
  return (
    <div>
      <Header />
      <Whyaielm />
      <HowItWorks />
      <Industries />
      <Casestudy />
      <Contact />
      <SolutionSection />
      <AboutSection />
    </div>
  );
};

export default Page;
