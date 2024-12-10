# state the node version for the application
FROM node:20-alpine

# make the working directory for the docker image
WORKDIR /app

# copy the dependinces to the working directory
COPY ./package*.json ./

# install the dependinces
RUN npm install

# copy the files 
COPY . .

# run the appp
CMD ["npm","start"]