module.exports = function(grunt){

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': true
				},
				src: ['index.html']
			}
		},
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['assets/js/base.js', 'assets/js/base2.js'],
				tasks: ['uglify', 'processhtml']
			}
		},
		uglify: {
			build: {
				files: {
					'build/js/base.min.<%= grunt.template.today("yyyymmdd") %>.js': ['assets/js/base.js', 'assets/js/base2.js']
				}
			}
		},
		processhtml: {
			options: {
				data: {
					date: grunt.template.today("yyyymmdd")
				}
			},
			dist: {
				files: {
					'build/index.html': ['index.html']
				}
			}
		}
    });

    grunt.registerTask('default', []);

};