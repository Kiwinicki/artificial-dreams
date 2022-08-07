module.exports = {
	pathPrefix: `/artificial-dreams`,
	siteMetadata: {
		title: `Artificial dreams`,
		siteUrl: `https://kiwinicki.github.io/artificial-dreams/`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/favicon.png',
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`,
			},
		},
	],
};
