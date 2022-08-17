import React from 'react';
import { TranslatedLink } from './TranslatedLink';

export const StyledLink = ({
	to = '#',
	internal = false,
	children,
	className = '',
}) => {
	const classes = `text-primary hover:text-primary-dark relative after:block after:w-0 after:h-[1px] after:bg-primary-dark after:hover:w-full duration-150 after:duration-150 after:absolute after:left-0 ${className}`;

	return internal ? (
		<TranslatedLink to={to} className={classes}>
			{children}
		</TranslatedLink>
	) : (
		<a href={to} className={classes}>
			{children}
		</a>
	);
};
