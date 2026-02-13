#!/bin/zsh
if [ -f "$DEPLOY_DIR/.next/BUILD_ID" ]; then
  echo "✅ BUILD_ID exists:"
  cat "$DEPLOY_DIR/.next/BUILD_ID"
else
  echo "❌ BUILD_ID missing!"
fi
