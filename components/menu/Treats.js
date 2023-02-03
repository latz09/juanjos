const Treats = ({ data }) => {

	return (
		<div>
			<TreatsToggle subCategories={data[0].subCategories} />
			
		</div>
	);
};

export default Treats;

const TreatsToggle = ({ subCategories }) => {
	return (
		<div className="flex justify-evenly ">
			{subCategories.map((item, index) => (
				<div key={index}>{item.category}</div>
			))}
		</div>
	);
};
