/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				darkBlue: '#000920',
				lightBlue: '#1758FF',
				bluishWhite: '#F7F9FC',
			},
			boxShadow: {
				onHover: '0 0 0 2px #fff, 0 0 0 4px #1758FF',
			},
		},
	},
	plugins: [],
}
