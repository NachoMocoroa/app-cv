import {
	useState,
	createContext,
	useCallback,
	useEffect,
	useRef 
} from 'react';

const initialLang = 'es';

const initialLanguageContext = {
	language: initialLang,
	strings: {},
	updateLanguage: () => {}
};

export const LanguageContext = createContext(initialLanguageContext);

export const LanguageProvider = ({ children, fetchTranslations }) => {
	
	const initialStringsLoaded = useRef(false);
	const [{ language, strings }, setLanguage] = useState({
		language: initialLang,
		strings: {}
	});

	const updateLanguage = useCallback(
		async (newLang) => {
			if (initialStringsLoaded.current && newLang === language) return;
			const newStrings = await fetchTranslations({ language: newLang });
			initialStringsLoaded.current = true;
			setLanguage({
				language: newLang,
				strings: newStrings
			});
		},
		[language, fetchTranslations]
	);

	useEffect(() => {
		updateLanguage(language);
	}, [language, updateLanguage]);

	const context = {
		language,
		strings,
		updateLanguage: updateLanguage
	};

	return (
		<LanguageContext.Provider value={context}>
			{children}
		</LanguageContext.Provider>
	)
};
