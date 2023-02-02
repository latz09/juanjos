import Image from 'next/image';
import photo from '../../public/images/trebz.jpg';
import NavLink from '../utils/NavLink';
import { motion } from 'framer-motion';

const AboutKatie = () => {
	return (
		<div className='grid lg:grid-cols-3 gap-8 lg:gap-16 max-w-7xl mx-auto  w-full   '>
			<AboutPhoto />

			<KatieAbout />
		</div>
	);
};

export default AboutKatie;

const KatieAbout = () => {
	return (
		<div className='grid gap-6 lg:gap-12  lg:col-span-2 mx-2 lg:mx-8'>
			<div className='text-3xl text-center lg:text-start  lg:text-6xl tracking-wider font-light text-dark/80 '>
				Hi!, I&apos;m Katie Jo, the founder of{' '}
				<span className='font-semibold text-primary'> Sweet Juanjo&apos;s</span>
				!
			</div>
			<div className='grid gap-6 text-lg lg:text-2xl text-dark/90 lg:ml-8 text-justify'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
					viverra adipiscing at in tellus integer.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
					viverra adipiscing at in tellus integer. Sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
					magna aliqua. Risus viverra adipiscing at in tellus integer.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus
					viverra adipiscing at in tellus integer.
				</p>
				<div className='lg:w-1/2 mx-auto'>
					<NavLink to={'/ '} title={'Read more about our story'} color='blue' />
				</div>
			</div>
		</div>
	);
};

const AboutPhoto = () => {
	return (
		<div className='grid gap-4 text-center lg:text-start'>
			<div className='grid gap-2'>
				<span className='text-6xl text-secondary-dark'>Meet Jo</span>
				<span className='text-3xl text-primary trackingwidest'>
					(The &apos;Jo&apos; in Juanjo&apos;s)
				</span>
			</div>

			<motion.div
				className='w-1/2 mx-auto lg:w-full grid shadow-lg grayscale hover:grayscale-0 transition duration-700'
				initial={{ scale: 0.9, opacity: 0.5 }}
				whileInView={{ scale: 1, opacity: 1 }}
				transition={{ duration: 1.2 }}
			>
				<Image src={photo} alt='' />
			</motion.div>
		</div>
	);
};
