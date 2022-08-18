import { defaultLanguage, languages } from '../i18n/i18n';

export const getCurrentPageLanguage = (pathname) => {
	const pathElements = pathname.split('/');
	for (let element of pathElements) {
		for (let langKey of Object.keys(languages)) {
			if (element === langKey) {
				return langKey;
			}
		}
	}
	return defaultLanguage;
};
