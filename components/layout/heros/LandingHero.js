import Image from 'next/image';
import hero from '../../../public/images/cupcakes/3cupcakes.jpg';
import NavLink from '../../utils/NavLink';

const LandingHero = () => {
	return (
		<div className='relative w-full h-[90vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50'>
				<div className='text-center mt-12 text-white text-2xl lg:text-3xl tracking-widest grid gap-4 px-1'>
					<h1 className='text-6xl lg:text-7xl'>{`Sweet Juanjo's`}</h1>
					<p className='text-lg font max-w-4xl '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						
					</p>
					<div className='mt-8 text-2xl'>
						<NavLink to={'/contact-us'} title={'contact us'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default LandingHero;
