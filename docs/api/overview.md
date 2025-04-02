# API Overview

The HRIS provides a comprehensive REST API that allows you to integrate HR functionality into your existing systems.

## Base URL

All API endpoints are relative to:

```
https://api.your-hris-domain.com/v1
```

## Authentication

The API uses Bearer token authentication. Include your API token in the Authorization header:

```bash
Authorization: Bearer your-api-token
```

[Learn more about authentication](/api/auth)

## Rate Limiting

- 1000 requests per hour for standard API keys
- 5000 requests per hour for enterprise API keys
- Rate limit headers are included in all responses

## Core Endpoints

### Employees

```
GET    /employees           # List all employees
POST   /employees          # Create new employee
GET    /employees/:id      # Get employee details
PUT    /employees/:id      # Update employee
DELETE /employees/:id      # Delete employee
```

### Leave Management

```
GET    /leave-requests     # List leave requests
POST   /leave-requests     # Create leave request
PUT    /leave-requests/:id # Update leave request
```

### Performance Reviews

```
GET    /reviews           # List performance reviews
POST   /reviews           # Create review
GET    /reviews/:id       # Get review details
```

## Response Format

All responses are returned in JSON format:

```json
{
  "status": "success",
  "data": {
    // Response data here
  },
  "metadata": {
    "page": 1,
    "limit": 20,
    "total": 50
  }
}
```

## Error Handling

Errors follow a consistent format:

```json
{
  "status": "error",
  "code": "VALIDATION_ERROR",
  "message": "Invalid input provided",
  "details": {
    "field": "email",
    "error": "Must be a valid email address"
  }
}
```

## Next Steps

- [Detailed Authentication Guide](/api/auth)
- [Complete REST API Reference](/api/rest)
- [Example API Implementations](/api/examples)