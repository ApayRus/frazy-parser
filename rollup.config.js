import babel from '@rollup/plugin-babel'

export default {
	input: './index.js',
	output: {
		file: 'bundle.esm.js',
		format: 'esm'
	},
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}
