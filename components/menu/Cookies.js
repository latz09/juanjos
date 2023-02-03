import { motion, AnimatePresence } from 'framer-motion';
import CakeFlavors from './menu-utils/CakeFlavors';
import ImageDisplay from './menu-utils/ImageDisplay';
import MenuHeading from './menu-utils/MenuHeading';

const Cookies = ({ data }) => {
	return (
		<>
			{data.map((item, index) => (
				<div key={index}>
					<AnimatePresence mode='sync'>
						<motion.div
							className='grid gap-8'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							exit={{ opacity: 0, transition: { duration: 1 } }}
						>
							<MenuHeading title={'Cookie flavors'} />
							<div className='grid lg:grid-cols-3 gap-8 lg:gap-0 '>
								<CookieFlavors flavors={item.flavors} />

								<div className='lg:col-span-2'>
									<ImageDisplay image={item.menuImage} />
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			))}
		</>
	);
};

export default Cookies;

const CookieFlavors = ({ flavors }) => {
	return (
		<motion.div
			className=' text-dark  grid place-items-center'
            initial={{ rotateY: 90}}
			// whileInView={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
		>
			<div className='grid gap-2 tracking-wider font-semibold text-center lg:text-right text-lg'>
				{flavors.map((flavor, index) => (
					<motion.div key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: .3, duration: 1.5 }}
                    
                    >{flavor}</motion.div>
				))}
			</div>
		</motion.div>
	);
};
