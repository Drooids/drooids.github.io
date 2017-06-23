module.exports = function(grunt) {
  var paths = {
    assets: 'src/assets/**/*',
    css: 'src/css/*.css',
    libs: [
      'lib/phaser.min.js',
      'lib/phaser-plugin-isometric.min.js'
    ],
    js: [
      'src/js/**/*.js'
    ],
    build: './build/'
  };

  grunt.initConfig({
    connect: {
      server: {
        options: {
          // port: process.env.PORT,
          hostname: process.env.IP,
          port: 8080,
          // hostname: '0.0.0.0',
          base: 'src'
        }
      }
    },
    clean: {
      build: {
        src: paths.build
      }
    },
    copy: {
      assets: {
        src: paths.assets,
        dest: paths.build + 'assets/',
        filter: 'isFile',
        expand: true,
        flatten: true
      },
      libs: {
        src: paths.libs,
        dest: paths.build,
        filter: 'isFile',
        expand: true,
        flatten: true
      },
    },
    uglify: {
      src: {
        files: [{
          src: paths.js,
          dest: paths.build + 'main.min.js'
        }]
      }
    },
    cssmin: {
      src: {
        files: [{
          src: paths.css,
          dest: paths.build + 'main.min.css'
        }]
      }
    },
    processhtml: {
      src: {
        files: [{
          src: 'src/index.html',
          dest: paths.build + 'index.html'
        }]
      }
    },
    htmlmin: {
      src: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          src: paths.build + 'index.html',
          dest: paths.build + 'index.html'
        }]
      }
    },
    compress: {
      src: {
        options: {
          archive: 'build.zip'
        },
        files: [{
          src: paths.build + '**/*',
          dest: './'
        }]
      }
    },
    watch: {
      src: {
        options: {
          livereload: true
        },
        files: ['./src/index.html',
          paths.css,
          paths.js
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-compress');

  grunt.registerTask('default', [
    'connect',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy:assets',
    'copy:libs',
    'uglify',
    'cssmin',
    'processhtml',
    'htmlmin'
  ]);

  grunt.registerTask('zip', [
    'build',
    'compress'
  ]);
};
