import { motion } from 'framer-motion';
import NavLink from './NavLink';
const UnderConstruction = () => {
	return (
		<>
			<div className='py-8 text-center grid gap-2'>
				<span>Fully Customizable</span>
				<div className="w-1/3 lg:w-1/5 mx-auto">
					<NavLink to={'/'} title={'Home'} color='blue' />
				</div>
			</div>
			<div className='h-[80vh] grid place-items-center gap-2'>
				<Balls />
			</div>
		</>
	);
};

export default UnderConstruction;

const Balls = () => {
	return (
		<motion.div
			className=' '
			initial={{ opacity: 0.8, scale: 0.8 }}
			animate={{ rotate: 360, opacity: 1, scale: 1.2 }}
			transition={{ repeat: Infinity, duration: 4, repeatType: 'reverse' }}
		>
			<div className=' grid gap-2 '>
				<motion.div
					className='p-3   rounded-full w-full '
					initial={{}}
					animate={{
						x: ['-98%', '98%'],
						backgroundColor: ['#1865B3', '#FFD204', '#1865B3'],
					}}
					transition={{
						yoyo: Infinity,
						ease: 'easeInOut',
						duration: 3,
						// delay: 0.2,
					}}
				/>
				<motion.div
					className='p-3 bg-primary rounded-full w-full '
					initial={{}}
					animate={{
						x: ['98%', '-98%'],

						backgroundColor: ['#FF3A54', '#1865B3', '#FF3A54'],
					}}
					transition={{
						yoyo: Infinity,
						ease: 'easeInOut',
						duration: 3,
						// delay: 0.2,
					}}
				/>
				<motion.div
					className='p-3 bg-primary rounded-full w-full '
					initial={{}}
					animate={{
						x: ['-98%', '98%'],
						backgroundColor: ['#1865B3', '#FFD204', '#1865B3'],
					}}
					transition={{
						yoyo: Infinity,
						ease: 'easeInOut',
						duration: 3,
						// delay: 0.2,
					}}
				/>
			</div>
		</motion.div>
	);
};
