import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../UI/Input';
import { InputRange } from '../../UI/InputRange';
import { InputArrayRange } from '../../UI/InputArrayRange';

export const InputFactory = ({
	name,
	type = 'text',
	register,
	control,
	rules,
	...props
}) => {
	const inputTypes = {
		text: (
			<Input
				type={type}
				name={name}
				register={register}
				rules={rules}
				{...props}
			/>
		),
		number: (
			<Input
				type={type}
				name={name}
				register={register}
				rules={rules}
				{...props}
			/>
		),
		range: (
			<InputRange name={name} register={register} rules={rules} {...props} />
		),
		arrayRange: (
			<Controller
				control={control}
				name={name}
				render={({ field }) => <InputArrayRange {...props} {...field} />}
			/>
		),
		checkbox: <input type="checkbox" {...register(name, rules)} {...props} />,
	};

	return inputTypes[type] || inputTypes.text;
};
