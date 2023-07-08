# # Use an official Node.js runtime as the base image
# FROM node:18.16.0

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json to the working directory
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the entire project to the working directory
# COPY . .

# # Build the React app
# RUN npm run build

# # Specify the command to run the app
# CMD [ "npm", "start" ]


FROM node:13.12.0-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
CMD ["npm", "start"]