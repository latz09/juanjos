import { services } from '../data/services';
import AboutBlurb from '../components/about/AboutBlurb';
import CakesHero from '../components/layout/heros/CakesHero';
import LandingHero from '../components/layout/heros/LandingHero';
import AllServices from '../components/services/AllServices';
import CookieHero from '../components/layout/heros/CookieHero';

export default function Home() {
	return (
		<div className="">
			<LandingHero />
			<AboutBlurb />
			<CakesHero />
			<AllServices services={services}/>
			<CookieHero />
		</div>
	);
}
