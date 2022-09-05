import Image from 'next/image';
import logo from '../../../public/images/image.png';

const CustomHero = () => {
	return (
		<div className='relative w-full h-[60vh]'>
			<Image
				src={logo}
				alt=''
				priority='true'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				placeholder='blur'
			/>

			<div className='relative flex justify-center items-center h-full bg-black bg-opacity-40'>
                {/* Content under here */}
				<div className='text-center max-w-3xl mx-auto bg-gray-200 px-12 py-20 bg-opacity-90 '>
					<h1 className='text-4xl mt-12'>Starting Template</h1>
					<div className='grid gap-3 mt-8 text-3xl justify-items-start'>
                        <li>npm install</li>
						<li className='text-customColor font-bold'>Update Color Scheme</li>
						<li className='font-custom tracking-wider italic'>
							Choose and update Font
						</li>
                        <li>Customize Navbar</li>
                        <li>Do landing hero</li>
					</div>
				</div>
			</div>
		</div>
	);
};
export default CustomHero;
