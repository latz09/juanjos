const ToggleMenu = ({ toggle, setToggle }) => {
	const toggleButtons = [
		{
			title: 'Cupcakes',
			toggleName: 'cupcakes',
		},
		{
			title: 'Specialty Cakes',
			toggleName: 'cakes',
		},
		{
			title: 'Cookies',
			toggleName: 'cookies',
		},
		{
			title: 'Candy',
			toggleName: 'candy',
		},
		{
			title: 'Rice Krispies',
			toggleName: 'rice-krispies',
		},
		{
			title: 'Brownies',
			toggleName: 'brownies',
		},
	];

	return (
		<div className='max-w-6xl mx-auto sticky top-0 pt-2 md:pt-8'>
			<div className='grid grid-cols-3 md:grid-cols-6 gap-4 justify-evenly items-center py-3 space-x-1 mx-1 bg-white bg-opacity-70 '>
				{toggleButtons.map((button) => (
					<button
						key={button.toggleName}
						className={`btn-toggle ${
							toggle === button.toggleName && 'btn-toggle-active'
						}`}
						onClick={() => {
							setToggle(button.toggleName);
						}}
					>
						{button.title}
					</button>
				))}
			</div>
		</div>
	);
};

export default ToggleMenu;
