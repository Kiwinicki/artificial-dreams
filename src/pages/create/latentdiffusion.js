import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Layout } from '../../components/Layout/Layout';
import { InputArrayRange } from '../../components/UI/InputArrayRange';
import { Input } from '../../components/UI/Input';
import { useFetch, states } from '../../hooks/useFetch';

const LatentDiffusionPage = () => {
	const { register, control, watch, handleSubmit } = useForm({
		defaultValues: {
			prompt: '',
			steps: 45,
			width: 256,
			height: 256,
			imgCount: 2,
			diversityScale: 5,
		},
	});
	const watchImgCount = watch('imgCount');
	const watchDiversityScale = watch('diversityScale');
	const watchWidth = watch('width');
	const watchHeight = watch('height');

	const { data, currentFetchState, executeFetch } = useFetch({});

	const onSubmit = ({
		prompt,
		steps,
		width,
		height,
		imgCount,
		diversityScale,
	}) => {
		console.log(steps, width, height, imgCount, diversityScale);

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

		// const { avg_durations, data: [imgGrid, separateImgs], durations, } = resp;
	};

	return (
		<Layout>
			<h2 className="text-2xl text-center p-5">
				Generate images with Latent Diffusion
			</h2>
			<div className="flex flex-col md:flex-row p-5">
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
					<label className="flex flex-col">
						<span>
							Prompt - try adding increments to your prompt such as 'oil on
							canvas', 'a painting'
						</span>
						<Input {...inputsProps.prompt} {...register('prompt')} />
					</label>
					<label className="flex flex-col">
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
							Diversity scale - How different from one another you wish the
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
					<button type="submit">Submit</button>
					<button type="reset">Clear</button>
				</form>
				<div>
					{currentFetchState === states.loading && 'loading...'}
					{currentFetchState === states.error && 'błąd'}
					{currentFetchState === states.loaded && (
						<div>
							<p>loaded</p>
							{data.avg_durations[0]}
							<img src={data.data[0]} alt="generation results" />
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

export default LatentDiffusionPage;

const inputsProps = {
	prompt: {
		type: 'text',
		minLength: 1,
		placeholder: 'E.g. Matte painting of cyberpunk city',
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
