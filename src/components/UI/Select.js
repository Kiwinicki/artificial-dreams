import React, { forwardRef } from 'react';

export const Select = forwardRef(
	({ options, className = '', ...rest }, ref) => (
		<select
			ref={ref}
			className={`bg-transparent p-1 pr-2 border-[2px] border-on-background duration-200 ${className}`}
			{...rest}
		>
			{options.map(({ name, value, selected = false }, i) => (
				<option
					value={value}
					{...(selected && selected)}
					className="bg-background"
					key={i}
				>
					{name}
				</option>
			))}
		</select>
	)
);
