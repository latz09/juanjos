import { services } from '../data/services';
import AboutBlurb from '../components/about/AboutBlurb';
import CakesHero from '../components/layout/heros/CakesHero';
import LandingHero from '../components/layout/heros/LandingHero';
import AllServices from '../components/services/AllServices';
import CookieHero from '../components/layout/heros/CookieHero';
import EventsHero from '../components/layout/heros/EventsHero';
import CelebrateDisplay from '../components/celebrate/celebrateDisplay';

export default function Home() {
	return (
		<div className="">
			<LandingHero />
			<AboutBlurb />
			<CakesHero />
			<AllServices services={services}/>
			<CookieHero />
			<CelebrateDisplay />
			<EventsHero />
		</div>
	);
}
