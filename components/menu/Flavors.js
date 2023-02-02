const Flavors = ({ options }) => {
	console.log(options)
	return (
		<div className={`grid place-items-center ${options.length > 1 && 'md:grid-cols-2'}`}>
			{options.map((option) => (
				<div key={option.type} className='grid  gap-8 h-full'>
					<div className='text-2xl md:text-3xl text-center font-bold  h-full text-secondary-dark'>
						{option.type}
					</div>
					<div className={`grid gap-2 text-lg  ${options.length > 1 && 'md:grid-cols-2 '}`} >
						{option.flavors.map((flavor, index) => (
							<span key={index} className="font-semibold ">{flavor}</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Flavors;
