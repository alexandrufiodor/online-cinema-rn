/** @type {import('tailwindcss').Config} */
const { white, transparent, red } = require('tailwindcss/colors')
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/preset')],
	theme: {
		colors: {
			primary: '#BF3335',
			gray: {
				DEFAULT: '#282828',
				500: '#1D1D1D'
			},
			black: '#030207',
			white: white,
			transparent: transparent,
			red: red['500']
		},
		extend: {
			zIndex: {
				1: '1'
			}
		}
	},
	plugins: []
}
