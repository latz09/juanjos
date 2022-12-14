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
		<div  className="">
		  <div>
				<ToggleMenu toggle={toggle} setToggle={setToggle} />
			</div>
            <div>
                <MenuItemDisplay menuData={services.filter(item => item.toggleName === data)}/>
            </div>
            <div className="text-center text-white tracking-widest text-2xl py-8">
                <NavLink to={'/contact-us'} title={'Order'} />
            </div>
          
		</div>
	);
};

export default Menu;
