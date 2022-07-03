import React from 'react';
import { Link } from 'gatsby';
import { siteMetadata } from '../../../gatsby-config';
import { LogoLink } from '../UI/LogoLink';
import { SlidingMenu } from './SlidingMenu';
import { useToggle } from '../../hooks/useToggle';

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
				<HeaderLink to="/">Home</HeaderLink>
				<HeaderLink to="/create">Create</HeaderLink>
				<HeaderLink to="/tips">Tips</HeaderLink>
			</nav>
		</header>
	);
};

const HeaderLink = ({ to, children }) => (
	<Link
		to={to}
		className="text-xl text-white after:block after:w-0 after:h-[2px] after:bg-white after:hover:w-full duration-150 after:duration-150"
	>
		{children}
	</Link>
);

const MenuIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		className="h-10 w-10"
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
