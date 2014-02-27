module.exports = function (grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        'banner': {
            'full': [
                '/*!',
                ' * <%= pkg.name %>.js v<%= pkg.version %>',
                ' *',
                ' * Copyright (c) <%= grunt.template.today("yyyy") %>, @pazguille',
                ' * Released under the MIT license.',
                ' */\n'
            ].join('\n'),
            'min': '/*! <%= pkg.name %>.js v<%= pkg.version %> Released under the MIT license. */'
        },

        'concat': {
            'options': {
                'stripBanners': {
                    'options': {
                        'block': true,
                        'line': true
                    }
                }
            },

            'js': {
                'options': {
                    'banner': '<%= banner.full %>'
                },
                'src': ['./<%= pkg.name %>.js'],
                'dest': './dist/<%= pkg.name %>.js'
            }
        },

        'uglify': {
            'options': {
                'mangle': true,
                'banner': '<%= banner.min %>'
            },

            'js': {
                'src': ['<%= concat.js.dest %>'],
                'dest': './dist/<%= pkg.name %>.min.js'
            }

        },

        'jslint': { // configure the task
            'files': ['<%= concat.js.dest %>'],
            'directives': {
                'browser': true,
                'nomen': true,
                'todo': true
            },
            'options': {
                'errorsOnly': true, // only display errors
                'failOnError': false, // defaults to true
                'shebang': true, // ignore shebang lines
            }
        },

        'jasmine': {
            'src': ['dist/<%= pkg.name %>.js'],
            'options': {
                'specs': ['test/spec.js']
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    // Resgister task(s).
    grunt.registerTask('default', []);
    grunt.registerTask('test', ['concat', 'jasmine']);
    grunt.registerTask('lint', ['concat', 'jslint']);
    grunt.registerTask('dev', ['concat']);
    grunt.registerTask('dist', ['concat', 'uglify']);
};