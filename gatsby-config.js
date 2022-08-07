module.exports = {
	pathPrefix: '/artificial-dreams',
	siteMetadata: {
		title: `Artificial dreams`,
		siteUrl: `https://kiwinicki.github.io/artificial-dreams/`,

		// ...(process.env.NODE_ENV === 'production' && {siteUrl: `https://kiwinicki.github.io/artificial-dreams/`})

		// siteUrl:
		// 	process.env.NODE_ENV === 'production'
		// 		? `https://kiwinicki.github.io/artificial-dreams/`
		// 		: 'https://kiwinicki.github.io/',
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
