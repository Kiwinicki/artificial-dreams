import React from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '../../components/UI/Input';
import { InputRange } from '../../components/UI/InputRange';
import { InputArrayRange } from '../../components/UI/InputArrayRange';
import { Select } from '../../components/UI/Select';

export const InputFactory = ({
	name,
	type = 'text',
	register,
	control,
	rules,
	options,
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
		select: (
			<Select
				name={name}
				register={register}
				rules={rules}
				optionsList={options}
				{...props}
			/>
		),
	};

	return inputTypes[type] || inputTypes.text;
};
