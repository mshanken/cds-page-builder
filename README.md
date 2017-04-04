# CDS Page builder

Ok, we now have a way to keep track of all CDS pages (custom subscriptions web form) and build it the right way

This builder has a potential to grow and become a great tool once you master it.

All you need to run this builder is docker.

## How it works

- Clone this repo in your macine and then cd into it
- Run ```docker-compose up -d``` to start, browse working page at check [http://localhost:9000/WSO/2weektrial2017.html](http://localhost:9000/WSO/2weektrial2017.html)
- Run ```docker-compose exec web npm run browsersync``` and them hit ```CTRL+P CTRL+Q``` to get back to the terminal, now can be preview you pages in browser-sync mode, check [http://localhost:3000/WSO/2weektrial2017.html](http://localhost:3000/WSO/2weektrial2017.html).
- Run ```docker-compose exec web /bin/bash``` to access docker machine from terminal again, so you can run grunt, node-sass or npm.
	* Once you are in you can run grunt uglify --filename="projectname" --cwd="site/mag" e.g. ```grunt uglify --filename="2weektrial2017" --cwd="WSO"``` 
	* Style sheet are processed with SASS use this command node-sass -w path/to/sass-scss/file.scss path/to/css/file.css --source-map=path/to/css-map/file.map --output-style=compressed e.g ```node-sass -w public_html/WSO/images/scss/2weektrial2017.scss public_html/WSO/images/css/2weektrial2017.css --source-map=public_html/WSO/images/css/2weektrial2017.map --output-style=compressed```
	