import Image from 'next/image';
import hero from '../../../public/images/cookies/choc-dipped-3.png';
import NavLink from '../../utils/NavLink';
import { motion } from 'framer-motion';
const CookieHero = () => {
	return (
		<div className='grid lg:grid-cols-3 place-items-center  gap-8 max-w-7xl mx-auto py-16'>
			<motion.div
				className='w-1/4 lg:w-1/2 mx-auto '
				initial={{ scale: 0.95 }}
				animate={{ scale: 1 }}
				transition={{
					delay: 0.5,
					duration: 2,
					ease: 'easeInOut',
					repeat: Infinity,
					repeatType: 'mirror',
				}}
			>
				<Image
					src={hero}
					alt=''
					priority='true'
					layout=''
					objectFit='cover'
					objectPosition='cente'
					placeholder='blur'
				/>
			</motion.div>
			<div className='lg:col-span-2 text-xl lg:text-3xl text-center grid gap-8 text-secondary-dark tracking-wider'>
				<h1 className='text-4xl lg:text-6xl font-semibold'>
					Did someone say <span className=' text-primary'>cookies!?</span>
				</h1>

				{/* <NavLink to={'/our-menu'} title={'Flavor Menu Here!'} /> */}
			</div>
		</div>
	);
};
export default CookieHero;
