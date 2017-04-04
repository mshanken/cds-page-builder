FROM node:6.9.4
LABEL maintainer="M. Shanken Communications <dev@mshanken.com>"
LABEL description="Node 6.9.4"

# set up node user
RUN npm install -g grunt-cli express-generator browser-sync node-sass
ENV HOME /home/node
ENV PWD .

COPY package.json $HOME

ADD $PWD $HOME
WORKDIR $HOME

RUN chown -R www-data:www-data $HOME \
	&& npm install

EXPOSE 9000

CMD node scripts/server.js
