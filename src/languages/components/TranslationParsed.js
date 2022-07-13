import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';
import parse from 'html-react-parser';

export const TranslationParsed = ({ children }) => {
	const { strings } = useContext(LanguageContext);
	return parse(strings[children] || children);
};
