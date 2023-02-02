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
			title: 'Candy and Treats',
			toggleName: 'treats',
		},
	
	];

	return (
		<div className=''>
			<div className='grid grid-cols-2	 md:grid-cols-4  gap-4 justify-evenly items-center  '>
				{toggleButtons.map((button) => (
					<button
						key={button.toggleName}
						className={`btn-toggle  ${
							toggle === button.toggleName && 'btn-toggle-active '
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
