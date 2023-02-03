const CakeFlavors = ({cakeFlavors}) => {
	return (
		<div className='flex justify-around lg:grid grid-cols-2 lg:items-center'>
			{cakeFlavors.map((option, index) => (
				<div key={index} className='flex flex-col gap-4'>
					<div className="text-xl lg:text-2xl text-secondary-dark">{option.type}</div>
					<div className='grid gap-2 place-items-center mb-8 lg:mb-0'>
						{option.flavors.map((flavor, index) => (
							<div key={index}>{flavor}</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default CakeFlavors;
