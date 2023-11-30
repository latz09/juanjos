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
			dark: '#001E1D',
			light: '#F2FFFF',
			primary: '#00C9C1',		
			
			
		},
	},
	plugins: [],
};
