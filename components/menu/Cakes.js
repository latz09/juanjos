import { motion, AnimatePresence } from "framer-motion";
import CakeFlavors from "./menu-utils/CakeFlavors";
import ImageDisplay from "./menu-utils/ImageDisplay";
import MenuHeading from "./menu-utils/MenuHeading";


const Cakes = ({data}) => {


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
						<MenuHeading title={'Specialty Cake flavors'} />
						<div className='grid grid-cols-3 '>
							<div className='col-span-2'>
								<ImageDisplay image={item.menuImage} />
							</div>
							<div className=''>
								<CakeFlavors cakeFlavors={item.options} />
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</div>
		))}
	</>
	);
};

export default Cakes;


