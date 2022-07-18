import { useState, useEffect, useCallback } from 'react';

export const states = {
	empty: 'empty',
	loading: 'loading',
	error: 'error',
	loaded: 'loaded',
};

// You can initialize hook with empty obj and executeFetch it with args later (eg. onSubmit)
export const useFetch = ({ url, options, immediate = false }) => {
	const [data, setData] = useState(null);
	const [currentState, setCurrentState] = useState(states.empty);

	const executeFetch = useCallback(
		async (url, options) => {
			setCurrentState(states.loading);
			try {
				const resp = await fetch(url, options);
				const json = await resp.json();
				setData(json);
				if (!resp.ok) {
					throw Error(
						`HTTP error status: ${
							resp.status
						}. Returned informations: ${JSON.stringify(json)}`
					);
				}
				setCurrentState(states.loaded);
			} catch (err) {
				setCurrentState(states.error);
				console.error(err);
			}
		},
		[url, options]
	);

	useEffect(() => {
		if (immediate && url) {
			executeFetch(url, options);
		}
	}, []);

	return { data, currentFetchState: currentState, executeFetch };
};
