/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'loop-scroll': 'loop-scroll 20s linear infinite'
			},
			keyframes: {
				'loop-scroll': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' }
				}
			}
		},
		backgroundSize: {
			'2x': '97px'
		}
	},
	plugins: [],
}
