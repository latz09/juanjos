const NewWindowLink = ({ to, ...props }) => {
	return (
		<>
			<a href={to} target='_blank.' rel='noreferrer'>
				{props.children}
			</a>
		</>
	);
};

export default NewWindowLink;