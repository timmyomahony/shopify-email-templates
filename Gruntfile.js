module.exports = function(grunt) {

  grunt.initConfig({
    paths: {
      src: 'src/',
      dest: 'dest/'
    },
    inlinecss: {
      main: {
        options: {
          removeStyleTags: false
        },
        files: [
          {
            cwd: '<%= paths.src %>',
            src: ['*.liquid'],
            dest: '<%= paths.dest %>',
            ext: '.inlined.html',
            expand: true
          },
        ]
      }
    },
    includereplace: {
      main: {
        options: {
          prefix: '<!-- @@',
          suffix: ' -->',
          includesDir: '<%= paths.src %>snippets/',
        },
        files: [
          {
            cwd: '<%= paths.dest %>',
            src: ['*.html'],
            dest: '<%= paths.dest %>',
            expand: true
          },
        ]
      }
    },
    watch: {
      emails: {
        files: ["<%= paths.src %>**/*.liquid", "<%= paths.src %>**/*.css"],
        tasks: ["inlinecss", "includereplace"]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-inline-css');

  grunt.registerTask('default', ['watch:emails']);

};
