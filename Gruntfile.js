'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var options = {
    config : {
      src: './tasks/*.js'
    },
    dev: {
        root:   './public-html',
        style:  './public-html/css/vendor',
        images: './public-html/images',
        script: './public-html/js/vendor',
        font:   './public-html/fonts'
      },
    pkg: grunt.file.readJSON('package.json'),
    // jsonData: grunt.file.readJSON('./data/data.json'),
    replacements: require('./tasks/replacements'), // Regex for refactor task.
    filename: grunt.option('filename'),
    cwd: grunt.option('cwd'),
    filestouglify: grunt.file.readJSON('public_html/'+grunt.option('cwd')+'/images/js/'+grunt.option('filename')+'.json'),
    createtaskrun: [
      'sass',
      'htmlbuild:default',
      'run'
    ]
  };

  // load all grunt tasks
  // require('load-grunt-tasks')(grunt,{pattern: ['grunt-*', 'assemble']},{scope: 'devDependencies'});
  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  // grunt.registerTask('build', ['concat','uglify','less']);
  // grunt.registerTask('default', []);

  grunt.registerTask('default', [
    'uglify'
  ]);
  grunt.registerTask('start', [
    'bower'
  ]);
};
