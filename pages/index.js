import { services, menuPreview } from '../data/services';
import AboutBlurb from '../components/about/AboutBlurb';
import CakesHero from '../components/layout/heros/CakesHero';
import LandingHero from '../components/layout/heros/LandingHero';
import AllServices from '../components/services/AllServices';
import CookieHero from '../components/layout/heros/CookieHero';
import EventsHero from '../components/layout/heros/EventsHero';
import CelebrateDisplay from '../components/celebrate/celebrateDisplay';
import MenuPreview from '../components/menu/MenuPreview';
import AboutKatie from '../components/about/AboutKatie';
import Reviews from '../components/reviews/Reviews';

export default function Home() {
	return (
		<div className='grid gap-24 pb-44 bg-light'>
			<LandingHero />
			<MenuPreview data={menuPreview} />
			<AboutBlurb />
			<EventsHero />
			<Reviews />
			<CookieHero />
			<AboutKatie />

			{/* <CakesHero /> */}
			{/* <AllServices services={services}/> */}
			{/* <CelebrateDisplay /> */}
		</div>
	);
}
