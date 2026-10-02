"use client";

import React, { useContext } from "react";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/books.type";

interface ReadButtonProps {
  book: IBook;
}

const ReadButton = ({ book }: ReadButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "ReadButton must be used inside BooksProvider"
    );
  }

  const { readBooks, setReadBooks } = context;

  const isRead = readBooks.some(
    (item) => item.bookId === book.bookId
  );

  const handleRead = () => {
    if (isRead) {
      setReadBooks((previous) =>
        previous.filter(
          (item) => item.bookId !== book.bookId
        )
      );

      return;
    }

    setReadBooks((previous) => [
      ...previous,
      book,
    ]);
  };

  return (
    <button
      onClick={handleRead}
      className={`btn ${
        isRead ? "btn-success" : "btn-primary"
      }`}
    >
      {isRead ? "✓ Read" : "Mark as Read"}
    </button>
  );
};

export default ReadButton;