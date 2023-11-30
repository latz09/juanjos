import Link from 'next/link';

const NavLink = ({ to, title, color }) => {
	return (
		<div className='nav-link'>
			<Link href={to}>
				<a >{title}</a>
			</Link>
		</div>
	);
};

export default NavLink;
