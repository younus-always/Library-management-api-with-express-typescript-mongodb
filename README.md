# 📚 Library Management API

A RESTful API for managing a library system, built using **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**. This API handles operations such as managing books and borrow records.

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Installation](#%EF%B8%8F-installation)
- [Usage](#%EF%B8%8F-usage)
- [API Endpoints](#-api-endpoints-basic-overview)
- [Query Parameters](#-query-parameters)
- [Configuration](#%EF%B8%8F-configuration)
- [Scripts](#-scripts)
- [Dependencies](#-dependencies)
- [Deployment](#-deployment-to-vercel)
- [Development](#-development)
- [License](#-license)

---

## 📖 Introduction

This project provides a backend API to manage library resources. It supports functionalities such as:

- Adding, updating, and deleting books
- Filtering, sorting, and limiting books
- Tracking borrow records
- Returning books

Built with TypeScript for better development experience and type safety.

---

## ✨ Features

- 🚀 RESTful API using Express
- 📚 Book and Borrow management
- 🧠 MongoDB integration with Mongoose
- ✅ TypeScript support
- 🔍 Filtering, Sorting, and Pagination
- ♻️ Dev auto-reloading with `ts-node-dev`
- 📏 Linting support with ESLint

---

## 🛠️ Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/younus-always/Library-management-api-with-express-typescript-mongoose.git
   cd Library-management-api-with-express-typescript-mongoose
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

## ▶️ Usage

### Run in development mode

```bash
npm run start:dev
```

### Build and run in production

```bash
npm run build
npm run start:prod
```

API will be accessible at http://localhost:5000 (unless overridden in .env).

## 📡 API Endpoints (Basic Overview)

Note: A detailed API documentation can be added using Swagger or Postman.

### Books

- POST /books - Add a new book

- GET /books - Get all books

- GET /books/:id - Get a book by ID

- PUT /books/:id - Update a book

- DELETE /books/:id - Delete a book

### Borrow Records

- POST /borrow - Borrow a book

- GET /borrow - Get all borrow records

## 🔍 Query Parameters

You can enhance your book queries with the following parameters:

### Example

```bash
GET /books?filter=fiction&sortBy=createdAt&sort=desc&limit=10
```

### Parameters

| Parameter | Type     | Description                                  |
| --------- | -------- | -------------------------------------------- |
| `filter`  | `string` | Filter books by `genre`                      |
| `sortBy`  | `string` | Field to sort by (e.g. `createdAt`, `title`) |
| `sort`    | `string` | Sort order: `asc` (default) or `desc`        |
| `limit`   | `number` | Limit the number of returned results         |

## ⚙️ Configuration

Create a .env file at the root of your project:

```bash
PORT=5000
MONGO_URI="your_mongodb_connection_string"
```

## 📜 Scripts

| Command      | Description                   |
| ------------ | ----------------------------- |
| `start:dev`  | Start the server in dev mode  |
| `start:prod` | Start the server in prod mode |
| `build`      | Compile TypeScript files      |
| `lint`       | Run ESLint                    |
| `lint:fix`   | Fix linting issues            |

## 📦 Dependencies

### Runtime

- express ^5.1.0 – HTTP framework

- mongoose ^8.16.1 – MongoDB object modeling

- dotenv ^17.0.0 – Loads .env files

- ts-node-dev ^2.0.0 – Dev server with reloads

### Development

- typescript ^5.8.3 – TypeScript support

- nodemon ^3.1.10 – Monitor changes in production

- eslint ^9.30.0 – Linting support

- @eslint/js, @types/express, typescript-eslint – Type & linting helpers

## 🚀 Deployment to Vercel

You can manually deploy this Node.js API to Vercel using the CLI.

### 1. Install Vercel CLI

```bash
npm install -g vercel
```

### 2. Login to Vercel (if not already)

```bash
vercel login
```

Enter your email address and follow the link sent to authenticate.

### 3. Build the project

```bash
npm run build
```

This compiles TypeScript files into JavaScript in the dist/ folder.

### 4. Create a vercel.json file

This compiles TypeScript files into JavaScript in the dist/ folder.Create a vercel.json in your project root to configure the deployment:

```
{
"version": 2,
"builds": [
 {
   "src": "dist/server.js",
   "use": "@vercel/node"
 }
],
"routes": [
 {
   "src": "/(.*)",
   "dest": "dist/server.js"
 }
]
}
```

This tells Vercel to serve everything from dist/server.js.

### 5. Deploy

Run the following command in your terminal:

```bash
vercel --prod
```

Follow the prompts to deploy your project.

## 📝 Tips

- After deploying, you’ll get a live API URL like:
  [https://your-project-name.vercel.app](https://library-management-backend-api.vercel.app/)

- All your routes (like /books) will be accessible under this domain.

## 👨‍💻 Development

To contribute:

- Fork the repository

- Create a feature branch (git checkout -b feature/feature-name)

- Commit your changes

- Push to the branch

- Open a pull request

## 📄 License

This project is licensed under the ISC License.
