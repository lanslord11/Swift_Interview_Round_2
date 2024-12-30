# E-Commerce API Service

A Node.js-based e-commerce API service for managing products, carts, and orders.

## Prerequisites

- Node.js (Latest LTS)
- MongoDB (Local: `mongodb://127.0.0.1:27017/myapp`)
- npm/yarn

## Installation

```bash
# Clone repository
git clone <repository-url>

# Install dependencies
npm install

# Start server
npm run dev    # Development mode
npm start      # Production mode
```

Server runs on port 5000.

## Data Models

### User
```javascript
{
    name: String,      // required
    email: String,     // required
    password: String,  // required
    createdAt: Date    // default: current timestamp
}
```

### Product
```javascript
{
    name: String,        // required
    description: String,
    price: Number,      // required
    stock: Number       // required
}
```

### Cart
```javascript
{
    userId: ObjectId,   // required, refs User
    items: [{
        productId: ObjectId,  // required, refs Product
        quantity: Number      // required
    }],
    createdAt: Date     // default: current timestamp
}
```

### Order
```javascript
{
    userId: ObjectId,   // required, refs User
    items: [{
        productId: ObjectId,  // required, refs Product
        quantity: Number,     // required
        price: Number        // price at order time
    }],
    totalCost: Number,
    createdAt: Date     // default: current timestamp
}
```

## API Endpoints

### Products
- `GET /api/products` - Fetch all products
  - Query: `filter` (optional JSON string)

### Cart
- `POST /api/cart` - Add to cart
  - Body: `{ userId, productId, quantity }`
- `GET /api/cart` - View cart
  - Query: `userId`

### Orders
- `POST /api/checkout` - Place order
  - Body: `{ userId }`
- `GET /api/orders` - Get order history
  - Query: `userId, startDate, endDate`

### User (Pending)
- `POST /api/register` - Register user
- `POST /api/login` - User login

## Controllers

### Product Controller
- `getProducts` - Fetch products with filtering

### Cart Controller
- `addToCart` - Add/update cart items
- `getCart` - Get cart with product details

### Order Controller
- `placeOrder` - Create order and clear cart
- `getOrders` - Get filtered order history

## Project Structure

```
├── config/
│   └── db.js           # Database config
├── controllers/
│   ├── cartController.js
│   ├── orderController.js
│   └── productController.js
├── models/
│   ├── Cart.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── cartRoutes.js
│   ├── orderRoutes.js
│   ├── productRoutes.js
│   └── userRoutes.js
├── app.js              # Express setup
├── index.js           # Entry point
└── package.json
```

## Tech Stack

- Express.js - API routing
- Mongoose - MongoDB interactions
- Nodemon - Development auto-reload