import React, { useEffect, useState } from 'react';
import { TranslatedLink } from '../UI/TranslatedLink';
import OutsideClickHandler from 'react-outside-click-handler';
import { MoblieLangMenu } from './MoblieLangMenu';
import { CloseIcon } from '../icons/CloseIcon';
import { TranslateIcon } from '../icons/TranslateIcon';
import { FormattedMessage } from 'react-intl';

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
					<ButtonLink to="/">
						<FormattedMessage id="nav-home" defaultMessage="Home" />
					</ButtonLink>
					<ButtonLink to="/create">
						<FormattedMessage id="nav-create" defaultMessage="Create" />
					</ButtonLink>
					<ButtonLink to="/tips">
						<FormattedMessage id="nav-tips" defaultMessage="Tips" />
					</ButtonLink>
				</nav>
				<MoblieLangMenu
					isLangMenuOpen={isLangMenuOpen}
					toggleLangMenu={toggleLangMenu}
				/>
			</OutsideClickHandler>
		</div>
	);
};

const ButtonLink = ({ to, children }) => (
	<TranslatedLink
		to={to}
		className="w-full text-2xl px-5 py-4 font-semibold text-on-background hover:bg-surface duration-200 ease-in-out"
	>
		{children}
	</TranslatedLink>
);

export const btnLinkClasses =
	'w-full text-2xl px-5 py-4 font-semibold text-on-background hover:bg-surface duration-200 ease-in-out';
