import React from 'react';
import { languages, defaultLanguage } from '../../i18n/i18n';
import { Link } from 'gatsby';
import { TranslatedLink } from './TranslatedLink';
import { Location } from '@reach/router';
import { removeLangFromPath } from '../../utils/removeLangFromPath';

export const LangLinkList = ({ ulClasses, liClasses, linkClasses }) => {
	return (
		<ul className={ulClasses}>
			<Location>
				{(locationProps) => {
					const { pathname = '' } = locationProps.location;

					return Object.keys(languages).map((langKey) => (
						<li key={langKey} className={liClasses}>
							{langKey === defaultLanguage ? (
								<Link to={removeLangFromPath(pathname)} className={linkClasses}>
									{languages[langKey].localName}
								</Link>
							) : (
								<TranslatedLink
									to={`/${langKey}${removeLangFromPath(pathname)}`}
									className={linkClasses}
								>
									{languages[langKey].localName}
								</TranslatedLink>
							)}
						</li>
					));
				}}
			</Location>
		</ul>
	);
};
