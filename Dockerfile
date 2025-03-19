# ---- Stage 1: Build the Next.js application ----
FROM node:18-alpine AS builder

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Next.js app
RUN npm run build


# ---- Stage 2: Run the built app ----
FROM node:18-alpine AS runner

# Set NODE_ENV to production for better performance
ENV NODE_ENV=production

# Create and use app directory
WORKDIR /app

# Copy only the necessary files for running the app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
# (Optional) If you have a custom next.config.js, include it too
# COPY --from=builder /app/next.config.js ./next.config.js

# Expose the port Next.js runs on
EXPOSE 80
 

# Installiere Git
RUN apk add --no-cache git
 

# Klone das Git-Repository (falls es noch nicht existiert)
RUN git clone https://github.com/ego0ist/myWebsite .

# Stellt sicher, dass das Repo immer aktuell ist
CMD git pull origin main && npm start
