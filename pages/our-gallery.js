import Image from 'next/image';
import { galleryImages } from '../data/galleryImages';

const Gallery = () => {
	return (
		<>
        <h1 className="text-center py-8 text-5xl tracking-widest text-juanjosTeal ">Inspiration</h1>
			<div className='max-w-7xl mx-auto grid md:grid-cols-3 place-items-center md:gap-4 '>
				{galleryImages.map((image) => (
					<div
						key={image.id}
						className='grid items-center  scale-90 md:scale-75 shadow hover:shadow-xl hover:scale-110 transition duration-1000'
					>
						<Image src={image.image} alt='' layout='intrinsic' />
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;
