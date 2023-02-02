import { motion } from 'framer-motion';

const MenuHeading = ({ title }) => {
	return (
		<>
			<motion.div
				className='text-4xl text-primary tracking-widest'
				initial={{ x: 40, opacity: 0.6 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
			>
				{title}
			</motion.div>
		</>
	);
};

export default MenuHeading;
