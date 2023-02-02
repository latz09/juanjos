/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		fontFamily: {
			roboto: ['Roboto Slab', 'serif'],
			cinzel: ['Cinzel', 'serif'],
		},
		colors: {
			dark: '#1D3150',
			light: '#FFFBE8',
			primary: '#FF3A54',		
			'secondary-light': '#BBE9DF',
			'secondary-dark': '#00C9C1',
			
		},
	},
	plugins: [],
};
