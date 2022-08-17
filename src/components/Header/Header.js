import React from 'react';
import { siteMetadata } from '../../../gatsby-config';
import { LogoLink } from '../UI/LogoLink';
import { SlidingMenu } from './SlidingMenu';
import { useToggle } from '../../hooks/useToggle';
import { TranslatedLink } from '../UI/TranslatedLink';
import { FormattedMessage } from 'react-intl';
import { LanguageMenu } from './LanguageMenu';

export const Header = () => {
	const [isMenuOpen, toggleMenu] = useToggle(false);

	return (
		<header className="relative grid sm:grid-cols-3 grid-flow-col auto-cols-auto p-5 justify-between bg-background">
			<div>
				<LogoLink />
				<h1 className="sr-only">{siteMetadata.title}</h1>
			</div>
			{/* smaller screens */}
			<SlidingMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
			<button onClick={toggleMenu} className="sm:hidden justify-self-end">
				<MenuIcon />
			</button>
			{/* bigger screens */}
			<nav className="hidden sm:flex gap-16 justify-self-center">
				<HeaderLink to="/">
					<FormattedMessage id="nav-home" defaultMessage="Home" />
				</HeaderLink>
				<HeaderLink to="/create">
					<FormattedMessage id="nav-create" defaultMessage="Create" />
				</HeaderLink>
				<HeaderLink to="/tips">
					<FormattedMessage id="nav-tips" defaultMessage="Tips" />
				</HeaderLink>
			</nav>
			<LanguageMenu />
		</header>
	);
};

const HeaderLink = ({ to, children }) => (
	<TranslatedLink
		to={to}
		className="text-xl text-white after:block after:w-0 after:h-[2px] after:bg-white after:hover:w-full duration-150 after:duration-150 w-min xl:w-max"
	>
		{children}
	</TranslatedLink>
);

const MenuIcon = () => (
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
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
);
