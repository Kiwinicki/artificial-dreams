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
	watch,
	watched,
	label,
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

	const watchedValue = watch(name);

	return (
		<label className="flex flex-col gap-1.5">
			{label && <span>{label}</span>}
			<div className="flex gap-3">
				{inputTypes[type] || inputTypes.text}
				{watched && <span>{watchedValue}</span>}
			</div>
		</label>
	);
};
