import React from "react";
import fs from "fs/promises";
import path from "path";

import { IBook } from "@/types/books.type";
import BookCard from "@/components/shared/BookCard";

const getBooks = async (): Promise<IBook[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "booksData.json"
  );

  const file = await fs.readFile(filePath, "utf-8");

  const data: IBook[] = JSON.parse(file);

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto px-4 py-[70px]">
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