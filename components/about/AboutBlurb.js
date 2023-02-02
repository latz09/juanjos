import Image from 'next/image';
import wisco from '../../public/images/wisco.jpg';
import NavLink from '../../components/utils/NavLink';
import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutBlurb = () => {
	return (
		<div className='py-16 max-w-4xl mx-auto text-justify grid gap-8'>
			<Blurb />
		</div>
	);
};

export default AboutBlurb;

const Blurb = () => {
	return (
		<motion.div
			className='text-lg md:text-2xl text-dark/70 tracking-wider mx-2'
			initial={{ opacity: 0, scale: 0.8 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1.5 }}
		>
			<span className=' font-bold text-primary'>{`Sweet Juanjo's`}</span> is
			located in Stevens Point WI. We specialize in
			<span className=' font-semibold text-primary'>
				{' '}
				cupcakes, custom cakes, and cookies.{' '}
			</span>{' '}
			All our products are created in our licensed kitchen, and are made to
			order. Contact us to discuss your vision for your next{' '}
			<span className=' font-bold text-primary'> celebration.</span>{' '}
			<div className='text-center lg:text-end text-primary font-bold animate-pulse'>
				<Link href={'/'}>
					<div>Our Story ...</div>
				</Link>
			</div>
		</motion.div>
	);
};
