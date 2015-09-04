module.exports = function(grunt){

	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'src/style/css/app.css': 'src/style/sass/app.scss',
					//'src/style/css/general.css': 'src/style/sass/general.scss',
					//'src/style/css/overwrite.css': 'src/style/sass/overwrite.scss'
				}
			}
		},

		watch: {
			scripts: {
			files: 'src/style/sass/*.scss',
			tasks: ['sass'],
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

}