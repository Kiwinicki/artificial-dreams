import React from 'react';

export const Input = ({ name, type, register, rules, ...rest }) => (
	<input
		type={type}
		{...register(name, rules)}
		{...rest}
		className={`bg-transparent p-1 border-[2px] border-on-background hover:bg-surface duration-200 ${
			type === 'number' ? 'w-16' : 'px-1 grow'
		} ${rest?.className}`}
	/>
);
