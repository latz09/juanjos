import Image from 'next/image';
import Flavors from './Flavors';

const MenuItemDisplay = ({ menuData }) => {
	return (
		<div className='py-8 '>
			{menuData.map((item) => (
				<div
					key={item.toggleName}
					className='grid md:grid-cols-3 place-items-center '
				>
					<div className=''>
						<Image
							src={item.menuImage}
							alt={item.category}
							layout='intrinsic'
						/>
					</div>
					<div className=' flex flex-col gap-8  col-span-2'>
						<div className='text-center text-3xl md:text-5xl font-semibold tracking-widest  text-secondary-dark/50'>
							{item.category}
						</div>
						<Flavors options={item.options} />
					</div>
				</div>
			))}
		</div>
	);
};

export default MenuItemDisplay;
