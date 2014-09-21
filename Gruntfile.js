module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['uglify']
			},
			styles: {
				files: ['css/*.css'],
				tasks: ['cssmin']
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'bower_components/angular/angular.js',
					'bower_components/angular-animate/angular-animate.js',
					'js/ng-slides.js'
				],
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			build: {
				options: {
					banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'dist/styles.min.css': [
						'bower_components/normalize-css/normalize.css',
						'css/styles.css',
						'css/presentation.css'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', ['uglify', 'cssmin']);

};