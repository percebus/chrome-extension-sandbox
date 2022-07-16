module.exports = (grunt) => {
  'use strict'

  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*', '!grunt-template-*']
  })

  grunt.initConfig({
    jsonlint: {
      options: { prose: true },
      npm: ['package*.json'],
      chrome: ['manifest.json']
    },
    htmllint: {
      options: { force: true, htmllintrc: true },
      index: ['src/app/**/*.html']
    },
    clean: {
      dist: 'dist'
    },
    copy: {
      dist: {
        files: [
          { cwd: 'src/assets/', expand: true, src: ['**'], dest: 'dist' },
          { cwd: 'src/app/', expand: true, src: ['**/*.html'], dest: 'dist' },
          { expand: true, src: ['LICENSE**'], dest: 'dist' }
        ]
      }
    },
    uglify: {
      // options: { mangle: false },
      app: {
        files: {
          'dist/background/service_worker.min.js': ['src/app/background/service_worker.js'],
          'dist/options/options.min.js': ['src/app/options/options.js'],
          'dist/popups/default/default_popup.min.js': ['src/app/popups/default/default_popup.js']
        }
      }
    }
  })

  grunt.registerTask('lint:json', ['jsonlint'])
  grunt.registerTask('lint:html', ['htmllint'])
  grunt.registerTask('lint', ['lint:json', 'lint:html'])

  grunt.registerTask('dist', ['clean', 'copy', 'uglify'])

  grunt.registerTask('default', ['lint'])
}
