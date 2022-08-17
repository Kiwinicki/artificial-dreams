import { getCurrentPageLanguage } from './getCurrentPageLanguage';
import { defaultLanguage } from '../i18n/i18n';

export const getTranslatedPath = (pathname, to) => {
	const currentPageLanguage = getCurrentPageLanguage(pathname);

	let languagePath = '';
	const isDefaultLanguage = defaultLanguage === currentPageLanguage;
	if (!isDefaultLanguage) {
		languagePath = '/' + currentPageLanguage;
	}

	let outputPath =
		getCurrentPageLanguage(to) === currentPageLanguage
			? to
			: `${languagePath}${to}`;

	const hasTrailingSlash = outputPath.endsWith('/');
	if (!hasTrailingSlash) {
		outputPath += '/';
	}

	return outputPath;
};
