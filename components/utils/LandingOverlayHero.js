import { motion } from 'framer-motion';
import Image from 'next/image';
import image from '../../public/images/cupcakes/3-in-line.jpg';
import { GiCupcake } from 'react-icons/gi';
import NavLink from './NavLink';

const LandingOverlayHero = () => {
	return (
		<div className='lg:hdden relative w-full h-[70vh]'>
			<Image
				src={image}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-gradient-to-r from-primary/60 via-primary/30 to-secondary-dark/20'>
				<TextHero />
			</div>
		</div>
	);
};

export default LandingOverlayHero;

const TextHero = () => {
	return (
		<div className='grid place-items-center text-light'>
			<div className='grid gap-12 lg:grid-cols-2 place-items-center'>
				<div className='grid gap-4 place-items-center'>
					<h1 className='text-5xl lg:text-7xl  -rotate-2 font-semibold '>
						Sweet Juanjo<span className='text-dark opacity-70'>&apos;</span>s
					</h1>
					<div className='text-lg lg:text-2xl'>
						<div className='flex items-center '>
							Your Vision Made To Order{' '}
							<span className='mx-2 text-5xl text-dark '>
								<GiCupcake />
							</span>{' '}
						</div>
					</div>
				</div>
				<HeroNavLinks />
			</div>
		</div>
	);
};

const HeroNavLinks = () => {
	return (
		<div className='flex  space-x-8 w-full mx-2'>
			<NavLink to={'/our-menu'} title='Menu' color='blue'/>
			<NavLink to={'/'} title='Contact'  />
		</div>
	);
};
