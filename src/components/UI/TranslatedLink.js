import React from 'react';
import { Location } from '@reach/router';
import { getCurrentPageLanguage } from '../../utils/getCurrentPageLanguage';
import { getTranslatedPath } from '../../utils/getTranslatedPath';
import { Link } from 'gatsby';

export const TranslatedLink = ({ children, className = '', to = '/' }) => {
	return (
		<Location>
			{(locationProps) => {
				const { pathname = '' } = locationProps.location;
				return (
					<Link
						className={className}
						to={getTranslatedPath(pathname, to)}
						hrefLang={getCurrentPageLanguage(pathname)}
					>
						{children}
					</Link>
				);
			}}
		</Location>
	);
};
