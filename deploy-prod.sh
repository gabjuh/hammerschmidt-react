#!/bin/bash

# Load PATH_REMOTE_PROD from .env file
if [ -f ".env" ]; then
  export $(grep -v '^#' .env | xargs)
else
  echo ".env file not found!"
  exit 1
fi

if [ -z "$PATH_REMOTE_PROD" ]; then
  echo "PATH_REMOTE_PROD is not set in .env"
  exit 1
fi


# Build the project
pnpm run build

# Sync dist to remote path
rsync -avz --delete dist/ "$PATH_REMOTE_PROD"

echo "Deploy on PROD successful"
