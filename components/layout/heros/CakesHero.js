import Image from 'next/image';
import hero from '../../../public/images/cupcakes/oh-baby.jpg';
import NavLink from '../../utils/NavLink';

const CakesHero = () => {
	return (
		<div className='relative w-full h-[80vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='right'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-80 px-3'>
				<div className='text-center mt-12 text-white text-2xl lg:text-3xl tracking-widest grid gap-4'>
					<h1 className='text-5xl lg:text-7xl text-juanjosTeal font-semibold '>{`Cupcakes & Specialty Cakes`}</h1>
					<p className='text-xl lg:text-left max-w-4xl '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
						quis enim lobortis scelerisque fermentum.
					</p>
					<div className='mt-8 text-2xl'>
						<NavLink to={'/contact-us'} title={'Flavors'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CakesHero;
