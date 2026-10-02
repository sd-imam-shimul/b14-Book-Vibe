import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { IBook } from "@/types/books.type";

interface IListedBooksCardProps {
  book: IBook;
}

const ListedBooksCard = ({
  book,
}: IListedBooksCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-[180px_1fr]">
        {/* Image */}
        <div className="relative h-60 overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            className="object-contain p-4"
            sizes="180px"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center">
          <span className="mb-2 w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {book.category}
          </span>

          <h2 className="text-2xl font-bold">
            {book.bookName}
          </h2>

          <p className="mt-1 text-gray-500">
            by {book.author}
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-sm">
            <span>⭐ {book.rating}</span>

            <span>{book.totalPages} Pages</span>

            <span>{book.yearOfPublishing}</span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="btn btn-primary mt-5 w-fit"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;