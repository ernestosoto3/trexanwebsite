echo "🔨 Building production..."
NODE_ENV=production npm run build

echo "📁 Copying public assets to standalone..."
cp -r public .next/standalone/
cp -r .next/static .next/standalone/.next/

echo "✅ Production build complete!"
echo "Run: node .next/standalone/server.js"
