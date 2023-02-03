import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ImageDisplay from './menu-utils/ImageDisplay';

const Treats = ({ data }) => {
	const [treatCategory, setTreatCategory] = useState('Brownies');

	return (
		<div className='grid gap-8'>
			<TreatsToggle
				subCategories={data[0].subCategories}
				setTreatCategory={setTreatCategory}
				treatCategory={treatCategory}
			/>
		
				<TreatsDisplay
					data={data[0].subCategories.filter(
						(category) => category.category === treatCategory
					)}
				/>
			
		</div>
	);
};

export default Treats;

const TreatsToggle = ({ subCategories, setTreatCategory, treatCategory }) => {
	return (
		<div className='flex justify-evenly lg:text-lg '>
			{subCategories.map((item, index) => (
				<button
					onClick={() => setTreatCategory(item.category)}
					key={index}
					className={`font-bold tracking-wide transition duration-700 ${
						treatCategory === item.category
							? 'scale-110 font-bold border-b-2 border-secondary-dark'
							: 'opacity-60 hover:opacity-100 '
					}`}
				>
					{item.category}
				</button>
			))}
		</div>
	);
};

const TreatsDisplay = ({ data }) => {
	return (
		<div>
			{data.map((item, index) => (
				<div key={index}>
					<AnimatePresence mode='sync'>
						<motion.div
							key={index}
							className='grid lg:grid-cols-2 place-items-center '
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 3 }}
						>
							<div className='grid gap-1 lg:gap-4 mb-8'>
								{item.flavors.map((flavor, index) => (
									<div key={index} className="lg:text-2xl tracking-wider font-semibold text-primary">{flavor}</div>
								))}
							</div>
							<div className="">
								<ImageDisplay image={item.images[0]} />
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};
