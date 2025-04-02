# Basic Configuration

This guide covers the essential configuration steps to get your HRIS instance up and running.

## Environment Variables

Create a `.env` file in your project root with these required variables:

```bash
# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_NAME=hris_db
DB_USER=hris_user
DB_PASSWORD=your_secure_password

# JWT Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# Server Configuration
PORT=3000
NODE_ENV=development

# Redis Cache
REDIS_HOST=localhost
REDIS_PORT=6379

# Email Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

## Database Setup

1. Create the database:

```bash
createdb hris_db
```

2. Run migrations:

```bash
npm run migrate
```

3. (Optional) Seed initial data:

```bash
npm run seed
```

## Role Configuration

Define user roles in `config/roles.json`:

```json
{
  "roles": {
    "admin": {
      "name": "Administrator",
      "permissions": ["*"]
    },
    "hr_manager": {
      "name": "HR Manager",
      "permissions": [
        "employees:read",
        "employees:write",
        "leave:approve",
        "performance:write"
      ]
    },
    "employee": {
      "name": "Employee",
      "permissions": [
        "profile:read",
        "profile:write",
        "leave:request"
      ]
    }
  }
}
```

## File Storage

Configure document storage in `config/storage.js`:

```javascript
module.exports = {
  driver: 'local', // or 's3', 'gcs'
  local: {
    path: 'storage/uploads'
  },
  s3: {
    bucket: process.env.AWS_BUCKET,
    region: process.env.AWS_REGION
  }
}
```

## Email Templates

Email templates are stored in `templates/email/`:

```
templates/email/
├── welcome.html
├── leave-request.html
├── review-notification.html
└── password-reset.html
```

## Next Steps

- [Advanced Configuration](/config/advanced)
- [Environment Variables Reference](/config/env)
- [Security Best Practices](/config/security)