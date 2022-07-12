import React from 'react';

export const Spinner = ({ size = 'sm', className = '' }) => {
	const sizeClasses = {
		xl: 'w-[64px] after:w-[56px] after:border-[6px]',
		lg: 'w-[48px] after:w-[42px] after:border-4',
		sm: 'w-[34px] after:w-[30px] after:border-4',
	};

	return (
		<div
			className={`inline-block aspect-square after:block after:aspect-square after:rounded-[50%] after:border-y-on-background after:border-x-transparent after:animate-spin ${sizeClasses[size]} ${className}`}
		></div>
	);
};
