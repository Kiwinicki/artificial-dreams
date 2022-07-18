import React, { forwardRef } from 'react';

export const Input = forwardRef(({ type, className = '', ...rest }, ref) => (
	<input
		ref={ref}
		type={type}
		{...rest}
		className={`bg-transparent p-1 border-[2px] border-on-background hover:bg-surface duration-200 ${
			type === 'number' ? 'w-16' : 'px-1'
		} ${className}`}
	/>
));
