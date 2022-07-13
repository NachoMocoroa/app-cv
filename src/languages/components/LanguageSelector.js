import { useContext } from 'react';
import { langs } from '../langsConstants';
import { LanguageContext } from '../LanguageProvider';

import DropDown from './DropDown/DropDown';

function LanguageSelector() {

	const { language, updateLanguage } = useContext(LanguageContext);
	const handleUpdateLanguage = (param) => {
		updateLanguage(param);
	};

	return (
		<DropDown  
			options={langs} 
			selectValue={language} 
			handleOnChange={handleUpdateLanguage} 
		/>
	);
};

export default LanguageSelector;
