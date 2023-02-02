import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Flavors from './Flavors';

const MenuItemDisplay = ({ menuData }) => {
	console.log(menuData)
	return (
		<div className=''>
			{menuData.map((item) => (
				<div key={item.toggleName}>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							exit={{ opacity: 0, transition: { duration: 1 } }}
						>
							<div className='grid grid-cols-3 '>
								{/* <Image
									src={item.menuImage}
									alt={item.category}
									layout='intrinsic'
								/>

								<Flavors options={item.options} /> */}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			))}
		</div>
	);
};

export default MenuItemDisplay;
