module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: [
					'bower_components/angular/angular.js',
					'js/ng-slides.js'
				],
				dest: 'dist/<%= pkg.name %>.min.js'
			}
		},
		cssmin: {
			add_banner: {
				options: {
					banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
				},
				files: {
					'dist/styles.min.css': [
						'bower_components/normalize-css/normalize.css',
						'css/styles.css'
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'cssmin']);

};