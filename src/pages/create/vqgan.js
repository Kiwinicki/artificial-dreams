import React, { useState } from 'react';
import { Layout } from '../../components/Layout/Layout';
import { useForm, Controller } from 'react-hook-form';
import { states, useFetch } from '../../hooks/useFetch';
import { Input } from '../../components/UI/Input';
import { Button } from '../../components/UI/Button';
import { Spinner } from '../../components/UI/Spinner';
import { StyledLink } from '../../components/UI/StyledLink';
import { Select } from '../../components/UI/Select';

const VqganPage = () => {
	const [formData, setFormData] = useState(defaultValues);

	const { register, control, watch, handleSubmit } = useForm({
		defaultValues: defaultValues,
	});

	const watchWidth = watch('width');
	const watchHeight = watch('height');

	const { data, currentFetchState, executeFetch } = useFetch({});

	const onSubmit = ({
		prompt,
		// keywords,
		steps,
		width,
		height,
		style,
		flavor,
	}) => {
		console.log(
			prompt,
			// keywords,
			steps,
			width,
			height,
			style,
			flavor
		);
		setFormData({ prompt, steps, width, height, style, flavor });

		executeFetch('https://hf.space/embed/multimodalart/vqgan/+/api/predict/', {
			method: 'POST',
			body: JSON.stringify({
				data: [prompt, width, height, style, steps, flavor],
			}),
			headers: { 'Content-Type': 'application/json' },
		});
	};

	return (
		<Layout>
			<h2 className="text-2xl text-center px-5 py-3">
				Generate images with VQGAN + CLIP
			</h2>
			<div className="flex flex-col md:flex-row p-5 gap-5 max-w-screen-xl justify-center m-auto">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-col gap-4 min-w-[min(400px,100%)]"
				>
					<label className="flex flex-col gap-1.5">
						<span>
							Prompt - try adding increments to your prompt or choose it from
							keywords list
						</span>
						<Controller
							control={control}
							name="prompt"
							render={({ field }) => (
								<Input
									{...inputsProps.prompt}
									{...field}
									onChange={(e) => field.onChange(onPromptChange(e))}
								/>
							)}
						/>
					</label>
					<label className="flex flex-col gap-1.5">
						<span>Steps</span>
						<Input
							{...inputsProps.steps}
							{...register('steps', { valueAsNumber: true })}
						/>
					</label>
					<label className="flex flex-col">
						<span>Width</span>
						<div className="flex gap-2">
							<input
								{...inputsProps.width}
								{...register('width', { valueAsNumber: true })}
							/>
							<span>{watchWidth}</span>
						</div>
					</label>
					<label className="flex flex-col">
						<span>Height</span>
						<div className="flex gap-2">
							<input
								{...inputsProps.height}
								{...register('height', { valueAsNumber: true })}
							/>
							<span>{watchHeight}</span>
						</div>
					</label>
					<label className="flex flex-col gap-1.5">
						<span>
							Style - Hyper Fast Results is fast but compromises a bit of the
							quality
						</span>
						<Controller
							name="style"
							control={control}
							render={({ field }) => (
								<Select options={inputsProps.style.options} {...field} />
							)}
						/>
					</label>
					<label className="flex flex-col gap-1.5">
						<span>Flavor - pick a flavor for the style of the images</span>
						<Controller
							name="flavor"
							control={control}
							render={({ field }) => (
								<Select options={inputsProps.flavor.options} {...field} />
							)}
						/>
					</label>
					<div className="flex py-5 gap-5">
						<Button type="submit" className="grow">
							Submit
						</Button>
						<Button type="reset" className="grow">
							Clear
						</Button>
					</div>
				</form>
				<div className="flex flex-col gap-5">
					{currentFetchState === states.loading && (
						<div className="flex flex-wrap gap-5">
							<div className="w-64 aspect-square flex justify-center items-center border-2 border-on-background/5 animate-pulse">
								<Spinner size="lg" />
							</div>
						</div>
					)}
					{currentFetchState === states.error && (
						<p className="text-error">
							Error while generating images. Check your connection or try later
						</p>
					)}
					{currentFetchState === states.loaded && (
						<>
							{console.log(data)}
							<p>Generated in: {data.durations[0].toFixed(2)} sec</p>
							<div className="flex flex-wrap gap-5">
								<img
									src={data.data[0]}
									alt={formData.prompt}
									className="w-64 border-2 border-on-background"
								/>
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
		</Layout>
	);
};

export default VqganPage;

const onPromptChange = ({ target: { value } }) => {
	const matchBackslashesNColons = /[\/|:]/g;
	return value.replace(matchBackslashesNColons, '');
};

const defaultValues = {
	prompt: '',
	steps: 50,
	width: 256,
	height: 256,
	style: 'Hyper Fast Results',
	flavor: 'ginger',
};

const inputsProps = {
	prompt: {
		type: 'text',
		minLength: 1,
		placeholder: 'E.g. Oil painting of colorful wolf',
	},
	steps: {
		type: 'number',
		min: 3,
		max: 300,
		step: 1,
	},
	width: {
		type: 'range',
		min: 32,
		max: 512,
		step: 32,
	},
	height: {
		type: 'range',
		min: 32,
		max: 512,
		step: 32,
	},
	style: {
		type: 'select',
		options: [
			{
				name: 'Hyper Fast Results',
				value: 'Hyper Fast Results',
				selected: true,
			},
			{
				name: 'Default',
				value: 'Default',
			},
			{
				name: 'Balanced',
				value: 'Balanced',
			},
			{
				name: 'Detailed',
				value: 'Detailed',
			},
			{
				name: 'Consistent Creativity',
				value: 'Consistent Creativity',
			},
			{
				name: 'Realistic',
				value: 'Realistic',
			},
			{
				name: 'Smooth',
				value: 'Smooth',
			},
			{
				name: 'Subtle MSE',
				value: 'Subtle MSE',
			},
		],
	},
	flavor: {
		type: 'select',
		options: [
			{ name: 'ginger', value: 'ginger', selected: true },
			{ name: 'cumin', value: 'cumin' },
			{ name: 'holywater', value: 'holywater' },
			{ name: 'zynth', value: 'zynth' },
			{ name: 'wyvern', value: 'wyvern' },
			{ name: 'aaron', value: 'aaron' },
			{ name: 'moth', value: 'moth' },
			{ name: 'juu', value: 'juu' },
		],
	},
};
