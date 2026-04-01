#!/bin/bash
# Task: Simple cleanup script for the project.

echo "Starting project cleanup..."

# Remove log files
rm -f *.log
echo "Removed log files."

# Remove temporary build artifacts
rm -rf ./dist
rm -rf ./.next/cache
echo "Cleaned build artifacts."

# Remove temporary test files
rm -rf ./tmp
echo "Cleaned temporary files."

echo "Cleanup complete!"
