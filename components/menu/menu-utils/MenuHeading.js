import { motion } from 'framer-motion';

const MenuHeading = ({ title }) => {
	return (
		<>
			<motion.div
				className='text-3xl lg:text-4xl text-primary tracking-widest text-center w-full lg:tet-start lg:py-2'
				initial={{ y: -20, opacity: 0.4 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 1.4 }}
			>
				{title}
			</motion.div>
		</>
	);
};

export default MenuHeading;
