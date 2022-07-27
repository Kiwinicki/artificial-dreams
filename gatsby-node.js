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
							watched
							rules {
								required
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
							duration
							images
						}
						defaultValues {
							clipGuided
							diversityScale
							height
							imgCount
							prompt
							steps
							weight
							width
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
			component: require.resolve(`./src/components/Layouts/ModelPageLayout.js`),
			context: data,
		});
	});
};
