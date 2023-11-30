import Image from 'next/image';
import hero from '../../../public/images/events/display.jpg';
import NavLink from '../../utils/NavLink';

const EventsHero = () => {
	return (
		<div className='relative w-full h-[60vh] lg:h-[80vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative grid items-center h-full text-light bg-dark/80 '>
				<div className='grid place-items-center gap-2 tracking-wider'>
					<div className='grid text-center gap-2 '>
						<div className='text-3xl lg:text-7xl text-secondary-dark'>
							Special Events
						</div>
						<div className='text-xl lg:text-4xl '>
							From birthdays to weddings -- We can help you{' '}
							<span className='text-secondary-dark/80'>
								{' '}
								celebrate anything!
							</span>
						</div>
					</div>
					<div className='text-base lg:text-2xl my-4 '>
						Contact us for your next special event!
					</div>
					<div>
						<NavLink to={'/special-events'} title={'learn more'} color='blue' />
					</div>
				</div>
			</div>
		</div>
	);
};
export default EventsHero;
