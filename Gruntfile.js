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
      htmllint: ['.htmllintrc'],
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
    },
    shell: {
      options: { stderr: true },
      standardx: 'standardx --fix __tests__/**/*.js',
      standardx_Gruntfile: 'standardx --fix Gruntfile.js'
    }
  })

  grunt.registerTask('lint:js:Gruntfile', ['shell:standardx_Gruntfile'])
  grunt.registerTask('lint:js', ['shell:standardx'])
  grunt.registerTask('lint:json', ['jsonlint'])
  grunt.registerTask('lint:html', ['htmllint'])
  grunt.registerTask('lint', ['lint:json', 'lint:html', 'lint:js'])

  grunt.registerTask('dist', ['lint', 'clean', 'copy', 'uglify'])

  grunt.registerTask('default', ['lint'])
  grunt.task.run('lint:js:Gruntfile')
}
