import { FaCookieBite } from 'react-icons/fa';
import { GiCupcake } from 'react-icons/gi';
import { MdCake } from 'react-icons/md';
import { TbCandy } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MenuPreview = ({ data }) => {




 

	return (
		<div className='grid gap-8 bg-gradient-to-b from-secondary-light/5 via-secondary-dark/20 to-secondary-dark/30'>
			<MenuHeading />
			<div className='grid sm:grid-cols-2  xl:grid-cols-4 gap-8 place-items-center  pt-12 pb-24 px-8'>
				{data.map((item, index) => (
					<div
						key={index}
						className='w-full h-full bg-secondary-light shadow-lg cursor-pointer hover:shadow-xl scale-95 hover:scale-100 transition duration-700'
					>
						<MenuCard title={item.category} imageToUse={item.toggleName} />
					</div>
				))}
			</div>
		</div>
	);
};

export default MenuPreview;

const MenuHeading = () => {
	return (
		<div className='grid gap-4 text-center'>
			<span className='text-lg lg:text-3xl text-dark/90'>Our Menu</span>
			<span className='text-center text-3xl md:text-4xl lg:text-7xl tracking-wider text-primary'>
				Simple. Classic. Delicious
			</span>
		</div>
	);
};

const MenuCard = ({ imageToUse, title }) => {
	return (
		<Link href={'/our-menu'}>
			<div className='grid gap-8 place-items-center text-lg  lg:text-2xl font-old bg-secondary-light p-8 w-full [&>*]:p-4'>
				<ImageToUse image={imageToUse} />
				<div className='bg-primary hover:scale-95  hover:bg-primary/70 transition duration-700  text-light py-2 px-4 h-full rounded w-2/3 sm:w-full lg:w-2/3  text-center'>
					{title}
				</div>
			</div>
		</Link>
	);
};

const ImageToUse = ({ image }) => {
	return (
		<motion.div
			initial={{ opacity: 0.7, scale: 0.7 }}
			whileInView={{ opacity: 1, scale: 1 }}
			transition={{ duration: 1.1, ease: 'easeInOut' }}
		>
			<motion.div
				className='text-7xl lg:text-9xl  '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1.4,
					delay: 1.5,
					repeat: Infinity,
					repeatType: 'mirror',
				}}
			>
				{image === 'cakes' && <MdCake />}
				{image === 'cupcakes' && <GiCupcake />}
				{image === 'cookies' && <FaCookieBite />}
				{image === 'candy' && <TbCandy />}
			</motion.div>
		</motion.div>
	);
};
