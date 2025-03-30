#!/bin/bash

# Load PATH_REMOTE_DEV from .env file
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env file not found!"
  exit 1
fi

if [ -z "$PATH_REMOTE_DEV" ]; then
  echo "PATH_REMOTE_DEV is not set in .env"
  exit 1
fi

# Set dev settings to true
cat <<EOF > dev-settings.json
{
  "isDev": true
}
EOF

cat dev-settings.json

# Build the project
pnpm run build

# Sync dist to remote path
rsync -avz --delete dist/ "$PATH_REMOTE_DEV"

# Set dev settings to false
cat <<EOF > dev-settings.json
{
  "isDev": false
}
EOF

cat dev-settings.json

echo "Deploy on DEV successful"