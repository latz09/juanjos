import Image from 'next/image';
import image1 from '../../public/images/events/celebrate/monsters.jpg';
import image2 from '../../public/images/events/celebrate/pig.jpg';
import image3 from '../../public/images/events/celebrate/reindeer.jpg';
import image4 from '../../public/images/events/celebrate/skates.jpg';
import NavLink from '../utils/NavLink';

const CelebrateDisplay = () => {
	const images = [
		{
			id: 1,
			image: image1,
		},
		{
			id: 2,
			image: image2,
		},
		{
			id: 3,
			image: image3,
		},
		{
			id: 4,
			image: image4,
		},
	];

	return (
		<div className='bg-juanjosTeal bg-opacity-60 py-12 tracking-widest text-white'>
			<div className='max-w-7xl mx-auto '>
				<h1 className='py-8 text-6xl  text-center'>
					Every day can be a Holiday
				</h1>

				<div className='grid grid-cols-2 gap-2 px-1 lg:grid-cols-4 justify-center'>
					{images.map((image) => (
						<div key={image.id}>
							<div className='shadow-lg grid items-center'>
								<Image src={image.image} alt='' width={400} height={300} />
							</div>
						</div>
					))}
				</div>
				<div className='grid gap-4 text-center'>
					<p className='text-3xl my-8'>We can help you celebrate anything!</p>
					<div className="text-xl text-white">
						<NavLink to={'/our-gallery'} title={'Our Gallery'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CelebrateDisplay;
