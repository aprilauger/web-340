module.exports = function(grunt) {
	// Grunt task settings
	grunt.initConfig({
		less: {
			// Tells grunt to compile LESS to css
			main: {
				options: {
					paths: ["development"]
				},
				files: {
					"assets/css/styles.css": "development/styles.less"
				}
			}
		}
	});

	// Load the Grunt LESS plugin
	grunt.loadNpmTasks("grunt-contrib-less");

	// Grunt compilation task
	grunt.registerTask("default", ["less"]);
};