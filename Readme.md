with the API, you can use tools like Postman or cURL. Here's how you can use Postman to perform CRUD operations:


## Installation

1. Clone the repository to your local machine.
2. Install dependencies using npm:


npm install



GET all pairs: GET http://localhost:3000/api/pairs
GET a pair by ID: GET http://localhost:3000/api/pairs/:id
CREATE a new pair: POST http://localhost:3000/api/pairs (with JSON payload)
UPDATE a pair: PUT http://localhost:3000/api/pairs/:id (with JSON payload)
DELETE a pair: DELETE http://localhost:3000/api/pairs/:id
API Endpoints
GET /api/pairs: Get all pairs
GET /api/pairs/:id: Get a pair by ID
POST /api/pairs: Create a new pair
PUT /api/pairs/:id: Update an existing pair
DELETE /api/pairs/:id: Delete a pair
Technologies Used
Node.js
Express.js
MongoDB
Mongoose



Folder Structure
├── controllers
│   └── pairController.js
├── models
│   └── priceData.js
├── routes
│   └── Routes.js
├── .env
├── package.json
└──app.js