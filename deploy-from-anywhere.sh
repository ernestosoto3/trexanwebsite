#!/bin/bash

# ============================================================================
# TREXAN WEBSITE - DEPLOYMENT PREPARATION SCRIPT
# ============================================================================
# Can be run from anywhere (like ~/Downloads)
# Will ask for your project location
# ============================================================================

echo "🚀 Trexan Website - Deployment Preparation Script"
echo "═══════════════════════════════════════════════════════════════"
echo ""

# ============================================================================
# GET PROJECT LOCATION
# ============================================================================

# Try to detect common project locations
POSSIBLE_LOCATIONS=(
  "${HOME}/trexan-website"
  "${HOME}/Desktop/trexan-website"
  "${HOME}/Documents/trexan-website"
  "${HOME}/Downloads/trexan-website"
  "${HOME}/Projects/trexan-website"
  "$(pwd)/trexan-website"
)

echo "🔍 Looking for your project..."
echo ""

PROJECT_DIR=""
for dir in "${POSSIBLE_LOCATIONS[@]}"; do
  if [ -d "$dir" ] && [ -f "$dir/package.json" ]; then
    echo "   ✅ Found project at: $dir"
    PROJECT_DIR="$dir"
    break
  fi
done

# If not found automatically, ask user
if [ -z "$PROJECT_DIR" ]; then
  echo "   ℹ️  Could not auto-detect project location"
  echo ""
  echo "📂 Please enter the FULL path to your trexan-website project:"
  echo "   Example: /Users/yourname/trexan-website"
  echo "   Or: ~/Desktop/trexan-website"
  echo ""
  read -p "Project path: " USER_INPUT
  
  # Expand ~ to home directory
  PROJECT_DIR="${USER_INPUT/#\~/$HOME}"
  
  # Verify it exists
  if [ ! -d "$PROJECT_DIR" ]; then
    echo ""
    echo "❌ ERROR: Directory not found: $PROJECT_DIR"
    echo ""
    exit 1
  fi
  
  if [ ! -f "$PROJECT_DIR/package.json" ]; then
    echo ""
    echo "❌ ERROR: No package.json found in $PROJECT_DIR"
    echo "   Make sure this is your Next.js project directory"
    echo ""
    exit 1
  fi
fi

echo ""
echo "✅ Using project directory: $PROJECT_DIR"
echo ""
echo "⚠️  IMPORTANT: Make sure you have a backup before proceeding!"
echo "   Press CTRL+C to cancel, or press ENTER to continue..."
read

# ============================================================================
# CHANGE TO PROJECT DIRECTORY
# ============================================================================
cd "$PROJECT_DIR" || exit 1

echo ""
echo "📍 Working directory: $(pwd)"
echo ""

# ============================================================================
# STEP 1: Remove Sanity Studio
# ============================================================================
echo "🗑️  Step 1/9: Removing Sanity Studio..."

if [ -d "app/studio" ]; then
  sudo rm -rf app/studio 2>/dev/null || rm -rf app/studio
  echo "   ✅ Removed app/studio/"
else
  echo "   ℹ️  app/studio/ not found (already removed)"
fi

if [ -d "sanity" ]; then
  sudo rm -rf sanity 2>/dev/null || rm -rf sanity
  echo "   ✅ Removed sanity/"
else
  echo "   ℹ️  sanity/ not found (already removed)"
fi

if [ -f "proxy.ts" ]; then
  sudo rm -f proxy.ts 2>/dev/null || rm -f proxy.ts
  echo "   ✅ Removed proxy.ts"
else
  echo "   ℹ️  proxy.ts not found (already removed)"
fi

echo "✅ Sanity Studio cleanup complete"
echo ""

# ============================================================================
# STEP 2: Clean Dependencies
# ============================================================================
echo "🧹 Step 2/9: Cleaning dependencies..."
echo "   This may require sudo password for locked files..."
echo ""

# Try with sudo first
if command -v sudo &> /dev/null; then
  sudo rm -rf node_modules 2>/dev/null || {
    echo "   Trying alternative method..."
    chmod -R +w node_modules 2>/dev/null || true
    rm -rf node_modules 2>/dev/null || {
      echo "   Moving to node_modules.old instead..."
      mv node_modules node_modules.old 2>/dev/null || true
    }
  }
else
  # No sudo available
  chmod -R +w node_modules 2>/dev/null || true
  rm -rf node_modules 2>/dev/null || {
    echo "   Moving to node_modules.old instead..."
    mv node_modules node_modules.old 2>/dev/null || true
  }
fi

rm -f package-lock.json 2>/dev/null
echo "✅ Dependencies cleaned"
echo ""

# ============================================================================
# STEP 3: Update package.json
# ============================================================================
echo "📝 Step 3/9: Optimizing package.json..."

cp package.json package.json.backup

cat > package.json << 'EOF'
{
  "name": "trexan-website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "prisma generate && next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate deploy",
    "postinstall": "prisma generate"
  },
  "dependencies": {
    "@prisma/client": "^6.19.2",
    "@react-email/components": "^1.0.4",
    "@sanity/client": "^7.13.2",
    "@sanity/image-url": "^2.0.2",
    "lucide-react": "^0.561.0",
    "next": "^16.0.10",
    "react": "^19.2.2",
    "react-dom": "^19.2.2",
    "resend": "^6.7.0",
    "zod": "^3.24.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4.1.16",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "autoprefixer": "^10.4.21",
    "eslint": "^9",
    "eslint-config-next": "16.0.1",
    "postcss": "^8.5.6",
    "prisma": "^6.19.2",
    "tailwindcss": "^4.1.16",
    "typescript": "^5"
  },
  "engines": {
    "node": ">=22.0.0 <23.0.0",
    "npm": ">=10.0.0"
  }
}
EOF

