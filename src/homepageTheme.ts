// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const homepageTheme: CustomThemeConfig = {
	name: 'homepageTheme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "4px",
		"--theme-rounded-container": "4px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #4125d0 
		"--color-primary-50": "227 222 248", // #e3def8
		"--color-primary-100": "217 211 246", // #d9d3f6
		"--color-primary-200": "208 201 243", // #d0c9f3
		"--color-primary-300": "179 168 236", // #b3a8ec
		"--color-primary-400": "122 102 222", // #7a66de
		"--color-primary-500": "65 37 208", // #4125d0
		"--color-primary-600": "59 33 187", // #3b21bb
		"--color-primary-700": "49 28 156", // #311c9c
		"--color-primary-800": "39 22 125", // #27167d
		"--color-primary-900": "32 18 102", // #201266
		// secondary | #9522bf 
		"--color-secondary-50": "239 222 245", // #efdef5
		"--color-secondary-100": "234 211 242", // #ead3f2
		"--color-secondary-200": "229 200 239", // #e5c8ef
		"--color-secondary-300": "213 167 229", // #d5a7e5
		"--color-secondary-400": "181 100 210", // #b564d2
		"--color-secondary-500": "149 34 191", // #9522bf
		"--color-secondary-600": "134 31 172", // #861fac
		"--color-secondary-700": "112 26 143", // #701a8f
		"--color-secondary-800": "89 20 115", // #591473
		"--color-secondary-900": "73 17 94", // #49115e
		// tertiary | #ff7ae2 
		"--color-tertiary-50": "255 235 251", // #ffebfb
		"--color-tertiary-100": "255 228 249", // #ffe4f9
		"--color-tertiary-200": "255 222 248", // #ffdef8
		"--color-tertiary-300": "255 202 243", // #ffcaf3
		"--color-tertiary-400": "255 162 235", // #ffa2eb
		"--color-tertiary-500": "255 122 226", // #ff7ae2
		"--color-tertiary-600": "230 110 203", // #e66ecb
		"--color-tertiary-700": "191 92 170", // #bf5caa
		"--color-tertiary-800": "153 73 136", // #994988
		"--color-tertiary-900": "125 60 111", // #7d3c6f
		// success | #4dff55 
		"--color-success-50": "228 255 230", // #e4ffe6
		"--color-success-100": "219 255 221", // #dbffdd
		"--color-success-200": "211 255 213", // #d3ffd5
		"--color-success-300": "184 255 187", // #b8ffbb
		"--color-success-400": "130 255 136", // #82ff88
		"--color-success-500": "77 255 85", // #4dff55
		"--color-success-600": "69 230 77", // #45e64d
		"--color-success-700": "58 191 64", // #3abf40
		"--color-success-800": "46 153 51", // #2e9933
		"--color-success-900": "38 125 42", // #267d2a
		// warning | #ffa200 
		"--color-warning-50": "255 241 217", // #fff1d9
		"--color-warning-100": "255 236 204", // #ffeccc
		"--color-warning-200": "255 232 191", // #ffe8bf
		"--color-warning-300": "255 218 153", // #ffda99
		"--color-warning-400": "255 190 77", // #ffbe4d
		"--color-warning-500": "255 162 0", // #ffa200
		"--color-warning-600": "230 146 0", // #e69200
		"--color-warning-700": "191 122 0", // #bf7a00
		"--color-warning-800": "153 97 0", // #996100
		"--color-warning-900": "125 79 0", // #7d4f00
		// error | #ff1e00 
		"--color-error-50": "255 221 217", // #ffddd9
		"--color-error-100": "255 210 204", // #ffd2cc
		"--color-error-200": "255 199 191", // #ffc7bf
		"--color-error-300": "255 165 153", // #ffa599
		"--color-error-400": "255 98 77", // #ff624d
		"--color-error-500": "255 30 0", // #ff1e00
		"--color-error-600": "230 27 0", // #e61b00
		"--color-error-700": "191 23 0", // #bf1700
		"--color-error-800": "153 18 0", // #991200
		"--color-error-900": "125 15 0", // #7d0f00
		// surface | #1c1c1c 
		"--color-surface-50": "221 221 221", // #dddddd
		"--color-surface-100": "210 210 210", // #d2d2d2
		"--color-surface-200": "198 198 198", // #c6c6c6
		"--color-surface-300": "164 164 164", // #a4a4a4
		"--color-surface-400": "96 96 96", // #606060
		"--color-surface-500": "28 28 28", // #1c1c1c
		"--color-surface-600": "25 25 25", // #191919
		"--color-surface-700": "21 21 21", // #151515
		"--color-surface-800": "17 17 17", // #111111
		"--color-surface-900": "14 14 14", // #0e0e0e
	}
}
