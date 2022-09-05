import AboutBlurb from '../components/about/AboutBlurb';
import CakesHero from '../components/layout/heros/CakesHero';
import LandingHero from '../components/layout/heros/LandingHero';
import CustomHero from '../components/layout/heros/LandingHero';

export default function Home() {
	return (
		<div className="">
			<LandingHero />
			<AboutBlurb />
			<CakesHero />
		</div>
	);
}
