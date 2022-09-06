const Flavors = ({ options }) => {
	
	return (
		<div className="grid gap-5">
			{options.map((option) => (
				<div key={option.type} className='grid gap-1 '>
					<div className="text-2xl md:text-3xl justify-self-center">{option.type}</div>
					<div className="flex flex-wrap justify-center space-x-7 leading-8">{option.flavors.map(flavor => (
                        <span key={'1'}>{flavor}</span>
                    ))}</div>
				</div>
			))}
		</div>
	);
};

export default Flavors;
