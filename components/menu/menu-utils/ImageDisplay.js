import { motion } from 'framer-motion';
import Image from 'next/image';
const ImageDisplay = ({ image }) => {
	return (
		<motion.div
			className='w-2/3 mx-auto  grid place-items-center shadow-lg'
			initial={{ scale: 0.7 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 1 }}
		>
			<Image src={image} alt='' />
		</motion.div>
	);
};

export default ImageDisplay;
