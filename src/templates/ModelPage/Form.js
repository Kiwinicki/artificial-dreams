import React from 'react';
import { useForm } from 'react-hook-form';
import { InputFactory } from './InputFactory';
import { Button } from '../../components/UI/Button';
import { filterObject } from '../../utils/filterObject';

export const Form = ({
	defaultValues,
	inputsArr,
	onSubmit,
	onError,
	...rest
}) => {
	const { handleSubmit, register, control, watch } = useForm({ defaultValues });

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} {...rest}>
			{inputsArr.map(({ name, type, rules, label, watched, ...props }) => {
				const filteredProps = filterObject(
					props,
					([key, value]) => value !== null
				);

				const watchedValue = watch(name);

				return (
					<label className="flex flex-col gap-1.5" key={name}>
						{label && <span>{label}</span>}
						<div className="flex gap-3">
							<InputFactory
								name={name}
								type={type}
								register={register}
								control={control}
								rules={rules}
								{...filteredProps}
							/>
							{watched && <span>{watchedValue}</span>}
						</div>
					</label>
				);
			})}
			<div className="flex py-5 gap-5">
				<Button type="submit" className="grow">
					Submit
				</Button>
				<Button type="reset" className="grow">
					Clear
				</Button>
			</div>
		</form>
	);
};
