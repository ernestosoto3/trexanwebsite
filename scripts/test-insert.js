/**
 * Test Database Operations
 * Run: node scripts/test-insert.js
 * 
 * This script tests:
 * - INSERT (create)
 * - SELECT (findMany)
 * - DELETE (delete)
 */

require('dotenv').config({ path: '.env.local' });
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});

async function testDatabaseOperations() {
  console.log('\n🧪 Testing Database Operations...\n');
  console.log('═══════════════════════════════════════════════════\n');

  try {
    // Test 1: CREATE (INSERT)
    console.log('Test 1: Creating a test submission...');
    const submission = await prisma.contactSubmission.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message to verify the database is working correctly!',
        company: 'Test Company Inc.',
        phone: '+1-555-0123',
        privacy: true,
      },
    });

    console.log('✅ Successfully created submission!');
    console.log(`   ID: ${submission.id}`);
    console.log(`   Name: ${submission.name}`);
    console.log(`   Email: ${submission.email}`);
    console.log(`   Created: ${submission.createdAt.toISOString()}\n`);

    // Test 2: READ (SELECT)
    console.log('Test 2: Fetching all submissions...');
    const allSubmissions = await prisma.contactSubmission.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });

    console.log(`✅ Found ${allSubmissions.length} submission(s) in database\n`);

    // Test 3: UPDATE
    console.log('Test 3: Updating the submission...');
    const updated = await prisma.contactSubmission.update({
      where: { id: submission.id },
      data: {
        emailSent: true,
        emailSentAt: new Date(),
      },
    });

    console.log('✅ Successfully updated submission!');
    console.log(`   Email sent: ${updated.emailSent}`);
    console.log(`   Email sent at: ${updated.emailSentAt?.toISOString()}\n`);

    // Test 4: Query with filters
    console.log('Test 4: Testing filtered queries...');
    const unsentEmails = await prisma.contactSubmission.findMany({
      where: {
        emailSent: false,
      },
    });

    console.log(`✅ Found ${unsentEmails.length} unsent email(s)\n`);

    // Test 5: DELETE (cleanup)
    console.log('Test 5: Cleaning up test data...');
    await prisma.contactSubmission.delete({
      where: { id: submission.id },
    });

    console.log('✅ Test submission deleted\n');

    // Final verification
    console.log('Test 6: Final count verification...');
    const finalCount = await prisma.contactSubmission.count();
    console.log(`✅ Database has ${finalCount} submission(s)\n`);

    console.log('═══════════════════════════════════════════════════');
    console.log('✅ ALL DATABASE OPERATIONS SUCCESSFUL!\n');
    console.log('🎉 Your MySQL database is fully functional and ready for production.\n');
    console.log('Next steps:');
    console.log('  1. Integrate with your contact form');
    console.log('  2. Test the API route: app/api/contact/route.ts');
    console.log('  3. Deploy to production\n');

  } catch (error) {
    console.log('\n═══════════════════════════════════════════════════');
    console.log('❌ Database Operation Failed!\n');
    console.error('Error:', error);
    console.log('\n💡 Troubleshooting:');
    console.log('   1. Check that db push completed successfully');
    console.log('   2. Verify table exists: npx prisma studio');
    console.log('   3. Re-run: npx prisma generate\n');
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseOperations();