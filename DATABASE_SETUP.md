# Database Setup Guide

## Quick Start (Once you have credentials)

### 1. Update Environment Variables

Open `.env.local` and replace these placeholders:
```env
DATABASE_URL="mysql://REPLACE_USER:REPLACE_PASSWORD@REPLACE_HOST:3306/REPLACE_DATABASE"
```

With your actual credentials from IT:
```env
DATABASE_URL="mysql://actual_user:actual_password@mysql.company.com:3306/trexan_contacts"
```

### 2. Check Environment
```bash
node scripts/check-env.js
```

Should show all ✅ green checkmarks.

### 3. Test Connection
```bash
node scripts/test-connection.js
```

Should show "All tests passed!"

### 4. Setup Database
```bash
node scripts/setup-database.js
```

This will:
- Generate Prisma Client
- Create database tables
- Verify everything works

### 5. Open Prisma Studio
```bash
npx prisma studio
```

Visit http://localhost:5555 to view your database.

---

## Troubleshooting

### Error: "Cannot reach database server"

**Cause:** Host unreachable or wrong address

**Fix:**
1. Verify HOST in DATABASE_URL
2. Check if VPN is required
3. Confirm IP is whitelisted
4. Test network: `ping mysql.yourcompany.com`

### Error: "Access denied for user"

**Cause:** Wrong credentials or permissions

**Fix:**
1. Double-check USERNAME and PASSWORD
2. URL-encode special characters in password:
   - `@` becomes `%40`
   - `#` becomes `%23`
   - `%` becomes `%25`
3. Ask IT to verify user permissions

### Error: "Unknown database"

**Cause:** Database doesn't exist

**Fix:**
Ask IT to create the database first:
```sql
CREATE DATABASE trexan_contacts 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;
```

### Error: "SSL connection required"

**Cause:** Server requires encrypted connection

**Fix:**
Add SSL parameter to DATABASE_URL:
```env
DATABASE_URL="mysql://user:pass@host:3306/db?sslaccept=strict"
```

---

## Environment Variable Format

### Basic Connection
```env
DATABASE_URL="mysql://username:password@host:port/database"
```

### With SSL
```env
DATABASE_URL="mysql://username:password@host:port/database?sslaccept=strict"
```

### With Special Characters in Password
If password is `P@ss#123`:
```env
DATABASE_URL="mysql://username:P%40ss%23123@host:port/database"
```

---

## Commands Reference
```bash
# Check environment variables
node scripts/check-env.js

# Test database connection
node scripts/test-connection.js

# Setup database (one-time)
node scripts/setup-database.js

# Generate Prisma Client
npx prisma generate

# Push schema changes
npx prisma db push

# Create migration (production)
npx prisma migrate dev --name description

# Open database GUI
npx prisma studio

# Reset database (DANGER!)
npx prisma db push --force-reset
```

---

## What to Send to IT Guy

Ask for these 6 things minimum:

1. **Host**: mysql.company.com
2. **Port**: 3306
3. **Database Name**: trexan_contacts
4. **Username**: your_username
5. **Password**: your_password
6. **SSL Required?**: Yes/No

Optional but helpful:
- IP whitelist requirements
- VPN access needed?
- Web interface URL (phpMyAdmin)
- Support contact info