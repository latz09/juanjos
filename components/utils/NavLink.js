import Link from 'next/link';

const NavLink = ({ to, title, color }) => {
	return (
		<div className={`nav-link ${color === 'blue' && 'bg-secondary-dark'} `}>
			<Link href={to}>
				<a >{title}</a>
			</Link>
		</div>
	);
};

export default NavLink;
