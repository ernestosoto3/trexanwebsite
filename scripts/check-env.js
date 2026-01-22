/**
 * Check if all required environment variables are set
 * Run: node scripts/check-env.js
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const requiredEnvVars = {
  'DATABASE_URL': 'MySQL connection string',
  'RESEND_API_KEY': 'Resend email service API key',
  'RESEND_FROM_EMAIL': 'Email sender address',
  'RESEND_TO_EMAIL': 'Email recipient address',
  'NEXT_PUBLIC_SANITY_PROJECT_ID': 'Sanity CMS project ID',
  'NEXT_PUBLIC_SANITY_DATASET': 'Sanity CMS dataset',
};

const optionalEnvVars = {
  'SANITY_API_READ_TOKEN': 'Sanity API token (if private dataset)',
  'STUDIO_USER': 'Prisma Studio username',
  'STUDIO_PASS': 'Prisma Studio password',
};

console.log('\n🔍 Checking Environment Variables...\n');
console.log('═══════════════════════════════════════════════════\n');

let missingRequired = [];
let missingOptional = [];
let hasPlaceholders = [];

// Check required variables
Object.entries(requiredEnvVars).forEach(([key, description]) => {
  const value = process.env[key];
  
  if (!value) {
    missingRequired.push({ key, description });
    console.log(`❌ ${key}`);
    console.log(`   Missing: ${description}\n`);
  } else if (value.includes('REPLACE_') || value.includes('YOUR_')) {
    hasPlaceholders.push({ key, description });
    console.log(`⚠️  ${key}`);
    console.log(`   Still has placeholder value\n`);
  } else {
    console.log(`✅ ${key}`);
    // Show partial value for verification (hide sensitive parts)
    let preview = value;
    if (key.includes('KEY') || key.includes('PASS') || key === 'DATABASE_URL') {
      preview = value.substring(0, 20) + '...';
    } else if (value.length > 30) {
      preview = value.substring(0, 30) + '...';
    }
    console.log(`   ${preview}\n`);
  }
});

// Check optional variables
console.log('Optional Variables:');
Object.entries(optionalEnvVars).forEach(([key, description]) => {
  const value = process.env[key];
  
  if (!value || value === '') {
    missingOptional.push({ key, description });
    console.log(`⚪ ${key} (optional)`);
    console.log(`   ${description}\n`);
  } else {
    console.log(`✅ ${key}`);
    const preview = key.includes('KEY') || key.includes('PASS') 
      ? value.substring(0, 8) + '...' 
      : value;
    console.log(`   ${preview}\n`);
  }
});

console.log('═══════════════════════════════════════════════════\n');

// Summary
if (missingRequired.length > 0) {
  console.log('❌ CRITICAL: Missing required environment variables!');
  console.log('   Add these to your .env.local file:\n');
  missingRequired.forEach(({ key }) => console.log(`   - ${key}`));
  console.log('');
  process.exit(1);
}

if (hasPlaceholders.length > 0) {
  console.log('⚠️  WARNING: Some variables still have placeholder values!');
  console.log('   Update these in your .env.local file:\n');
  hasPlaceholders.forEach(({ key }) => console.log(`   - ${key}`));
  console.log('');
  process.exit(1);
}

console.log('✅ All required environment variables are set!\n');
console.log('Next step: Run "npm run db:test"\n');