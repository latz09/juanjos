import Link from 'next/link';
import { RiMenu3Fill, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import Logo from '../../utils/Logo'
import { navLinks } from '../../../data/navLinks';


const Navbar = () => {
	const [open, setOpen] = useState(false);
	const closeMenu = () => {
		open && setOpen(false);
	};

	return (
		<div className='w-full  top-0 left-0 z-10 font-cinzel'>
			<div className=''>
				<div className='max-w-7xl mx-auto grid grid-cols-5 items-center justify-items-between   lg:px-10 px-2 text-juanjosTeal tracking-widest'>
					<Link href={'/'}>
						<button
							className='hover:text-opacity-70 duration-700 text-4xl cursor-pointer col-span-3 md:col-span-2 justify-self-start'
							onClick={closeMenu}
							aria-label='Navigate Home'
						>
							<Logo />
						</button>
					</Link>

					<div
						onClick={() => setOpen(!open)}
						className='text-3xl  cursor-pointer lg:hidden  justify-self-end col-span-2 md:col-span-3 mr-4'
					>
						{!open ? (
							<button
								label='open navbar'
								aria-label='open dropdown navigation bar'
							>
								<RiMenu3Fill />{' '}
							</button>
						) : (
							<button
								label='close navbar'
								aria-label='close dropdown navigation bar'
							>
								<RiCloseLine />
							</button>
						)}
					</div>

					<div
						className={`bg-juanjosTeal shadow-lg lg:shadow-none text-white  lg:text-juanjosTeal lg:bg-white lg:flex lg:items-center lg:col-span-3 lg:justify-between absolute lg:static lg:z-auto  left-0 w-full lg:w-auto z-20 transition-all lg:transition-none duration-700  ease-in ${
							open ? 'top-24' : 'top-[-490px]'
						}`}
					>
						{navLinks.map((link) => (
							<div
								key={link.name}
								className='text-lg lg:text-2xl  my-7 text-center'
								onClick={() => setOpen(!open)}
							>
								<Link href={link.link}>
									<a className='hover:text-black transition duration-700'>
										{link.name}
									</a>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
