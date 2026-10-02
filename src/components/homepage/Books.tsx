
import React from "react";
import { IBook } from "@/types/IBook";
import BookCard from "@/components/shared/BookCard";

const getBooks = async (): Promise<IBook[]> => {
   const response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }

  const data: IBook[] = await response.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  console.log(booksData);

  return (
    <section className="container mx-auto px-4 py-[70px]">

      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-orange-500">
          Our Collection
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Explore All Books
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-500">
          Discover amazing stories and find your next favorite book.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {booksData.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>

    </section>
  );
};

export default Books;

