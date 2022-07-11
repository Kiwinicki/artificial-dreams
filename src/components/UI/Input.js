import React, { forwardRef } from 'react';

export const Input = forwardRef(({ type, ...rest }, ref) => (
	<input
		ref={ref}
		type={type}
		{...rest}
		className={`bg-transparent p-1 border-[2px] border-on-background ${
			type === 'number' ? 'w-16' : 'px-1'
		}`}
	/>
));
