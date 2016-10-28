var buildSourceMaps = false;

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        "pkg": grunt.file.readJSON('package.json'),

        "manifest": {
            generate: {
                options: {
                    basePath: 'dist/',
                    cache: [
                        'index.html',
                        'app.js',
                        'app.css'
                    ],
                    timestamp: true,
                    hash: true,
                    master: ['index.html']
                },
                src: [
                  'dist/**'
                ],
                dest: 'dist/cache.manifest'
            }
        },
        "concat": {
            options: {
                // the banner is inserted at the top of the output
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: buildSourceMaps
            },

            CSS: {
                src: [
                    "node_modules/angular-material/angular-material.css",
                    "./app/css/**/*.*"
                ],
                dest: "dist/app.css"
            },
            JS: {
                src:  [
                    "node_modules/angular/angular.js",
                    "node_modules/angular-sanitize/angular-sanitize.js",
                    "node_modules/angular-ui-router/release/angular-ui-router.js",
                    "node_modules/oclazyload/dist/ocLazyLoad.js",
                    "node_modules/angular-resource/angular-resource.js",
                    "node_modules/angular-animate/angular-animate.js",
                    "node_modules/angular-aria/angular-aria.js",
                    "node_modules/angular-messages/angular-messages.js",
                    "node_modules/angular-material/angular-material.js",
                    "./app/**/*.js"
                ],
                dest: "dist/app.js"
            }
        },
        "copy": {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'app',
                        src: ['index.html', 'cache.manifest', 'partials/**/*.*'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        "processhtml": {
            options: {
                // Task-specific options go here. 
            },
            dist: {
                files: {
                    'dist/index.html': ['dist/index.html']
                }
            }
        },
        "replace": {
            dist: {
                options: {
                    patterns: [
                      {
                          match: 'random',
                          replacement: (new Date()).getYear() + (new Date()).getMonth() + (new Date()).getDay() + "-" + (new Date()).getHours() + (new Date()).getMinutes() + (new Date()).getSeconds() + (new Date()).getMilliseconds()
                      }
                    ]
                },
                files: [
                  {
                      expand: true,
                      flatten: true,
                      src: ['dist/index.html'],
                      dest: 'dist/'
                  }
                ]
            }
        },
        "clean": ['dist']
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'processhtml', 'concat', 'manifest', 'replace']);
};