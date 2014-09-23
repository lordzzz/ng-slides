module.exports = function(grunt) {
	
	var _banner = '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n';
	
	var _jsFiles = [
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'js/ng-slides.js'
	];
	
	var _cssFiles = [
		'bower_components/normalize-css/normalize.css',
		'css/styles.css',
		'css/presentation.css'
	];

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat:dev_js']
			},
			styles: {
				files: ['css/*.css'],
				tasks: ['concat:dev_css']
			}
		},
		uglify: {
			options: {
				banner: _banner
			},
			build: {
				src: _jsFiles,
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			build: {
				options: {
					banner: _banner
				},
				files: {
					'dist/styles.min.css': _cssFiles
				}
			}
		},
		concat: {
			dev_js: {
				src: _jsFiles,
				dest: 'dist/<%= pkg.name %>.min.js',
			},
			dev_css: {
				src: _cssFiles,
				dest: 'dist/styles.min.css',
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify:build', 'cssmin:build']);

};