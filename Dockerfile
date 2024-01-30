# # Dev Container
# # Use the official Node.js image
# FROM node:21

# # Set the environment variable
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Set the timeout big and Install dependencies
# RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# # Copy the rest of the application code
# COPY . .

# # Expose the port that Next.js will run on
# EXPOSE 3000

# # Start the application
# CMD ["npm", "run", "dev"]

##############################################
# Builded Server
# Use the official Node.js image
FROM node:21

# Set the environment variable
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Set the timeout big and Install dependencies
RUN npm config set fetch-retry-maxtimeout 600000 -g && npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Next.js will run on
EXPOSE 3000

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start"]
