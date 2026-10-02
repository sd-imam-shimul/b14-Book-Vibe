import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { IBook } from "@/types/books.type";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <Image
          src={book.image}
          alt={book.bookName}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {book.category}
        </span>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            by {book.author}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span>⭐ {book.rating}</span>

          <span className="text-gray-500">
            {book.totalPages} pages
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/books/${book.bookId}`}
          className="btn btn-primary w-full"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default BookCard;