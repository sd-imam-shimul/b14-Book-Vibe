# 📚 Book Vibe

A modern and responsive **book discovery and reading management web application** built with **Next.js, TypeScript, Tailwind CSS, and daisyUI**.

Book Vibe allows users to explore books, view detailed information, manage their reading list, and keep track of books they have read.

## 🌐 Live Website

🔗 **Live Demo:** https://b14-book-vibe-a8mk.vercel.app/

## ✨ Features

* 📚 Browse and explore a collection of books
* 🔍 View detailed information about individual books
* ❤️ Add books to your wishlist
* 📖 Mark books as read
* 📋 Manage listed books
* 📊 View read-book statistics
* 📱 Fully responsive design for mobile, tablet, and desktop
* 🎨 Modern UI built with Tailwind CSS and daisyUI
* ⚡ Fast page rendering with Next.js
* 🖼️ Optimized images using Next.js Image
* 🔗 Dynamic book details pages
* ⏳ Loading UI for better user experience

## 🛠️ Technologies Used

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **daisyUI**
* **Recharts**
* **Next.js Image**
* **Git & GitHub**
* **Vercel**

## 📂 Project Structure

```text
book-vibe/
├── public/
│   └── booksData.json
│
├── src/
│   ├── app/
│   │   ├── books/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── listed-books/
│   │   │   └── page.tsx
│   │   │
│   │   ├── read-books/
│   │   │   └── page.tsx
│   │   │
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── assets/
│   │   ├── book.ico
│   │   └── hero_img.jpg
│   │
│   ├── components/
│   │   ├── bookDetails/
│   │   ├── homepage/
│   │   └── shared/
│   │
│   ├── context/
│   │   └── BooksContext.tsx
│   │
│   └── types/
│       └── books.type.ts
│
├── package.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sd-imam-shimul/b14-Book-Vibe.git
```

### 2. Navigate to the project

```bash
cd b14-Book-Vibe
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To run the production server:

```bash
npm start
```

## 📖 Main Pages

| Page         | Route           |
| ------------ | --------------- |
| Home         | `/`             |
| Books        | `/books`        |
| Book Details | `/books/[id]`   |
| Listed Books | `/listed-books` |
| Read Books   | `/read-books`   |

## 🎨 UI & Design

Book Vibe uses a clean and modern interface focused on readability and easy navigation.

The application includes:

* Responsive navigation
* Modern book cards
* Book detail layouts
* Wishlist and reading actions
* Responsive grids
* Reading statistics
* Loading states
* Responsive mobile menu

## 📊 Read Books

The **Read Books** section provides a visual representation of reading progress using a bar chart.

The chart is built with **Recharts** and displays the number of pages associated with books in the reading list.

## 🔮 Future Improvements

Some possible improvements for future versions:

* 🔐 User authentication
* ☁️ Backend database integration
* 🔎 Advanced book search
* 🏷️ Category and tag filtering
* 📚 Pagination
* ⭐ User reviews and ratings
* 🌙 Dark mode improvements
* 👤 User profile
* 📈 More detailed reading statistics

## 👨‍💻 Author

**Shimul**

Aspiring Web Developer | Learning React & Next.js

* GitHub: https://github.com/sd-imam-shimul

## 🚀 Deployment

This project is deployed with **Vercel**.

**Live:** https://b14-book-vibe-a8mk.vercel.app/

---

⭐ If you find this project useful or interesting, consider giving it a star on GitHub.
