# 📚 Library Management API

A RESTful API for managing a library system, built using **Express.js**, **TypeScript**, and **MongoDB (Mongoose)**. This API handles operations such as managing books and borrow records.

---

## 📑 Table of Contents

- [Introduction](#-introduction)
- [Features](#-features)
- [Installation](#-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Configuration](#-configuration)
- [Scripts](#-scripts)
- [Project Structure](#-project-structure)
- [Dependencies](#-dependencies)
- [Development](#-development)
- [License](#-license)

---

## 📖 Introduction

This project provides a backend API to manage library resources. It supports functionalities such as:

- Adding, updating, and deleting books
- Tracking borrow records
- Returning books

Built with TypeScript for better development experience and type safety.

---

## ✨ Features

- 🚀 RESTful API using Express
- 📚 Book and Borrow management
- 🧠 MongoDB integration with Mongoose
- ✅ TypeScript support
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

## 👨‍💻 Development

To contribute:

- Fork the repository

- Create a feature branch (git checkout -b feature/feature-name)

- Commit your changes

- Push to the branch

- Open a pull request

## 📄 License

This project is licensed under the ISC License.
