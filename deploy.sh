#!/bin/bash
# ==========================================================================
# SANÉH AUTOMATED DEPLOYMENT SCRIPT FOR NETLIFY (VIA GITHUB)
# ==========================================================================

# Navigate to the script's directory
cd "$(dirname "$0")"

echo "----------------------------------------------"
echo "🚀 Starting SANÉH Web Deployment..."
echo "----------------------------------------------"

# Configure Git to remember username and token in Mac Keychain
git config --global credential.helper osxkeychain

echo "📦 Staging changed files..."
git add .

# Prompt or use default commit message
COMMIT_MSG="Update Saneh Web: $(date '+%Y-%m-%d %H:%M:%S')"
echo "✍️ Committing changes with message: '$COMMIT_MSG'"
git commit -m "$COMMIT_MSG"

echo "📤 Pushing code to GitHub repository..."
echo "(Note: If prompted, enter your GitHub Username and Personal Access Token)"
git push -u origin main

if [ $? -eq 0 ]; then
  echo "----------------------------------------------"
  echo "✅ Success! Code has been pushed to GitHub."
  echo "🌐 Netlify is now automatically rebuilding and deploying your site!"
  echo "🔗 Visit: https://saneferfume.netlify.app"
  echo "----------------------------------------------"
else
  echo "----------------------------------------------"
  echo "❌ Error: Git push failed. Please verify your credentials/token."
  echo "----------------------------------------------"
fi
read -p "Press Enter to exit..."
