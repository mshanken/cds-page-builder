'use strict';

module.exports = {
  	vendor: {
	  	options: {
			outputStyle: 'compressed',
	      	sourceMap: 'public_html/<%= cwd %>/images/css/<%= filename %>.map'
		},
		dist: {
			files: {
				'public_html/WSO/images/css/main.css': '[public_html/<%= cwd %>/images/scss/<%= filename %>.scss]'
			}
		}
	}
};


