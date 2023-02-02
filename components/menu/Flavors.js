const Flavors = ({ options }) => {

	return (
		<div >
			{options.map((option) => (
				<div key={option.type}>
					<div >
						{option.type}
					</div>
					<div >
						{option.flavors.map((flavor, index) => (
							<span key={index} >{flavor}</span>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Flavors;
