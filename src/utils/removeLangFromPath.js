import { languages } from '../i18n/i18n';

export const removeLangFromPath = (pathname) => {
	const pathElements = pathname.split('/');

	for (let element of pathElements) {
		const langIndex = Object.keys(languages).findIndex(
			(langKey) => langKey === element
		);
		if (langIndex !== -1) {
			pathElements.splice(langIndex, 1);
			return pathElements.join('/');
		}
	}
	return pathname;
};
