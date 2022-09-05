import Image from 'next/image';
import wisco from '../../public/images/wisco.jpg'


const AboutBlurb = () => {
	return (
		<div>
			<div className='grid lg:grid-cols-2 place-items-center py-9 px-3 lg:h-[50vh] max-w-7xl mx-auto text-black'>
				<div className=''>
                    <Image src={wisco} alt='' height={300} width={300} layout='intrinsic' />
                </div>
				<div className='text-xl tracking-wider leading-8 text-justify text-gray-700'>
					<span className='text-juanjosTeal font-bold'>{`Sweet Juanjo's`}</span>{' '}
					is located in Stevens Point WI. We specialize in
					<span className='text-black font-semibold'>
						{' '}
						cupcakes, custom cakes, and cookies.{' '}
					</span>{' '}
					All our products are created in our licensed kitchen, and are made to
					order. Contact us to discuss your vision for your next{' '}
					<span className='text-juanjosTeal font-bold'> celebration.</span>{' '}
				</div>
			</div>
		</div>
	);
};

export default AboutBlurb;
