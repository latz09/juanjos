import myLogo from '../../public/images/mylogo.png';
import Image from 'next/image';
import NewWindowLink from './NewWindowLink';
import Link from 'next/link';
const UnderConstruction = () => {
	return (
		<div className='bg-gray-100 font-roboto text-gray-500'>
			<h1 className='text-center text-3xl md:text-5xl pt-12 tracking-widest  text-gray-700 '>
				Just waiting on the go ahead for this page!
			</h1>
			<div className='max-w-4xl mx-auto grid place-items-center text-center py-12 mb-6 gap-4 '>
				<h1 className='text-2xl md:text-4xl'>Other Pages on your redesign to explore--</h1>
				<div className=' flex flex-wrap sm:grid sm:grid-cols-3 gap-3 items-center px-4'>
					<Link href={'/'}>
						<a className='p-2 md:p-3 bg-juanjosTeal text-white md:text-xl font-bold tracking-widest'>
							Home Page
						</a>
					</Link>
					<Link href={'/our-menu'}>
						<a className='p-2 md:p-3 bg-juanjosTeal text-white md:text-xl font-bold tracking-widest'>
							Menu
						</a>
					</Link>
					<Link href={'/our-gallery'}>
						<a className='p-2 md:p-3 bg-juanjosTeal text-white md:text-xl font-bold tracking-widest'>
							Gallery
						</a>
					</Link>
					
				</div>
			</div>
			<div className='grid md:grid-cols-3 max-w-5xl mx-auto place-items-center text-center'>
				<div className='opacity-70 md:col-span-1 px-12 pb-3 md:p-0'>
					<Image src={myLogo} alt='' layout='intrinsic' priority={true} />
				</div>
				<div className='md:col-span-2 grid gap-4 text-left '>
					<h1 className='text-xl md:text-3xl mx-8  md:leading-10'>
						We help local businesses increase organic traffic to their site by
						building them a site as the business tool they deserve.
					</h1>
					<h1 className='text-xl md:text-3xl mx-8 md:leading-10 '>
						By building your site as the business tool that it is, we increase
						visibility, clients, and sales through organic free sources.
					</h1>
					<h1 className='text-xl md:text-3xl mx-8 md:leading-10 '>
						I Look forward to working with you!
					</h1>
				</div>
			</div>
			<div className='grid gap-6 md:grid-cols-2 max-w-4xl mx-auto py-20 place-items-center '>
				<div className='grid justify-items-center'>
					<h1 className='text-3xl py-5'>To Learn More</h1>
					<NewWindowLink to='https://www.latzwebdesign.com/'>
						<button className='btn bg-[#40A9A1] text-white font-bold text-xl py-4 px-4 tracking-widest shadow-lg'>
							www.latzwebdesign.com
						</button>
					</NewWindowLink>
				</div>
				<div className='text-2xl grid gap-1  border-2 p-3 border-[#40A9A1] bg-gray-50 shadow-lg'>
					<div className='text-3xl font-bold'>Jordan Latz</div>
					<div className='font-bold text-gray-600'>
						Full Stack Web Developer
					</div>
					<div className='text-lg'>
						<div>715 630-5689</div>
						<div>jordan@latzwebdesign.com</div>
					</div>
				</div>
			</div>
	
		</div>
	);
};

export default UnderConstruction;