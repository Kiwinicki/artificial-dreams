import React from 'react';

export const Button = ({
	type = 'button',
	className = '',
	onClick,
	children,
	...rest
}) => {
	return (
		<button
			type={type}
			className={`border-2 border-on-background p-1 hover:bg-surface duration-200 ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};
