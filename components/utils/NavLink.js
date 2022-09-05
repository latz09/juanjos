import Link from 'next/link';

const NavLink = ({ to, title }) => {
	return (
		<div>
			<Link href={to}>
				<a className="nav-link">{title}</a>
			</Link>
		</div>
	);
};

export default NavLink;
