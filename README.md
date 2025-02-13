# Express Assignment

This is a RESTful API implementation using Express.js that provides endpoints for managing users and products.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file in the root directory and add:
```
PORT=3000
NODE_ENV=development
```
4. Start the server:
```bash
node index.js
```

## API Endpoints

### Users

- GET `/api/users` - Get all users
- GET `/api/users/:id` - Get user by ID
- POST `/api/users` - Create new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- PUT `/api/users/:id` - Update user
  ```json
  {
    "name": "John Updated",
    "email": "john.updated@example.com"
  }
  ```
- DELETE `/api/users/:id` - Delete user

### Products

- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get product by ID
- POST `/api/products` - Create new product
  ```json
  {
    "name": "Product Name",
    "price": 99.99,
    "description": "Product description"
  }
  ```
- PUT `/api/products/:id` - Update product
  ```json
  {
    "name": "Updated Product",
    "price": 149.99,
    "description": "Updated description"
  }
  ```
- DELETE `/api/products/:id` - Delete product

## Testing

You can test the API using Postman or cURL. Example cURL commands:

```bash
# Get all users
curl http://localhost:3000/api/users

# Create new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

## Error Handling

The API includes global error handling and logging. All errors are returned in a consistent format:

```json
{
  "status": "error",
  "message": "Error message here"
}
```
