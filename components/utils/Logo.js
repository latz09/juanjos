const Logo = () => {
	return (
		<div className='py-4 grid justify-items-center text-xl lg:text-2xl tracking-widest font-semibold hover:opacity-60 transition duration-700'>
			<div className='flex space-x-2'>
				<span className='text-black '>Sweet</span>
				<span className=''>{`Juanjo's`}</span>
			</div>
			<span className='text-base text-black font-thin'>
				Your vision made to order
			</span>
			<span className="text-xs">715 572-1681</span>
		</div>
	);
};

export default Logo;
