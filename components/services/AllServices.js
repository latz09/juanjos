import Link from 'next/link';
import NavLink from '../utils/NavLink';
import ServicesImage from './ServiceImage';

const AllServices = ({ services }) => {
	return (
		<>
			<div className='py-12 tracking-wider bg-gray-50 grid gap-4 shadow-lg'>
				<div className='max-w-7xl mx-auto grid grid-cols-2 sm:flex flex-wrap justify-center justify-items-center'>
					{services.map((service) => (
						<div key={service.category} className='p-2'>
							<ServicesImage title={service.category} image={service.image} />
						</div>
					))}
				</div>
			</div>
			
		</>
	);
};

export default AllServices;
