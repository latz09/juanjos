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
		<div className='grid gap-8 max-w-7xl mx-auto my-8'>
			<ToggleMenu toggle={toggle} setToggle={setToggle} />

			
			{toggle === 'cakes' && <Cakes data={ filterData('cakes')} />}
			{toggle === 'cupcakes' && <Cupcakes data={filterData('cupcakes')} />}
			{toggle === 'cookies' && <Cookies data={filterData('cookies')} />}
			{toggle === 'treats' && <Treats data={filterData('treats')} />}
		</div>
	);
};

export default Menu;
