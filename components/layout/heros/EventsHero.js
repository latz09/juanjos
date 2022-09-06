import Image from 'next/image';
import hero from '../../../public/images/events/display.jpg';
import NavLink from '../../utils/NavLink';

const EventsHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-70 px-1'>
				<div className='text-center mt-12 text-white text-2xl lg:text-3xl tracking-widest grid gap-4'>
					<h1 className='text-4xl lg:text-6xl text-white font-semibold '>
						Special Events
					</h1>
					<p className='text-xl  max-w-4xl '>
						Contact us for your next special event!
					</p>
					<div className='mt-8 text-2xl'>
						<NavLink to={'/special-events'} title={'Learn More'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default EventsHero;