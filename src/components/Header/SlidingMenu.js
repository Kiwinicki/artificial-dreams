import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { TranslatedLink } from '../UI/TranslatedLink';
import OutsideClickHandler from 'react-outside-click-handler';
import { languages, defaultLanguage } from '../../i18n/i18n';
import { Location } from '@reach/router';
import { removeLangFromPath } from '../../utils/removeLangFromPath';

export const SlidingMenu = ({ isMenuOpen, toggleMenu }) => {
	const containerClasses = `sm:hidden fixed right-0 top-0 ${
		!isMenuOpen ? 'translate-x-full' : ''
	} duration-[375ms] ease-in-out bg-background h-screen w-[50vw] z-[10] ${
		isMenuOpen
			? 'after:visible after:opacity-100'
			: 'after:invisible after:opacity-0'
	} after:absolute after:h-screen after:w-screen after:backdrop-blur-sm after:top-0 after:left-0 after:translate-x-[-100%] after:duration-[350ms] after:ease-in-out`;

	const [isLangMenuOpen, toggleLangMenu] = useState(false);

	useEffect(() => {
		!isMenuOpen && toggleLangMenu(false);
	}, [isMenuOpen]);

	return (
		<div className={containerClasses}>
			<OutsideClickHandler
				onOutsideClick={() => isMenuOpen && toggleMenu(false)}
			>
				<div className="flex justify-between">
					<button onClick={toggleMenu} className="m-4">
						<CloseIcon />
					</button>
					<button onClick={() => toggleLangMenu(true)} className="m-4">
						<TranslateIcon />
					</button>
				</div>
				<nav className="flex flex-col h-screen">
					<ButtonLink to="/">Home</ButtonLink>
					<ButtonLink to="/create">Create</ButtonLink>
					<ButtonLink to="/tips">Tips</ButtonLink>
				</nav>
				<LanguageMenu
					isLangMenuOpen={isLangMenuOpen}
					toggleLangMenu={toggleLangMenu}
				/>
			</OutsideClickHandler>
		</div>
	);
};

const LanguageMenu = ({ isLangMenuOpen, toggleLangMenu }) => {
	const langMenuClasses = `sm:hidden absolute right-0 top-0 ${
		!isLangMenuOpen ? 'translate-x-full' : ''
	} duration-[375ms] ease-in-out bg-background h-screen w-[50vw] z-[10] ${
		isLangMenuOpen
			? 'after:visible after:opacity-100'
			: 'after:invisible after:opacity-0'
	}`;

	return (
		<div className={langMenuClasses}>
			<button onClick={() => toggleLangMenu(false)} className="m-4">
				<CloseIcon />
			</button>
			<nav className="flex flex-col h-screen">
				<Location>
					{(locationProps) => {
						const { pathname = '' } = locationProps.location;

						return Object.keys(languages).map((langKey) =>
							langKey === defaultLanguage ? (
								<ButtonLink
									to={removeLangFromPath(pathname)}
									isDefaultLang
									key={langKey}
								>
									{languages[langKey].localName}
								</ButtonLink>
							) : (
								<ButtonLink
									to={`/${langKey}${removeLangFromPath(pathname)}`}
									key={langKey}
								>
									{languages[langKey].localName}
								</ButtonLink>
							)
						);
					}}
				</Location>
			</nav>
		</div>
	);
};

const CloseIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-8 w-8"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		strokeWidth={2}
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
);

const ButtonLink = ({ to, children, isDefaultLang }) => {
	const classes =
		'w-full text-2xl px-5 py-4 font-semibold text-on-background hover:bg-surface duration-200 ease-in-out';

	return isDefaultLang ? (
		<Link to={to} className={classes}>
			{children}
		</Link>
	) : (
		<TranslatedLink to={to} className={classes}>
			{children}
		</TranslatedLink>
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
