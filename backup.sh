#!/bin/bash
DATE=$(date '+%Y%m%d_%H%M%S')
BACKUP_DIR="/Volumes/Untitled/Sanuji Class/Backups"
PROJECT_NAME="tech-space"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Create zip archive
zip -r "$BACKUP_DIR/${PROJECT_NAME}_${DATE}.zip" \
    . \
    -x "node_modules/*" \
    -x "dist/*" \
    -x ".git/*" \
    -x "*.zip"

echo "Backup created at: $BACKUP_DIR/${PROJECT_NAME}_${DATE}.zip"
