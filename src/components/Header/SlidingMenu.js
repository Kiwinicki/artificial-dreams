import React from 'react';
import { Link } from 'gatsby';
import OutsideClickHandler from 'react-outside-click-handler';

export const SlidingMenu = ({ isMenuOpen, toggleMenu }) => {
	const containerClasses = `sm:hidden fixed right-0 top-0 ${
		!isMenuOpen && 'translate-x-full'
	} duration-[375ms] ease-in-out bg-background h-screen w-[50vw] z-[10] ${
		isMenuOpen
			? 'after:visible after:opacity-100'
			: 'after:invisible after:opacity-0'
	} after:absolute after:h-screen after:w-screen after:backdrop-blur-sm after:top-0 after:left-0 after:translate-x-[-100%] after:duration-[350ms] after:ease-in-out`;

	return (
		<div className={containerClasses}>
			<OutsideClickHandler
				onOutsideClick={() => isMenuOpen && toggleMenu(false)}
			>
				<button onClick={toggleMenu} className="m-4">
					<CloseIcon />
				</button>
				<nav className="flex flex-col h-screen">
					<ButtonLink to="/">Home</ButtonLink>
					<ButtonLink to="/create">Create</ButtonLink>
					<ButtonLink to="tips">Tips</ButtonLink>
				</nav>
			</OutsideClickHandler>
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

const ButtonLink = ({ to, children }) => {
	return (
		<Link
			to={to}
			className="w-full text-2xl px-5 py-4 font-semibold text-on-background hover:bg-surface duration-200 ease-in-out"
		>
			{children}
		</Link>
	);
};
