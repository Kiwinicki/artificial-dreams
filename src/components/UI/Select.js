import React from 'react';

export const Select = ({
	name,
	register,
	optionsList,
	rules,
	className = '',
	...rest
}) => (
	<select
		{...register(name, rules)}
		className={`bg-transparent p-1 pr-2 border-[2px] border-on-background duration-200 ${className}`}
		{...rest}
	>
		{optionsList.map(({ name, value }, i) => (
			<option value={value} className="bg-background" key={i}>
				{name}
			</option>
		))}
	</select>
);
