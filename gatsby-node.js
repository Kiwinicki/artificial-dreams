const messages = require('./src/i18n/translations.json');
const { languages, defaultLanguage } = require('./src/i18n/i18n');

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
							errorRespMsgPath
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

exports.onCreatePage = async ({
	page,
	actions: { createPage, deletePage },
}) => {
	return new Promise((resolve) => {
		let path = page.path;
		deletePage(page);
		const langKeys = Object.keys(languages);

		for (let lang of langKeys) {
			const isDefaultLang = lang === defaultLanguage;
			if (!isDefaultLang) {
				path = '/' + lang + page.path;
			}
			const pageForLanguage = Object.assign({}, page, {
				path: path,
				context: {
					originalPath: page.path,
					language: lang,
					messages: messages[lang][page.path],
				},
			});
			createPage(pageForLanguage);
		}
		resolve();
	});
};
