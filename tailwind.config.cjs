const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	daisyui: {
		logs: false,
		themes: [
			{
				aethor: {
					primary: '#06283D',
					'primary-content': '#ffff',
					secondary: '#1363DF',
					accent: '#783aa8',
					neutral: '#191D24',
					'base-100': '#2A303C',
					'base-200': '#262b36',
					'base-300': '#272d38',
					info: '#3ABFF8',
					success: '#36D399',
					warning: '#FBBD23',
					error: '#F87272'
				}
			}
		]
	},
	plugins: [forms, typography, daisyui]
};

module.exports = config;
