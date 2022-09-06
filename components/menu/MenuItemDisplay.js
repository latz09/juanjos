import Image from 'next/image';
import Flavors from './Flavors';

const MenuItemDisplay = ({ menuData }) => {
	return (
		<div className='my-3 md:my-7 max-w-7xl mx-auto text-juanjosTeal'>
			{menuData.map((item) => (
				<div key={item.toggleName} className='grid gap-8'>
					<div className='grid md:grid-cols-2 place-items-center'>
						<div className=''>
							<Image src={item.image} alt={item.category} layout='intrinsic'/>
						</div>
						<div className="px-6 grid h-full gap-4">
							<h1 className='text-center text-3xl md:text-5xl font-semibold tracking-widest text-gray-600'>
								{item.category}
							</h1>                           
                            <div>
                                <Flavors options={item.options}/>
                            </div>
                            
						</div>
                        
					</div>
				</div>
			))}
		</div>
	);
};

export default MenuItemDisplay;
