const CakeFlavors = ({cakeFlavors}) => {
	return (
		<div className='grid grid-cols-2 items-center'>
			{cakeFlavors.map((option, index) => (
				<div key={index} className='flex flex-col gap-4'>
					<div className="text-2xl text-secondary-dark">{option.type}</div>
					<div className='grid gap-2'>
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
