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
	const [toggle, setToggle] = useState('cupcakes');
	

	const filterData = (x) => {
		const filteredData = services.filter((item) => item.toggleName === x);
		return filteredData;
	};
	
	return (
		<div className='grid gap-16 max-w-7xl mx-auto py-4 lg:py-8'>
			<div className="text-center text-lg lg:text-2xl opacity-60 ">menu</div>
			<ToggleMenu toggle={toggle} setToggle={setToggle} />

			
			{toggle === 'cakes' && <Cakes data={ filterData('cakes')} />}
			{toggle === 'cupcakes' && <Cupcakes data={filterData('cupcakes')} />}
			{toggle === 'cookies' && <Cookies data={filterData('cookies')} />}
			{toggle === 'treats' && <Treats data={filterData('treats')} />}
		</div>
	);
};

export default Menu;
