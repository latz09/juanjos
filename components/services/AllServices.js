import Link from 'next/link';
import NavLink from '../utils/NavLink';
import ServicesImage from './ServiceImage';

const AllServices = ({ services }) => {
	return (
		<>
			<div className='pt-8 tracking-wider bg-gray-50 grid gap-4 shadow-lg'>
				<div className='max-w-7xl mx-auto flex flex-wrap justify-center justify-items-center'>
					{services.map((service) => (
						<div key={service.category} className='p-2'>
							<ServicesImage title={service.category} image={service.image} />
						</div>
					))}
				</div>
			
			</div>
            <div className='text-center bg-gray-50 py-8 border-b border-juanjosTeal border-opacity-40'>
					<Link href={'/'}>
						<a className='font-bold bg-juanjosTeal p-3 text-2xl text-gray-50 tracking-widest shadow-lg  hover:bg-opacity-80 hover:shadow-2xl transition duration-700'>
							Menu Options
						</a>
					</Link>
				</div>
		</>
	);
};

export default AllServices;
