import { useState, useEffect } from 'react';
import Cakes from '../components/menu/Cakes';
import Cookies from '../components/menu/Cookies';
import Cupcakes from '../components/menu/Cupcakes';
import MenuItemDisplay from '../components/menu/MenuItemDisplay';
import ToggleMenu from '../components/menu/ToggleMenu';
import Treats from '../components/menu/Treats';
import NavLink from '../components/utils/NavLink';
import { services } from '../data/services';

const Menu = () => {
	const [toggle, setToggle] = useState('cakes');
	

	const filterData = (x) => {
		const filteredData = services.filter((item) => item.toggleName === x);
		return filteredData;
	};
	
	return (
		<div className='grid gap-4 lg:gap-8 max-w-7xl mx-auto my-4 lg:my-8'>
			<div className="text-center text-lg lg:text-2xl">menu</div>
			<ToggleMenu toggle={toggle} setToggle={setToggle} />

			
			{toggle === 'cakes' && <Cakes data={ filterData('cakes')} />}
			{toggle === 'cupcakes' && <Cupcakes data={filterData('cupcakes')} />}
			{toggle === 'cookies' && <Cookies data={filterData('cookies')} />}
			{toggle === 'treats' && <Treats data={filterData('treats')} />}
		</div>
	);
};

export default Menu;
