# 1. Build bosqichi
FROM node:22-slim AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
COPY vite.config.js ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your app runs on
EXPOSE 5173

# Define the command to run your application
CMD ["npm", "run", "dev"]


# production stage
#FROM nginx:stable-alpine
#WORKDIR /app
#RUN rm /etc/nginx/conf.d/default.conf
#COPY nginx.conf /etc/nginx/conf.d
#COPY dist /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
