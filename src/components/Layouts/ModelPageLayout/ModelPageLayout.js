import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useFetch, states } from '../../../hooks/useFetch';
import { MainLayout } from '../MainLayout';
import { InputFactory } from './InputFactory';
import { Spinner } from '../../UI/Spinner';
import { Button } from '../../UI/Button';
import { StyledLink } from '../../UI/StyledLink';
import { filterObject } from '../../../utils';

const ModelPageLayout = ({
	pageContext: {
		form: {
			inputs,
			defaultValues,
			requestSchema: { url, method, body, headers },
			responseSchema,
		},
		id,
		name,
		key,
		route,
	},
}) => {
	const newDefaultValues = filterObject(
		defaultValues,
		([key, value]) => value !== null
	);

	const [formData, setFormData] = useState(newDefaultValues);

	const { data, currentFetchState, executeFetch } = useFetch({});

	const onSubmit = (data) => {
		console.log(data, body);
		console.log(body.data.map((varName) => data[varName]));
		setFormData(data);
		// executeFetch(url, {
		// 	method,
		// 	body: [],
		// 	headers,
		// });
	};

	const onError = (err) => {
		console.error(err);
		throw Error(err);
	};

	return (
		<MainLayout>
			<h2 className="text-2xl text-center px-5 py-3">
				Generate images with {name}
			</h2>
			<div className="flex flex-col md:flex-row p-5 gap-5 max-w-screen-xl justify-center m-auto">
				<Form
					onSubmit={onSubmit}
					onError={onError}
					inputs={inputs}
					defaultValues={defaultValues}
					className="flex flex-col gap-4 min-w-[min(400px,100%)]"
				/>
				<div className="flex flex-col gap-5">
					{currentFetchState === states.loading && (
						<div className="flex flex-wrap gap-5">
							{[...Array(formData.imgCount).keys()].map((i) => (
								<div
									className="w-64 aspect-square flex justify-center items-center border-2 border-on-background/5 animate-pulse"
									key={i}
								>
									<Spinner size="lg" />
								</div>
							))}
						</div>
					)}
					{currentFetchState === states.error && (
						<p className="text-error">
							Error while generating images. Check your connection or try later
						</p>
					)}
					{currentFetchState === states.loaded && (
						<>
							<p>Generated in: {data.avg_durations[0].toFixed(2)} sec</p>
							<div className="flex flex-wrap gap-5">
								{data.data[1].map((img, i) => (
									<img
										src={img}
										alt={formData.prompt}
										className="w-64 border-2 border-on-background"
										key={i}
									/>
								))}
							</div>
							<p>
								You liked the result, but it has a low resolution? Enhance it
								with{' '}
								<StyledLink to="https://replicate.com/xinntao/esrgan">
									ESRGAN
								</StyledLink>{' '}
								- AI powered online upscaling software
							</p>
						</>
					)}
				</div>
			</div>
			<p className="text-center p-5 pt-0">
				Model comes from{' '}
				<StyledLink to="https://huggingface.co/multimodalart">
					Multimodal AI art
				</StyledLink>{' '}
				on Hugging Face. Check his{' '}
				<StyledLink to="https://multimodal.art/">site</StyledLink> too.
			</p>
		</MainLayout>
	);
};

export default ModelPageLayout;

const onPromptChange = ({ target: { value } }) => {
	const matchBackslashes = /[\/]/g;
	return value.replace(matchBackslashes, '');
};

const Form = ({ defaultValues, inputs, onSubmit, onError, ...rest }) => {
	const { handleSubmit, register, control, watch } = useForm({ defaultValues });

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} {...rest}>
			{inputs.map(({ name, type, rules, ...props }) => {
				const newProps = filterObject(props, ([key, value]) => value !== null);

				return (
					<InputFactory
						name={name}
						type={type}
						register={register}
						control={control}
						rules={rules}
						watch={watch}
						{...newProps}
						key={name}
					/>
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
