module.exports = {
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['react', 'jest'],
	env: {
		es6: true,
		jquery: true,
		browser: true,
		node: true,
		jest: true
	},

	globals: {
		DS: true,
		_: true,
		Highcharts: true,
		jest: true
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		quotes: ['error', 'single', { allowTemplateLiterals: true }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'no-unused-vars': 1,
		'no-undef': 'warn',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'no-trailing-spaces': 'error',
		'newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }],
		'object-curly-spacing': ['error', 'never', { objectsInObjects: true }],
		semi: ['error', 'always'],
		'react/jsx-uses-vars': 1,
		'react/no-unused-prop-types': 2,
		'react/jsx-no-duplicate-props': 2,
		'react/require-render-return': 1,
		'jest/no-disabled-tests': 'warn',
		'jest/no-focused-tests': 'error',
		'jest/no-identical-title': 'error',
		'jest/valid-expect': 'error',
		'key-spacing': [
			1,
			{
				singleLine: {
					beforeColon: false,
					afterColon: true,
					mode: 'minimum'
				},
				multiLine: {
					beforeColon: false,
					afterColon: true,
					align: 'colon',
					mode: 'minimum'
				}
			}
		],
		'max-len': [
			1,
			{
				code: 160,
				tabWidth: 4,
				ignoreComments: true,
				ignoreUrls: true
			}
		],
		'require-jsdoc': 'off',
		'one-var': 'off',
		'spaced-comment': 'off'
	}
};
