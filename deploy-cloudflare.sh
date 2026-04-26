#!/bin/bash

# Standalone Cloudflare Deployment Script for public-site
# This script handles large assets (APKs) by temporarily moving them out of the public folder
# to bypass Cloudflare Workers' 25MB asset size limit.

BACKUP_DIR="/tmp/temporal_apk_backup"
DOWNLOAD_DIR="public/download"

# Ensure we are in the public-site directory
# If called from elsewhere, this script might need adjustment, but usually it's called via 'bun run'
# which sets the CWD to the package.json directory.

echo "📦 Checking for large assets in $DOWNLOAD_DIR..."

if [ -d "$DOWNLOAD_DIR" ]; then
    echo "⚠️  Temporarily excluding 'download' folder from build to bypass Cloudflare limit..."
    rm -rf "$BACKUP_DIR"
    mv "$DOWNLOAD_DIR" "$BACKUP_DIR"
fi

echo "🚀 Building and Deploying to Cloudflare..."

# Run the original vinext deployment command
# We'll define 'vinext:deploy' in package.json to call 'vinext deploy'
bun run vinext:deploy

DEPLOY_STATUS=$?

if [ -d "$BACKUP_DIR" ]; then
    echo "♻️  Restoring 'download' folder..."
    # Ensure public folder exists (should exist already)
    mkdir -p public
    mv "$BACKUP_DIR" "$DOWNLOAD_DIR"
fi

if [ $DEPLOY_STATUS -eq 0 ]; then
    echo "✨ Done! Your site is live on Cloudflare."
else
    echo "❌ Deployment failed with exit code $DEPLOY_STATUS"
    exit $DEPLOY_STATUS
fi
