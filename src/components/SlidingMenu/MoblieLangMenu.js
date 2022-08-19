import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';
import { LangLinkList } from '../UI/LangLinkList';
import { btnLinkClasses } from './SlidingMenu';

export const MoblieLangMenu = ({ isLangMenuOpen, toggleLangMenu }) => {
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
				<LangLinkList linkClasses={`block ${btnLinkClasses}`} />
			</nav>
		</div>
	);
};
