exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		{
			allModelsJson {
				nodes {
					name
					route
					key
					form {
						inputs {
							name
							type
							label
							placeholder
							min
							max
							step
							stepList
							options {
								name
								value
							}
							rules {
								required
								valueAsNumber
							}
							watched
							required
							minLength
							options {
								name
								value
							}
						}
						requestSchema {
							url
							method
							body {
								data
							}
							headers {
								Content_Type
							}
						}
						responseSchema {
							durationRespPath
							imagesRespPath
						}
						defaultValues {
							prompt
							height
							width
							steps
							imgCount
							diversityScale
							weight
							style
							flavor
							clipGuided
						}
					}
				}
			}
		}
	`);

	data.allModelsJson.nodes.forEach((data) => {
		const route = data.route;
		actions.createPage({
			path: route,
			component: require.resolve(`./src/templates/ModelPage/ModelPage.js`),
			context: data,
		});
	});
};
