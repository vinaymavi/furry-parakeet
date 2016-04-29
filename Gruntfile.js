/**
 * Created by vku131 on 4/29/2016.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            build: ['Gruntfile.js', 'handlebars/**/*.js', 'mustache/**/*.js','sass_exp/**/*.js']
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: 'localhost',
                    debug: true,
                    livereload: 35729,
                    open: true
                }
            }
        },
        watch: {
            js: {
                files: ['handlebars/**/*.js', 'mustache/**/*.js','sass_exp/**/*.js'],
                task: ['jshint'],
                options: {
                    livereload: '<%= connect.server.options.livereload %>'
                }
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register Task
    grunt.registerTask('default', ['jshint','connect','watch:js']);
};