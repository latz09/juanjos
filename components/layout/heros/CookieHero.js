import Image from 'next/image';
import hero from '../../../public/images/cookies/cookies.jpg';
import NavLink from '../../utils/NavLink';

const CookieHero = () => {
	return (
		<div className='relative w-full h-[80vh]'>
			<Image
				src={hero}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-50 px-3'>
				<div className='text-center mt-12 text-white text-2xl lg:text-3xl tracking-widest grid gap-4'>
					<h1 className='text-5xl lg:text-6xl text-white font-semibold '>
						Did someone say <span className='text-juanjosTeal text-6xl lg:text-7xl'>cookies!</span>
					</h1>
					<p className='text-xl  max-w-4xl '>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</p>
					<div className='mt-8 text-2xl'>
						<NavLink to={'/our-menu'} title={'Options'} />
					</div>
				</div>
			</div>
		</div>
	);
};
export default CookieHero;
