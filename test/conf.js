module.exports = {

	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: __dirname.replace(/\/?test\/?$/, '/'),


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha', 'browserify'],


	// list of files / patterns to load in the browser
	files: [
		'test/shim.js',
		'lib/*.js',
		'lib/**/*.js',
		'test/init.js',
		'test/spec/*.js',
		'test/spec/**/*.js',
	],


	// list of files to exclude
	exclude: [
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'test/shim.js': ['browserify'],
		'lib/*.js': ['browserify'],
		'lib/**/*.js': ['browserify'],
		'test/init.js': ['browserify'],
		'test/spec/*.js': ['browserify'],
		'test/spec/**/*.js': ['browserify'],
	},

	browserify: {
		debug: false,
		ignore: ['jsdom'],
		transform: ['brfs'],
		configure: function (bundle) {
			bundle.ignore('jsdom');
		},
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress'],


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,

	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false
};
