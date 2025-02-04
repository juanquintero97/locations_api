# Base image
FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Copy the .env and .env.development files
COPY .env .env.dev ./

# Creates a "dist" folder with the app build
RUN npm run build

# Expose the port on which the app will run
EXPOSE 3000

# Start the server using the build
CMD ["npm", "run", "start:dev"]
