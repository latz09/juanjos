import Link from 'next/link';
import Logo from '../../utils/Logo';
import NewWindowLink from '../../utils/NewWindowLink';
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
	return (
		<div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center py-6 tracking-widest'>
			<Link href={'/'}>
				<a>
					<Logo />
				</a>
			</Link>
			<div className='grid gap-2 place-items-center'>
				<div className='my-4  grid gap-2 w-full'>
					<div className='flex space-x-4 md:space-x-8 text-3xl'>
						<div className=' text-juanjosTeal'>
							<NewWindowLink to={'https://www.facebook.com/SweetJuanjos'}>
								<BsFacebook />
							</NewWindowLink>
						</div>
						<div className=' text-juanjosTeal'>
							<NewWindowLink to={'https://www.instagram.com/sweetjuanjos/'}>
								<AiFillInstagram />
							</NewWindowLink>
						</div>
						<span></span>
					</div>
				</div>
			</div>{' '}
		</div>
	);
};

export default Footer;
