# Stage 1: Build the application
FROM node:20-slim AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Caddy
FROM caddy:2-alpine

WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/dist /usr/share/caddy

# Copy the public directory
COPY public/ /usr/share/caddy/public

# Expose the port Caddy listens on
EXPOSE 8080
