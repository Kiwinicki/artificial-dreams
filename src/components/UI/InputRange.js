import React from 'react';

export const InputRange = ({ name, register, rules, ...rest }) => (
	<input type="range" {...register(name, rules)} {...rest} />
);
