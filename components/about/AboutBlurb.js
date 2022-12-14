import Image from 'next/image';
import wisco from '../../public/images/wisco.jpg';
import NavLink from '../../components/utils/NavLink';

const AboutBlurb = () => {
	return (
		<div>
			<div className='grid place-items-center py-9 px-3 lg:h-[50vh] max-w-4xl mx-auto text-black '>
				<div className='grid gap-3 place-items-center'>
					<div className='text-lg md:text-xl tracking-wider leading-7 md:leading-8 text-center md:text-justify text-gray-700'>
						<span className='text-juanjosTeal font-bold'>{`Sweet Juanjo's`}</span>{' '}
						is located in Stevens Point WI. We specialize in
						<span className='text-black font-semibold'>
							{' '}
							cupcakes, custom cakes, and cookies.{' '}
						</span>{' '}
						All our products are created in our licensed kitchen, and are made
						to order. Contact us to discuss your vision for your next{' '}
						<span className='text-juanjosTeal font-bold'>
							{' '}
							celebration.
						</span>{' '}
					</div>
					<div className='text-white tracking-widest py-4 text-xl'>
						<NavLink to={'/about-us'} title={'About us!'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutBlurb;
