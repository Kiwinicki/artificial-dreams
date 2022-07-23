import latentDiffusionBg from './images/latent-diffusion-bg.png';
import vqganBg from './images/vqgan-bg.png';
import vdiffusionBg from './images/v-diffusion-bg.png';

// from huggingface.co multimodalart
export const MODELS = Object.freeze({
	latentDiffusion: {
		route: '/create/latentdiffusion',
		bgImg: latentDiffusionBg,
		name: 'Latent Diffusion',
		// outputSchema: {
		// 	data: ['', ['']],
		// 	durations: [],
		// 	avg_durations: [],
		// },
		author: {
			name: 'multimodal.art',
			link: 'https://multimodal.art/',
		},
	},
	vqgan: {
		route: '/create/vqgan',
		bgImg: vqganBg,
		name: 'VQGAN+CLIP (Hypertron v2)',
		inputSchema: [
			{
				name: 'prompt',
				type: 'text',
				minLength: 1,
				defaultValue: 'Hello World!',
			},
			{
				name: 'steps',
				type: 'number',
				min: 1,
				max: 300,
				defaultValue: 50,
				step: 1,
			},
			{
				name: 'width',
				type: 'range',
				min: 32,
				max: 512,
				step: 32,
				valueAsNumber: true,
			},
			{
				name: 'height',
				type: 'range',
				min: 32,
				max: 512,
				step: 32,
				valueAsNumber: true,
			},
			{
				name: 'style',
				type: 'select',
				options: [
					{
						name: 'Hyper Fast Results',
						value: 'Hyper Fast Results',
						selected: true,
					},
					{
						name: 'Default',
						value: 'Default',
					},
					{
						name: 'Balanced',
						value: 'Balanced',
					},
					{
						name: 'Detailed',
						value: 'Detailed',
					},
					{
						name: 'Consistent Creativity',
						value: 'Consistent Creativity',
					},
					{
						name: 'Realistic',
						value: 'Realistic',
					},
					{
						name: 'Smooth',
						value: 'Smooth',
					},
					{
						name: 'Subtle MSE',
						value: 'Subtle MSE',
					},
				],
			},
			{
				name: 'flavor',
				type: 'select',
				options: [
					{ name: 'ginger', value: 'ginger' },
					{ name: 'cumin', value: 'cumin' },
					{ name: 'holywater', value: 'holywater' },
					{ name: 'zynth', value: 'zynth' },
					{ name: 'wyvern', value: 'wyvern' },
					{ name: 'aaron', value: 'aaron' },
					{ name: 'moth', value: 'moth' },
					{ name: 'juu', value: 'juu' },
				],
			},
		],
		// url: 'https://hf.space/embed/multimodalart/vqgan/+/api/predict/',
		author: {
			name: 'multimodal.art',
			link: 'https://multimodal.art/',
		},
	},
	vdiffusion: {
		route: 'vdiffusion',
		bgImg: vdiffusionBg,
		name: 'V-Diffusion',
		url: 'https://hf.space/embed/multimodalart/diffusion/+/api/predict/',
	},
});
