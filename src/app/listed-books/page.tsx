"use client";

import React, { useContext } from "react";

import { BooksContext } from "@/context/BooksContext";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListedBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "ListedBooks must be used inside BooksProvider"
    );
  }

  const { readBooks, wishlist } = context;

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          Listed Books
        </h1>

        <p className="mt-3 text-gray-500">
          Manage your reading list and wishlist
        </p>
      </div>

      {/* Read Books */}
      <section>
        <h2 className="mb-6 text-2xl font-bold">
          Read Books ({readBooks.length})
        </h2>

        {readBooks.length === 0 ? (
          <div className="rounded-2xl bg-base-200 p-10 text-center">
            <p className="text-gray-500">
              You have not added any read books yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {readBooks.map((book) => (
              <ListedBooksCard
                key={book.bookId}
                book={book}
              />
            ))}
          </div>
        )}
      </section>

      {/* Wishlist */}
      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold">
          Wishlist ({wishlist.length})
        </h2>

        {wishlist.length === 0 ? (
          <div className="rounded-2xl bg-base-200 p-10 text-center">
            <p className="text-gray-500">
              Your wishlist is empty.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((book) => (
              <ListedBooksCard
                key={book.bookId}
                book={book}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default ListedBooks;