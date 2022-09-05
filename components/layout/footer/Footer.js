import Link from 'next/link';
import Logo from '../../utils/Logo';
import NavLink from '../../utils/NavLink';

const Footer = () => {
	return (
		<div className='max-w-7xl mx-auto grid grid-cols-2 place-items-center py-6'>
            <div>
			<Logo />
            </div>
            <div>
                <Link href={'/contact-us'} >
                    <a className="p-4 bg-juanjosTeal shadow text-2xl text-white font-bold tracking-widest">Contact</a>
                </Link>
            </div>
		</div>
	);
};

export default Footer;