echo "✅ package.json optimized"
echo "   📊 Removed: @sanity/vision, sanity, jsdom, next-sanity, dotenv"
echo ""

# ============================================================================
# STEP 4: Update next.config.ts
# ============================================================================
echo "⚙️  Step 4/9: Updating Next.js config..."

cp next.config.ts next.config.ts.backup

cat > next.config.ts << 'EOF'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/**",
      },
    ],
  },

  compress: true,
  reactStrictMode: true,
  
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@sanity/client",
      "@sanity/image-url",
    ],
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/studio/:path*",
        destination: "https://recibasicos.sanity.studio/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
EOF

echo "✅ next.config.ts updated"
echo "   ⭐ Added: output: 'standalone'"
echo ""

# ============================================================================
# STEP 5: Remove ISR
# ============================================================================
echo "📄 Step 5/9: Converting ISR to SSG..."

if [ -f "app/page.tsx" ]; then
  if sed --version >/dev/null 2>&1; then
    sed -i '/export const revalidate/d' app/page.tsx
  else
    sed -i '' '/export const revalidate/d' app/page.tsx
  fi
  echo "✅ Removed ISR revalidation"
else
  echo "⚠️  app/page.tsx not found"
fi
echo ""

# ============================================================================
# STEP 6: Install Dependencies
# ============================================================================
echo "📥 Step 6/9: Installing optimized dependencies..."
echo "   This may take 2-3 minutes..."
echo ""

npm install

echo ""
echo "✅ Dependencies installed"
if [ -d "node_modules" ]; then
  echo "📊 Size: $(du -sh node_modules 2>/dev/null | awk '{print $1}' || echo 'unknown')"
fi
echo ""

# ============================================================================
# STEP 7: Build
# ============================================================================
echo "🏗️  Step 7/9: Building for production..."
echo "   This may take 2-3 minutes..."
echo ""

sudo rm -rf .next 2>/dev/null || rm -rf .next
npm run build

echo ""
echo "✅ Build complete"
if [ -d ".next" ]; then
  echo "📊 Size: $(du -sh .next 2>/dev/null | awk '{print $1}' || echo 'unknown')"
fi
echo ""

# ============================================================================
# STEP 8: Verify Standalone
# ============================================================================
echo "✔️  Step 8/9: Verifying standalone build..."

if [ -d ".next/standalone" ]; then
  echo "✅ Standalone build exists"
  echo "📊 Size: $(du -sh .next/standalone 2>/dev/null | awk '{print $1}' || echo 'unknown')"
else
  echo "❌ ERROR: No standalone build found!"
  exit 1
fi
echo ""

# ============================================================================
# STEP 9: Create Deployment Package
# ============================================================================
echo "📦 Step 9/9: Creating deployment package..."

DEPLOY_DIR="${HOME}/trexan-deployment-$(date +%Y%m%d-%H%M%S)"
mkdir -p "$DEPLOY_DIR"

cp -r .next/standalone/* "$DEPLOY_DIR/"
mkdir -p "$DEPLOY_DIR/.next"
cp -r .next/static "$DEPLOY_DIR/.next/static"
cp -r public "$DEPLOY_DIR/public"

if [ -f ".env.local" ]; then
  cp .env.local "$DEPLOY_DIR/.env"
elif [ -f ".env" ]; then
  cp .env "$DEPLOY_DIR/.env"
fi

cat > "$DEPLOY_DIR/README.txt" << 'EOFREADME'
TREXAN WEBSITE - DEPLOYMENT PACKAGE
═══════════════════════════════════════════════════════════════

NEXT STEPS:

1. COMPRESS:
   cd ~/trexan-deployment-XXXXXX
   tar -czf ../trexan-website.tar.gz .

2. UPLOAD to cPanel:
   /home/humanlog/webapps/rbweb/

3. EXTRACT in cPanel File Manager

4. CONFIGURE Application Manager:
   - Application root: /home/humanlog/webapps/rbweb
   - Startup file: server.js
   - Node.js: 22.22.0

5. SET Environment Variables in cPanel:
   DATABASE_URL=mysql://humanlog_rb:C7U%269dHpr3@50.6.171.43:3306/humanlog_rbcontacts
   NEXT_PUBLIC_SANITY_PROJECT_ID=5t75i38n
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SITE_URL=https://recibasicos.com
   RESEND_API_KEY=re_GXsbz6aV_EaJ6vgMExAwvbvqgtBXsTE6R
   RESEND_FROM_EMAIL=onboarding@resend.dev
   RESEND_TO_EMAIL=ernesto.soto@trexan.co
   NODE_ENV=production

6. RUN in cPanel Terminal:
   cd /home/humanlog/webapps/rbweb
   npm install --production

7. START application in Application Manager

═══════════════════════════════════════════════════════════════
EOFREADME

echo "✅ Deployment package created"
echo ""

# ============================================================================
# SUMMARY
# ============================================================================
echo "═══════════════════════════════════════════════════════════════"
echo "🎉 DEPLOYMENT PREPARATION COMPLETE!"
echo "═══════════════════════════════════════════════════════════════"
echo ""
echo "📦 Deployment package:"
echo "   $DEPLOY_DIR"
echo ""
echo "📊 Size: $(du -sh "$DEPLOY_DIR" 2>/dev/null | awk '{print $1}' || echo 'unknown')"
echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1. Compress the package:"
echo "   cd $DEPLOY_DIR"
echo "   tar -czf ../trexan-website.tar.gz ."
echo ""
echo "2. Upload trexan-website.tar.gz to cPanel"
echo ""
echo "3. See README.txt in deployment folder for full instructions"
echo ""
echo "═══════════════════════════════════════════════════════════════"
