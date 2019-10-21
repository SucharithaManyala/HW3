FROM node:carbon
# Create app directory
WORKDIR /usr/src/app

#to add all of the code from this folder to the WORKDIR
COPY ./ ./
# need to install node packages
RUN npm install
#
EXPOSE 8080
CMD [ "node", "backend/server.js" ]

# docker build -t sjr/node-example .
# docker run -p 3003:8080 sjr/node-example
