import React from 'react';
import { Link } from 'gatsby';
import { languages, defaultLanguage } from '../../i18n/i18n';
import { useToggle } from '../../hooks/useToggle';
import { Button } from '../UI/Button';
import { TranslatedLink } from '../UI/TranslatedLink';
import { removeLangFromPath } from '../../utils/removeLangFromPath';
import { Location } from '@reach/router';

export const LanguageMenu = () => {
	const [isMenuOpen, toggleMenu] = useToggle();

	return (
		<div className="hidden sm:block place-self-end self-start relative">
			<button
				onClick={toggleMenu}
				className={`p-1 hover:bg-surface duration-200 border-2  hover:border-on-background ${
					!isMenuOpen ? 'border-transparent' : ''
				}`}
			>
				<TranslateIcon />
			</button>
			<ul
				className={`absolute z-10 right-0 translate-y-0.5 ${
					isMenuOpen
						? 'visible opacity-100 transition-opacity'
						: 'invisible opacity-0 transiton-[visibility_0s_2s,opacity_2s_linear] transition-opacity'
				}`}
			>
				<Location>
					{(locationProps) => {
						const { pathname = '' } = locationProps.location;

						return Object.keys(languages).map((langKey) => (
							<li key={langKey} className="mb-0.5">
								<Button className="w-full">
									{langKey === defaultLanguage ? (
										<Link to={removeLangFromPath(pathname)}>
											{languages[langKey].localName}
										</Link>
									) : (
										<TranslatedLink
											to={`/${langKey}${removeLangFromPath(pathname)}`}
										>
											{languages[langKey].localName}
										</TranslatedLink>
									)}
								</Button>
							</li>
						));
					}}
				</Location>
			</ul>
		</div>
	);
};

const TranslateIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-7 w-7"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
		/>
	</svg>
);
