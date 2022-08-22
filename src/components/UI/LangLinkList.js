import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { languages, defaultLanguage } from '../../i18n/i18n';
import { TranslatedLink } from './TranslatedLink';
import { PageContext } from '../Layout';

export const LangLinkList = ({ ulClasses, liClasses, linkClasses }) => {
	const { originalPath } = useContext(PageContext);

	return (
		<ul className={ulClasses}>
			{Object.keys(languages).map((langKey) => (
				<li key={langKey} className={liClasses}>
					{langKey === defaultLanguage ? (
						<Link to={originalPath} className={linkClasses}>
							{languages[langKey].localName}
						</Link>
					) : (
						<TranslatedLink
							to={`/${langKey}${originalPath}`}
							className={linkClasses}
						>
							{languages[langKey].localName}
						</TranslatedLink>
					)}
				</li>
			))}
		</ul>
	);
};
