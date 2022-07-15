import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';
import { InputArrayRange } from '../../components/UI/InputArrayRange';
import { Input } from '../../components/UI/Input';
import { useFetch, states } from '../../hooks/useFetch';
import { Spinner } from '../../components/UI/Spinner';
import { Button } from '../../components/UI/Button';
import { StyledLink } from '../../components/UI/StyledLink';

const LatentDiffusionPage = () => {
	const defaultValues = {
		prompt: '',
		styles: [],
		steps: 45,
		width: 256,
		height: 256,
		imgCount: 2,
		diversityScale: 5,
	};

	const [formData, setFormData] = useState(defaultValues);

	const { register, control, watch, handleSubmit } = useForm({ defaultValues });

	const watchImgCount = watch('imgCount');
	const watchDiversityScale = watch('diversityScale');
	const watchWidth = watch('width');
	const watchHeight = watch('height');

	const { data, currentFetchState, executeFetch } = useFetch({});

	const onSubmit = ({
		prompt,
		// keywords,
		steps,
		width,
		height,
		imgCount,
		diversityScale,
	}) => {
		setFormData({ prompt, steps, width, height, imgCount, diversityScale });
		console.log(formData);

		executeFetch(
			'https://hf.space/embed/multimodalart/latentdiffusion/+/api/predict/',
			{
				method: 'POST',
				body: JSON.stringify({
					data: [
						prompt,
						steps,
						width,
						height,
						imgCount,
						parseFloat(diversityScale),
					],
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		);
		console.log(prompt, steps, width, height, imgCount, diversityScale);
	};

	return (
		<Layout>
			<h2 className="text-2xl text-center px-5 py-3">
				Generate images with Latent Diffusion
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
					{/* TODO: keywords list */}
					<label className="flex flex-col gap-1.5">
						<span>Steps</span>
						<Input
							{...inputsProps.steps}
							{...register('steps', { valueAsNumber: true })}
						/>
					</label>
					<label className="flex flex-col">
						<span>Width</span>
						<Controller
							control={control}
							name="width"
							render={({ field }) => (
								<div className="flex gap-2">
									<InputArrayRange {...inputsProps.width} {...field} />
									<span>{watchWidth}</span>
								</div>
							)}
						/>
					</label>
					<label className="flex flex-col">
						<span>Height</span>
						<Controller
							control={control}
							name="height"
							render={({ field }) => (
								<div className="flex gap-2">
									<InputArrayRange {...inputsProps.width} {...field} />
									<span>{watchHeight}</span>
								</div>
							)}
						/>
					</label>
					<label className="flex flex-col">
						<span>Images - how images you wish to generate waiting</span>
						<div className="flex gap-2">
							<input
								{...inputsProps.imgCount}
								{...register('imgCount', { valueAsNumber: true })}
							/>
							<span>{watchImgCount}</span>
						</div>
					</label>
					<label className="flex flex-col">
						<span>
							Diversity scale - how different from one another you wish the
							images to be
						</span>
						<div className="flex gap-2">
							<input
								{...inputsProps.diversityScale}
								{...register('diversityScale', { valueAsNumber: true })}
							/>
							<span>{watchDiversityScale}</span>
						</div>
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
							{[...Array(formData.imgCount).keys()].map((i) => (
								<div
									className="w-64 aspect-square flex justify-center items-center border-2 border-on-background/5 animate-pulse "
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
							{console.log(data)}
							<p>Generated in: {data.avg_durations[0].toFixed(2)} sec</p>
							<div className="flex flex-wrap gap-5">
								{data.data[1].map((img, i) => (
									<img
										src={img}
										alt={data.prompt}
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
		</Layout>
	);
};

export default LatentDiffusionPage;

const onPromptChange = ({ target: { value } }) => {
	const matchBackslashes = /[\/]/g;
	return value.replace(matchBackslashes, '');
};

const inputsProps = {
	prompt: {
		type: 'text',
		minLength: 1,
		placeholder: 'E.g. Matte painting of cyberpunk city',
		required: true,
	},
	steps: {
		type: 'number',
		min: 1,
		max: 50,
		step: 1,
	},
	width: {
		stepList: [32, 64, 128, 256],
	},
	height: {
		stepList: [32, 64, 128, 256],
	},
	imgCount: {
		type: 'range',
		min: 1,
		max: 4,
		step: 1,
	},
	diversityScale: {
		type: 'range',
		min: 1,
		max: 15,
		step: 0.1,
	},
};
