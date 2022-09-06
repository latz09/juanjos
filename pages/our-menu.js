import { useState, useEffect } from 'react';
import MenuItemDisplay from '../components/menu/MenuItemDisplay';
import ToggleMenu from '../components/menu/ToggleMenu';
import { services } from '../data/services';

const Menu = () => {
	const [toggle, setToggle] = useState('cakes');
	const [data, setData] = useState(toggle);

	useEffect(() => {
		setData(toggle);
	}, [toggle]);
	return (
		<div  className="min-h-screen">
		  <div>
				<ToggleMenu toggle={toggle} setToggle={setToggle} />
			</div>
            <div>
                <MenuItemDisplay menuData={services.filter(item => item.toggleName === data)}/>
            </div>
          
		</div>
	);
};

export default Menu;
