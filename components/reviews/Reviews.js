import { reviews } from '../../data/reviews';
import { AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
const Reviews = () => {
	return (
		<div className='grid lg:grid-cols-2  gap-8 max-w-[90vw] mx-auto place-items-center'>
			{reviews.map((review, index) => (
				<motion.div
					key={review.id}
					className='h-full'
					initial={{ opacity: 0.5, y: 100 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
				>
					<Review review={review.text} name={review.name} />
				</motion.div>
			))}
		</div>
	);
};

export default Reviews;

const Review = ({ review, name }) => {
	let x = [0, 1, 2, 3, 4];
	return (
		<div className='grid gap-2 mx-auto shadow-lg p-8 h-full hover:scale-105 hover:shadow-xl transition duration-700 '>
			<h2 className='text-lg lg:text-3xl text-secondary-dark'>{name}</h2>
			<div className='flex space-x-2'>
				{x.map((star, index) => (
					<span key={star} className='lg:text-xl text-secondary-dark'>
						{' '}
						<motion.div
							initial={{ opacity: 0.7 }}
							animate={{ opacity: 1 }}
							transition={{
								duration: 0.8,
								repeat: Infinity,
								repeatType: 'mirror',
								ease: 'easeInOut',
							}}
						>
							<AiFillStar />
						</motion.div>
					</span>
				))}
			</div>
			<h1 className='lg:text-xl text-justify my-2 lg:my-4 text-dark/80'>{review}</h1>
		</div>
	);
};
