import { useState, useRef } from 'react';
import './DropDown.css';
import useClickOutside from '../../../hooks/useClickOutside';

import DropDownItem from './DropDownItem';

export default function DropDown({ options, selectValue, handleOnChange }) {
	
    const dropDownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(false);

	const onOptionClicked = (value) => {
		setIsOpen(false);
		handleOnChange(value);
	};

	const setSelected = (value) => {
		const selectedFounded = options.find(item => item.value === value);
		return <DropDownItem option={selectedFounded} />;
	};

    useClickOutside(dropDownRef, () => setIsOpen(false));

	return (
		<div 
			ref={dropDownRef} 
			className="dropDown-container"
		>
			<div 
				className="dropDown-header" 
				onClick={() => setIsOpen(!isOpen)}
			>
				{setSelected(selectValue)}
				<span className={`chevron ${isOpen ? 'bottom' : 'top'}`}></span>
			</div>
			<div className={`dropDown-list ${isOpen ? 'visible' : ''}`}>
				{options.map((option, index) => (
					<DropDownItem 
						key={`${option.value}-${index}`} 
						option={option} 
						handleClick={onOptionClicked} 
					/>
				))}
			</div>
		</div>
	);
};
