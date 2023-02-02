import { useState, useEffect } from 'react';
import MenuItemDisplay from '../components/menu/MenuItemDisplay';
import ToggleMenu from '../components/menu/ToggleMenu';
import NavLink from '../components/utils/NavLink';
import { services } from '../data/services';

const Menu = () => {
	const [toggle, setToggle] = useState('cupcakes');
	const [data, setData] = useState(toggle);

	useEffect(() => {
		setData(toggle);
	}, [toggle]);
	return (
		<div className='grid gap-8 max-w-7xl mx-auto'>
			<ToggleMenu toggle={toggle} setToggle={setToggle} />

			<MenuItemDisplay
				menuData={services.filter((item) => item.toggleName === data)}
			/>

			{/* <div className="w-1/4 mx-auto">
                <NavLink to={'/contact-us'} title={'Order'} />
            </div>
           */}
		</div>
	);
};

export default Menu;
