# CDS Page builder

Ok, we now have a way to keep track of all CDS pages and build it the right way

This builder has a potential to grow and become a great tool once you master it. You can create templates and layouts that you can use later in an email project.

All you need to run this builder is docker.

## How it works

- Clone this repo in your macine and then cd into it
- Run ```docker-compose up -d``` to start, thic command will install all dependencies to run MJML and other tool to create emails
- Run ```docker-compose exec web npm run browsersync``` and them hit ```CTRL+P CTRL+Q``` to get back to the terminal, now your emails can be preview in browser-sync mode, check [http://localhost:9000/](http://localhost:9000/). At this time docker has set up a local machine to create email and preview them.
- Run ```docker-compose exec web /bin/bash``` to access docker machine from terminal.

npm run browsersync
grunt sass --filename="2weektrial2017" --cwd="WSO"
grunt uglify --filename="2weektrial2017" --cwd="WSO"
node-sass -w public_html/WSO/images/scss/2weektrial2017.scss public_html/WSO/images/css/2weektrial2017.css --source-map=public_html/WSO/images/css/2weektrial2017.map --output-style=compressed