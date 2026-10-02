"use client";

import React, { useContext } from "react";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/books.type";

interface WishListButtonProps {
  book: IBook;
}

const WishListButton = ({
  book,
}: WishListButtonProps) => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "WishListButton must be used inside BooksProvider"
    );
  }

  const { wishlist, setWishlist } = context;

  const isWishlisted = wishlist.some(
    (item) => item.bookId === book.bookId
  );

  const handleWishlist = () => {
    if (isWishlisted) {
      setWishlist((previous) =>
        previous.filter(
          (item) => item.bookId !== book.bookId
        )
      );

      return;
    }

    setWishlist((previous) => [
      ...previous,
      book,
    ]);
  };

  return (
    <button
      onClick={handleWishlist}
      className={`btn ${
        isWishlisted
          ? "btn-error"
          : "btn-outline btn-primary"
      }`}
    >
      {isWishlisted
        ? "♥ Wishlisted"
        : "♡ Add to Wishlist"}
    </button>
  );
};

export default WishListButton;