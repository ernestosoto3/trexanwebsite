/**
 * Enhanced MySQL Connection Test with Actual Permission Verification
 * Run: node test-connection-enhanced.js
 */
require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['error', 'warn'],
});

async function testConnection() {
  console.log('\n🔌 Enhanced MySQL Permission Test...\n');
  console.log('═══════════════════════════════════════════════════\n');

  const dbUrl = process.env.DATABASE_URL || 'NOT SET';
  const urlParts = dbUrl.match(/mysql:\/\/([^:]+):(.+)@([^:]+):(\d+)\/(.+)/);
  
  if (!urlParts) {
    console.log('❌ Invalid DATABASE_URL format\n');
    process.exit(1);
  }

  const [, user, , host, port, database] = urlParts;
  console.log('📍 Connection Details:');
  console.log(`   User: ${user}`);
  console.log(`   Host: ${host}:${port}`);
  console.log(`   Database: ${database}\n`);

  try {
    // Test 1: Basic Connection
    console.log('Test 1: Connecting to database...');
    await prisma.$connect();
    console.log('✅ Connection successful!\n');

    // Test 2: Check Current User
    console.log('Test 2: Verifying user identity...');
    const currentUser = await prisma.$queryRaw`SELECT CURRENT_USER() as user`;
    console.log(`✅ Connected as: ${currentUser[0].user}\n`);

    // Test 3: Check Permissions
    console.log('Test 3: Checking user permissions...');
    try {
      const grants = await prisma.$queryRaw`SHOW GRANTS FOR CURRENT_USER()`;
      console.log('✅ User permissions:');
      grants.forEach(grant => {
        const grantText = Object.values(grant)[0];
        console.log(`   ${grantText}`);
      });
      console.log('');

      // Parse permissions to check for SELECT and UPDATE
      const grantsText = grants.map(g => Object.values(g)[0]).join(' ');
      const hasSelect = grantsText.includes('SELECT') || grantsText.includes('ALL PRIVILEGES');
      const hasUpdate = grantsText.includes('UPDATE') || grantsText.includes('ALL PRIVILEGES');

      if (!hasSelect || !hasUpdate) {
        console.log('⚠️  WARNING: Missing critical permissions!');
        if (!hasSelect) console.log('   ❌ SELECT permission not found');
        if (!hasUpdate) console.log('   ❌ UPDATE permission not found');
        console.log('');
      }
    } catch (err) {
      console.log('⚠️  Could not retrieve grants\n');
    }

    // Test 4: Test actual database-level SELECT
    console.log('Test 4: Testing SELECT on actual database tables...');
    try {
      // Create a test table
      await prisma.$executeRaw`
        CREATE TABLE IF NOT EXISTS _permission_test (
          id INT PRIMARY KEY,
          value VARCHAR(50)
        )
      `;
      
      // Try to SELECT from it
      const result = await prisma.$queryRaw`SELECT * FROM _permission_test LIMIT 1`;
      
      // Clean up
      await prisma.$executeRaw`DROP TABLE IF EXISTS _permission_test`;
      
      console.log('✅ SELECT permission verified on database tables!\n');
    } catch (err) {
      console.log('❌ SELECT permission DENIED on database tables!');
      console.log(`   Error: ${err.message}\n`);
      console.log('🚨 CRITICAL ISSUE:');
      console.log('   Your user can SELECT from system tables but NOT your database.\n');
      console.log('📧 Send this to IT:\n');
      console.log('   GRANT SELECT, UPDATE ON humanlog_rbcontacts.*');
      console.log(`   TO 'humanlog_rb'@'172.59.18.16';`);
      console.log('   FLUSH PRIVILEGES;\n');
      
      await prisma.$disconnect();
      process.exit(1);
    }

    // Test 5: Test UPDATE permission
    console.log('Test 5: Testing UPDATE permission...');
    try {
      // Create a test table with data
      await prisma.$executeRaw`
        CREATE TABLE IF NOT EXISTS _permission_test (
          id INT PRIMARY KEY,
          value VARCHAR(50)
        )
      `;
      await prisma.$executeRaw`INSERT INTO _permission_test (id, value) VALUES (1, 'test')`;
      
      // Try to UPDATE
      await prisma.$executeRaw`UPDATE _permission_test SET value = 'updated' WHERE id = 1`;
      
      // Clean up
      await prisma.$executeRaw`DROP TABLE IF EXISTS _permission_test`;
      
      console.log('✅ UPDATE permission verified!\n');
    } catch (err) {
      console.log('❌ UPDATE permission DENIED!');
      console.log(`   Error: ${err.message}\n`);
      console.log('🚨 CRITICAL ISSUE:');
      console.log('   You cannot UPDATE records in your database.\n');
      console.log('📧 Send this to IT:\n');
      console.log('   GRANT SELECT, UPDATE ON humanlog_rbcontacts.*');
      console.log(`   TO 'humanlog_rb'@'172.59.18.16';`);
      console.log('   FLUSH PRIVILEGES;\n');
      
      await prisma.$disconnect();
      process.exit(1);
    }

    // Test 6: Check for existing tables
    console.log('Test 6: Listing database tables...');
    const tables = await prisma.$queryRaw`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = ${database}
    `;
    
    if (tables.length === 0) {
      console.log('⚠️  No tables found (empty database)\n');
    } else {
      console.log(`✅ Found ${tables.length} table(s):`);
      tables.forEach(t => {
        // MySQL returns TABLE_NAME or table_name depending on version
        const tableName = t.TABLE_NAME || t.table_name || Object.values(t)[0];
        console.log(`   - ${tableName}`);
      });
      console.log('');
    }

    console.log('═══════════════════════════════════════════════════');
    console.log('✅ ALL PERMISSION TESTS PASSED!\n');
    console.log('🎉 Your database is fully configured and ready.\n');
    console.log('Next step: npx prisma migrate dev --name init\n');

  } catch (error) {
    console.log('\n═══════════════════════════════════════════════════');
    console.log('❌ Connection Test Failed!\n');
    console.log('Error:', error.message);
    console.log('\n💡 Common solutions:');
    console.log('   1. Check .env and .env.local have MySQL URL');
    console.log('   2. Contact IT for missing permissions');
    console.log('   3. Verify password encoding (%26 for &)\n');
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();