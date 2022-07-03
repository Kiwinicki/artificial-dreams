import React from 'react';
import { Link } from 'gatsby';

<<<<<<< HEAD
export const StyledLink = ({ to = '#', internal = false, children }) => {
	const classes =
		'text-primary hover:text-primary-dark relative after:block after:w-0 after:h-[1px] after:bg-primary-dark after:hover:w-full duration-150 after:duration-150 after:absolute after:left-0';
=======
export const StyledLink = ({
	to = '#',
	internal = false,
	children,
	additionalClasses = '',
}) => {
	const classes =
		'text-primary hover:text-primary-dark after:block after:w-0 after:h-[2px] after:bg-primary-dark after:hover:w-full duration-150 after:duration-150';
>>>>>>> c1e9c44 (created CreatePage, TODO: add invidual bg images for all models)

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
