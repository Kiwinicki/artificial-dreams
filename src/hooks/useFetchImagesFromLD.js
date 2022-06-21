import { useState, useEffect } from 'react';

// makes call to Latent Diffusion API
export const useFetchImagesFromLD = ({
	prompt = 'Stop sign',
	stepsNum = 45,
	width = 256,
	height = 256,
	imagesNum = 1,
	diversityScale = 5,
}) => {
	const [resp, setResp] = useState(null);

	useEffect(() => {
		fetch(
			'https://hf.space/embed/multimodalart/latentdiffusion/+/api/predict/',
			{
				method: 'POST',
				body: JSON.stringify({
					data: [prompt, stepsNum, width, height, imagesNum, diversityScale],
				}),
				headers: { 'Content-Type': 'application/json' },
			}
		)
			.then((resp) => {
				return resp.json();
			})
			.then((json) => {
				console.log(json);
				setResp(json);
			})
			.catch((err) => console.warn(err));
	}, []);

	return resp;
};
