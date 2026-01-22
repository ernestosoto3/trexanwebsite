/**
 * Setup Database Schema
 * Run: node scripts/setup-database.js
 */

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const { execSync } = require('child_process');

console.log('\n🚀 Setting up database...\n');
console.log('═══════════════════════════════════════════════════\n');

// Verify DATABASE_URL is set
if (!process.env.DATABASE_URL) {
  console.log('❌ DATABASE_URL is not set!');
  console.log('   Check your .env.local file\n');
  process.exit(1);
}

// Check if it's MySQL
if (!process.env.DATABASE_URL.startsWith('mysql://')) {
  console.log('❌ DATABASE_URL is not a MySQL connection!');
  console.log(`   Current: ${process.env.DATABASE_URL.substring(0, 20)}...\n`);
  process.exit(1);
}

console.log(`✅ MySQL connection detected\n`);

try {
  // Step 1: Generate Prisma Client
  console.log('Step 1: Generating Prisma Client...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  console.log('✅ Prisma Client generated\n');
  
  // Step 2: Push schema to database
  console.log('Step 2: Pushing schema to database...');
  execSync('npx prisma db push', { stdio: 'inherit' });
  console.log('✅ Database schema created\n');
  
  // Step 3: Verify
  console.log('Step 3: Verifying setup...');
  execSync('node scripts/test-connection.js', { stdio: 'inherit' });
  
  console.log('\n═══════════════════════════════════════════════════');
  console.log('✅ Database setup complete!\n');
  console.log('Next steps:');
  console.log('  - Run "npm run db:studio" to view your database');
  console.log('  - Start your dev server with "npm run dev"\n');
  
} catch (error) {
  console.log('\n❌ Setup failed!');
  console.log('Please check the error messages above.\n');
  process.exit(1);
}