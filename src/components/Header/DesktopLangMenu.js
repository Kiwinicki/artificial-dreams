import React from 'react';
import { useToggle } from '../../hooks/useToggle';
import { LangLinkList } from '../UI/LangLinkList';
import { TranslateIcon } from '../icons/TranslateIcon';

export const DesktopLangMenu = () => {
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
			<LangLinkList
				ulClasses={`absolute z-10 right-0 translate-y-0.5 ${
					isMenuOpen
						? 'visible opacity-100 transition-opacity'
						: 'invisible opacity-0 transiton-[visibility_0s_2s,opacity_2s_linear] transition-opacity'
				}`}
				liClasses="border-2 border-on-background p-1 hover:bg-surface duration-200 mb-0.5"
				linkClasses="w-full"
			/>
		</div>
	);
};
