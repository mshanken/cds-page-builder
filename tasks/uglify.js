'use strict';

module.exports = {
  	vendor: {
        options: {
	        sourceMap: true,
	        sourceMapName: 'public_html/<%= cwd %>/images/js/<%= filename %>.map'
        },
        files: {
        	'public_html/<%= cwd %>/images/js/<%= filename %>.min.js': '<%= filestouglify.files %>'
        }
    }
};