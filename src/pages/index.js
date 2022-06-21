import React from 'react';

import Header from '../components/Header/';
import { useFetchImagesFromLD } from '../hooks/useFetchImagesFromLD';

const IndexPage = () => {
	const prompt = 'stop sign';

	const resp = useFetchImagesFromLD({
		prompt,
		stepsNum: 45,
		width: 256,
		height: 256,
		imagesNum: 2,
		diversityScale: 5,
	});

	return (
		<>
			<Header />
			<main>
				<h1>index page</h1>
				{resp?.data[1].length > 0 ? (
					resp.data[1].map((imageInfo, i) => (
						<img src={imageInfo} alt={`${prompt} (${i})`} key={i} />
					))
				) : (
					<p>loading...</p>
				)}
			</main>
		</>
	);
};

export default IndexPage;
