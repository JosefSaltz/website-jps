FROM denoland/deno:2.2.6 AS builder

# Set the working directory in the container
WORKDIR /app

# Bundle app source inside Docker image
COPY . .

# Install ca-certificates for Sentry Source map upload
RUN apt-get update && apt-get install -y ca-certificates

# Install any needed packages specified in package.json
RUN deno install --allow-scripts

RUN deno task build

# Use Deno as a new stage to serve the application
FROM denoland/deno:alpine-2.2.6

# Set the working directory in the container
WORKDIR /app

COPY --from=builder /app/build ./build

COPY --from=builder ["/app/deno*", "/app/package*", "./"]

CMD ["deno", "task", "serve"]