# 🏪 Shop List App

[Demo Link](dogtronic-lk0cpb23t-patrykorlowskiorbitvucoms-projects.vercel.app)

A performant and responsive React application that renders a list of shops with lazy-loaded images and infinite scroll support.

## 🚀 Features

- ⚛️ Built with **React + TypeScript**
- 💨 Styled using **Tailwind CSS**
- ♾️ **Infinite scroll** for loading large shop datasets efficiently
- 🖼️ **Lazy loading** of heavy images
- 🧪 **Unit tests** for core components with React Testing Library
- 🔍 Optimized address parsing (city and street extracted from raw string)
- 🧩 Component-based architecture: `ShopCard`, `ShopList`, `ShopListInfinite`

## 🛠️ Technologies

- React 19 + TypeScript
- Tailwind CSS 3
- React Testing Library & Jest
- uuid, picsum.photos for mock data
- Create React App compatible


---

## ▶️ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm start
```

or for Vite:

```bash
npm run dev
```

---

## 🧪 Running Tests

```bash
npm test
```

All key components (`ShopCard`, `ShopList`, `ShopListInfinite`) are covered with unit tests.

---

## 🧩 Component Overview

- `ShopCard` – Displays a single shop's image, type, city, and street
- `ShopList` – Renders a static list of shops
- `ShopListInfinite` – Uses infinite scroll with intersection observer to load more data dynamically

---


## 📦 Build

```bash
npm run build
```

---

## 📄 License

MIT © 2025