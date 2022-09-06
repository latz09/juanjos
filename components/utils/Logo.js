const Logo = () => {
	return (
		<div className='py-2 grid justify-items-center text-xl lg:text-2xl tracking-widest font-semibold hover:opacity-60 transition duration-700'>
			<div className='flex space-x-2'>
				<span className='text-black '>Sweet</span>
				<span className='text-juanjosTeal'>{`Juanjo's`}</span>
			</div>
			<span className='text-base text-black font-light'>
				Your vision made to order
			</span>
			<span className="text-xs pt-1">715 572-1681</span>
		</div>
	);
};

export default Logo;
