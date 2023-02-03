import { motion } from 'framer-motion';
const CakeFlavors = ({ cakeFlavors }) => {
	return (
		<div className='flex justify-around lg:grid grid-cols-2 lg:items-center'>
			{cakeFlavors.map((option, index) => (
				<div key={index} className='flex flex-col gap-2 lg:gap-4'>
					<div className='text-xl lg:text-2xl text-secondary-dark'>
						{option.type}
					</div>
					<div className='grid gap-1 lg:gap-2 place-items-center mb-8 lg:mb-0'>
						{option.flavors.map((flavor, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.3 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.2 * index, duration: 0.8 }}
							>
								{flavor}
							</motion.div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default CakeFlavors;
