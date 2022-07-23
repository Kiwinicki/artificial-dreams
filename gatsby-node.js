exports.createPages = async function ({ actions, graphql }) {
	const { data } = await graphql(`
		{
			allModelsJson {
				nodes {
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
						}
						defaultValues {
							prompt
							steps
							imgCount
							weight
							clipGuided
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
					}
					id
					key
					name
					route
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
