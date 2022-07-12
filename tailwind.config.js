const defaultTheme = require('tailwindcss/defaultTheme');

const backgroundRGB = '28,28,28';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			xs: '320px',
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				background: `rgb(${backgroundRGB})`,
				'on-background': 'white',
				surface: '#303030',
				'on-surface': 'white',
				primary: 'rgb(22, 101, 52)',
				'on-primary': 'red',
				'primary-dark': 'lime',
				'primary-light': 'blue',
				secondary: 'red',
				'on-secondary': 'white',
				'secondary-dark': 'blue',
				'secondary-light': 'yellow',
				'on-secondary': 'black',
				warning: 'rgb(245 158 11)',
				error: 'rgb(220 38 38)',
			},
			backgroundImage: {
				'hero-section': `linear-gradient(180deg, rgba(${backgroundRGB},1) 3%, rgba(0,0,0,0) 50%, rgba(${backgroundRGB},1) 97%)`,
			},
			keyframes: {
				'bounce-horizontal': {
					'0%, 100%': {
						transform: 'translateX(0)',
						'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
					},
					'50%': {
						transform: 'translateX(25%)',
						'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
					},
				},
				rotate: {
					'0%': {
						transform: 'rotate(0deg)',
					},
					'100%': {
						transform: 'rotate(360deg)',
					},
				},
			},
			animation: {
				'bounce-horizontal': 'bounce-horizontal 1s infinite',
			},
		},
	},
	plugins: [],
};
