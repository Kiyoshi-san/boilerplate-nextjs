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
FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile
RUN npm i next@14.1.0
# PART 2 ----------------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build
# PART 3 ----------------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
