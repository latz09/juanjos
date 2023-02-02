import Image from 'next/image';
import hero from '../../../public/images/cupcakes/oh-baby.jpg';
import NavLink from '../../utils/NavLink';

const CakesHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='right'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-opacity-60 '>
				<div className='text-center  text-white text-2xl lg:text-3xl tracking-widest grid gap-4'>
					<h1 className='text-5xl lg:text-7xl  font-semibold '>{`Cupcakes & Specialty Cakes`}</h1>
					<p className='text-xl lg:text-left max-w-4xl '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
						quis enim lobortis scelerisque fermentum.
					</p>
					<div className='mt-8 text-2xl'>
						<NavLink to={'/our-menu'} title={'Flavors'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CakesHero;
