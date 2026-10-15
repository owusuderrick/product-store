# 🛒 Product Store

A full-stack product store where you can **add, update, and delete products**.

🔗 **Live demo:** [product-store-eafz.onrender.com](https://product-store-eafz.onrender.com)

> ⏳ Hosted on Render's free tier. The first load may take up to a minute while the server wakes up.

## ✨ Highlights

- ⚛️ **Tech stack:** React + Express + Tailwind CSS + DaisyUI
- 🛡️ **Rate limiting & bot detection** with Arcjet
- 🗂️ **Global state management** with Zustand
- 🚨 **Error handling** on both the server and the client

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/owusuderrick/product-store.git
cd product-store
```

### 2. Install dependencies

```bash
npm install
cd frontend && npm install && cd ..
```

### 3. Set up the `.env` file

Create a `.env` file in the project root:

```env
PORT=3000

PGUSER=...
PGPASSWORD=...
PGHOST=...
PGDATABASE=...

ARCJET_KEY=...
ARCJET_ENV=development
```

| Variable     | Description                                |
| ------------ | ------------------------------------------ |
| `PORT`       | Port the API server runs on                |
| `PGUSER`     | PostgreSQL username                        |
| `PGPASSWORD` | PostgreSQL password                        |
| `PGHOST`     | PostgreSQL host                            |
| `PGDATABASE` | PostgreSQL database name                   |
| `ARCJET_KEY` | Your Arcjet API key                        |
| `ARCJET_ENV` | Arcjet environment (`development` locally) |

### 4. Run the API

```bash
npm run dev
```

### 5. Run the frontend

```bash
cd frontend
npm run dev
```
