import React, { useState } from 'react';
import { useFetch, states } from '../../hooks/useFetch';
import { Layout } from '../../components/Layout';
import { Form } from './Form';
import { Spinner } from '../../components/UI/Spinner';
import { StyledLink } from '../../components/UI/StyledLink';
import { filterObject, getDynamicObjProp } from '../../utils';

const ModelPage = ({
	pageContext: {
		form: {
			inputs,
			defaultValues,
			requestSchema: { url, method, body, headers },
			responseSchema: { imagesRespPath, durationRespPath },
		},
		name,
		key,
	},
}) => {
	const newDefaultValues = nonNullableProps(defaultValues);

	const [formData, setFormData] = useState(newDefaultValues);

	const { data, currentFetchState, executeFetch } = useFetch({});

	const onSubmit = (data) => {
		if (key === 'latent-diffusion') {
			data.prompt = sanitizePrompt(data.prompt);
		}

		setFormData(data);
		executeFetch(url, {
			method: method,
			body: JSON.stringify({ data: body.data.map((varName) => data[varName]) }),
			headers: { 'Content-Type': headers.Content_Type },
		});
	};

	return (
		<Layout>
			<h2 className="text-2xl text-center px-5 py-3">
				Generate images with {name}
			</h2>
			<div className="flex flex-col md:flex-row p-5 gap-5 max-w-screen-xl justify-center m-auto">
				{console.log(inputs)}
				<Form
					onSubmit={onSubmit}
					// onError={onError}
					inputsArr={inputs}
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
							<p>
								Generated in:{' '}
								{getDynamicObjProp(data, durationRespPath).toFixed(2)} sec
							</p>
							<div className="flex flex-wrap gap-5">
								{Array.isArray(getDynamicObjProp(data, imagesRespPath)) ? (
									getDynamicObjProp(data, imagesRespPath).map((img, i) => (
										<img
											src={img}
											alt={formData.prompt}
											className="w-64 border-2 border-on-background"
											key={i}
										/>
									))
								) : (
									<img
										src={data.img}
										alt={formData.prompt}
										className="w-64 border-2 border-on-background"
									/>
								)}
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

export default ModelPage;

const sanitizePrompt = (prompt) => {
	const matchBackslashes = /[\/]/g;
	return prompt.replace(matchBackslashes, ' ').trim();
};

const nonNullableProps = (props) =>
	filterObject(props, ([key, value]) => value !== null);
