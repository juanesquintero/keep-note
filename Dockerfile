FROM node:20-slim AS development

# We don't need the standalone Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

# Install Google Chrome Stable and fonts
# Note: this installs the necessary libs to make the browser work with Puppeteer.
RUN apt-get update && apt-get install gnupg wget -y && \
    wget --quiet --output-document=- https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/google-archive.gpg && \
    sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' && \
    apt-get update && \
    apt-get install google-chrome-stable -y --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

# Create working directory
WORKDIR /usr/code

# Clean npm
RUN npm install glob rimraf
RUN npm cache clean --force

# Copy package.json
COPY package.json ./

# Install NPM dependencies for function
RUN npm install
RUN npm install @nrwl/nx-linux-x64-gnu

# Copy all assets
COPY . .

# Expose apps
# Angular
EXPOSE 4200
# NestJS
EXPOSE 3000
EXPOSE 9229

