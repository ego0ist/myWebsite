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
EXPOSE 3000

# Start the Next.js production server
CMD ["npm", "run", "start"]