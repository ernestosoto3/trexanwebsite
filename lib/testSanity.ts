// Load environment variables from .env.local
import { config } from "dotenv";
import { resolve } from "path";

// Load .env.local explicitly
config({ path: resolve(process.cwd(), ".env.local") });

import { createClient } from "@sanity/client";

// ============================================================================
// SANITY CONNECTION TEST
// This script tests if Sanity is properly configured and can connect
// ============================================================================

console.log("🔎 Starting Sanity connection test...\n");

// ============================================================================
// TEST 1: Check if createClient is available
// ============================================================================
console.log("📦 Test 1: Checking Sanity package...");
console.log("  ✅ createClient is a function:", typeof createClient === "function");

// ============================================================================
// TEST 2: Check environment variables AFTER loading
// ============================================================================
console.log("\n📦 Test 2: Checking environment variables...");
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

console.log("  📝 NEXT_PUBLIC_SANITY_PROJECT_ID:", projectId ? `✅ ${projectId}` : "❌ Not set");
console.log("  📝 NEXT_PUBLIC_SANITY_DATASET:", dataset ? `✅ ${dataset}` : "❌ Not set");

if (!projectId || !dataset) {
  console.log("\n❌ Environment variables not found!");
  console.log("\n📋 Create .env.local with:");
  console.log("NEXT_PUBLIC_SANITY_PROJECT_ID=5t75i38n");
  console.log("NEXT_PUBLIC_SANITY_DATASET=production");
  process.exit(1);
}

// ============================================================================
// TEST 3: Create client with your credentials
// ============================================================================
console.log("\n📦 Test 3: Creating Sanity client...");
const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-01-01",
  useCdn: false, // Use direct API for testing
});

console.log("  ✅ Client created successfully");
console.log("  ✅ fetch method exists:", typeof client.fetch === "function");

// ============================================================================
// TEST 4: Test a simple query
// ============================================================================
console.log("\n📦 Test 4: Testing simple query...");

async function testQuery() {
  try {
    // Try to get count of noticias
    const count = await client.fetch('count(*[_type == "noticia"])');
    console.log("  ✅ Query successful!");
    console.log("  📊 Total noticias in Sanity:", count);

    if (count === 0) {
      console.log("  ⚠️  No articles found. Create one in Studio at /studio");
    }

    return true;
  } catch (error: any) {
    console.log("  ❌ Query failed!");
    console.log("  📝 Error:", error.message);
    
    if (error.statusCode === 404) {
      console.log("\n💡 This usually means:");
      console.log("   1. Wrong project ID");
      console.log("   2. Wrong dataset name");
      console.log("   3. Dataset doesn't exist yet");
    }
    
    return false;
  }
}

// ============================================================================
// TEST 5: Fetch actual articles
// ============================================================================
console.log("\n📦 Test 5: Fetching noticias...");

async function testFetchArticles() {
  try {
    const noticias = await client.fetch('*[_type == "noticia"][0...3]{ _id, titulo, fecha }');
    console.log("  ✅ Fetch successful!");
    console.log("  📰 Found", noticias.length, "articles");
    
    if (noticias.length > 0) {
      console.log("\n  📄 Sample articles:");
      noticias.forEach((n: any, i: number) => {
        console.log(`     ${i + 1}. ${n.titulo || "No title"} (${n.fecha || "No date"})`);
      });
    } else {
      console.log("  💡 Create articles in Studio: http://localhost:3000/studio");
    }
    
    return true;
  } catch (error: any) {
    console.log("  ❌ Fetch failed!");
    console.log("  📝 Error:", error.message);
    return false;
  }
}

// ============================================================================
// RUN ALL TESTS
// ============================================================================

async function runTests() {
  const test4 = await testQuery();
  const test5 = await testFetchArticles();

  console.log("\n" + "=".repeat(60));
  
  if (test4 && test5) {
    console.log("🎉 SUCCESS! All tests passed!");
    console.log("\n✅ Your Sanity setup is working correctly!");
    console.log("\n📝 Next steps:");
    console.log("   1. Visit http://localhost:3000/studio to create content");
    console.log("   2. Visit http://localhost:3000/noticias to see articles");
  } else {
    console.log("⚠️  Some tests failed. Check the errors above.");
    console.log("\n💡 Common fixes:");
    console.log("   1. Verify project ID: https://www.sanity.io/manage");
    console.log("   2. Check dataset name (usually 'production')");
    console.log("   3. Make sure .env.local exists in project root");
  }
  
  console.log("=".repeat(60));
}

runTests();