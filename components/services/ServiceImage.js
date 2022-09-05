import Image from 'next/image';

const ServicesImage = ({ title, image }) => {
	return (
		<div>
			<div className='relative text-center grid shadow hover:shadow-2xl transition duration-1000'>
				<div className='grid items-center'>
					<Image src={image} alt={title} height={260} width={220} layout='intrinsic'/>
				</div>
				<div className='absolute w-full h-full bg-black bg-opacity-40 px-1 md:px-2 md:py-3 hover:bg-opacity-0 text-white hover:text-opacity-0 transition duration-1000 grid items-center '>
					<h1 className=' text-2xl md:text-3xl  tracking-widest '>{title}</h1>
				</div>
			</div>
		</div>
	);
};

export default ServicesImage;
