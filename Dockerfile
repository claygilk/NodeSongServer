# Image with Node.js already installed
FROM node:12

# Set and crate alias for working directory?
WORKDIR /app

# Copy .json files from root directory into image
COPY package*.json ./

# Install dependencies with npm
RUN npm install

# Copy all files from root directory to docker image
COPY . . 

# Run docker image on port 3000 (internally)
ENV PORT=3000

# Run docker containers on port 3000 (of host machine)
EXPOSE 3000

# Set command to run docker container
CMD ["npm", "start"]