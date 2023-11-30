import { FaCookieBite } from 'react-icons/fa';
import { GiCupcake } from 'react-icons/gi';
import { MdCake } from 'react-icons/md';
import { TbCandy } from 'react-icons/tb';
import { motion } from 'framer-motion';
import Link from 'next/link';

const MenuPreview = ({ data }) => {
	return (
		<div className='grid gap-8 '>
			<MenuHeading />
			<div className='grid sm:grid-cols-2  xl:grid-cols-4 gap-8 place-items-center  pt-12 pb-24 px-8'>
				{data.map((item, index) => (
					<div
						key={index}
						className='w-full h-full shadow-lg shadow-primary/50 cursor-pointer hover:shadow-xl scale-95 hover:scale-100 transition duration-700'
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
			<span className='text-center text-3xl md:text-4xl lg:text-5xl'>
				Simple. Classic. Delicious
			</span>
		</div>
	);
};

const MenuCard = ({ imageToUse, title }) => {
	return (
		<Link href={'/our-menu'}>
			<div className='grid gap-8 place-items-center h-full text-lg  lg:text-2xl font-old p-8 w-full [&>*]:p-4'>
				<ImageToUse image={imageToUse} />
				<div className=' hover:scale-95  hover:bg-primary/70 transition duration-700 font-bold py-2 px-4 h-full rounded   text-center '>
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
				className='text-7xl lg:text-9xl text-dark  '
				initial={{ scale: 0.93 }}
				animate={{ scale: 1 }}
				transition={{
					duration: 1.4,
					delay: 1.5,
					repeat: Infinity,
					repeatType: 'mirror',
				}}
			>
				{image === 'cakes' && <MdCake  />}
				{image === 'cupcakes' && <GiCupcake className="text-primary"/>}
				{image === 'cookies' && <FaCookieBite />}
				{image === 'candy' && <TbCandy className="text-primary"/>}
			</motion.div>
		</motion.div>
	);
};
