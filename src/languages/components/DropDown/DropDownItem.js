import './DropDownItem.css';

export default function DropDownItem({ option, handleClick }) {

	return (
		<div 
			className="dropDown-listItem" 
			onClick={handleClick ? () => handleClick(option.value) : null}
		>
			<img width="20" src={option.flag} alt={option.label} />
			<span>{option.label}</span>
		</div>
	);
};
