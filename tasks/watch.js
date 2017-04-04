'use strict';

module.exports = {
  scripts: {
    files: ['public_html/<%= cwd %>/images/scss/<%= filename %>.scss','public_html/<%= cwd %>/images/js/vendor/<%= filename %>.js'],
    tasks: ['sass','uglify'],
    options: {
      spawn: false,
    },
  }
};