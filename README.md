# Tree-stack

> A simple Tree-obsessed searching application.

## Development

```bash
# Install mongo on your computer

# Launch the server
cd server && \
  npm install && \ # Install dependencies
  npm run init:db && \ # Populate the database with many trees
  npm run start # Start the server

# Start the client development server
cd client && npm run dev

# Then go to http://localhost:8080 with your browser
```

## Build

```bash
# You can generate a minify build for the client
# which will be served statically automatically through the Express server at the root path '/'
cd client && npm run build

# Start the server
cd server && npm run start

# Then go to http://localhost:3000 with your browser to access
# Statically minified client
```

> Happy tree searching!