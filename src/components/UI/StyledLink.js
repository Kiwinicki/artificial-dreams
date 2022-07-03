import React from 'react';
import { Link } from 'gatsby';

export const StyledLink = ({ to = '#', internal = false, children }) => {
	const classes =
		'text-primary hover:text-primary-dark relative after:block after:w-0 after:h-[1px] after:bg-primary-dark after:hover:w-full duration-150 after:duration-150 after:absolute after:left-0';

	return internal ? (
		<Link to={to} className={classes}>
			{children}
		</Link>
	) : (
		<a href={to} className={classes}>
			{children}
		</a>
	);
};
