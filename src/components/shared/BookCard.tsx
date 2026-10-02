
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IBook } from "@/types/IBook";

interface IBookCardProps {
  book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-72 bg-orange-50">

        <Image
          src={
            book.image ||
            "https://i.ibb.co.com/khHN7Pk/9780143454212.jpg"
          }
          alt={book.bookName}
          fill
          className="object-contain p-6"
        />

      </div>

      {/* Card Content */}
      <div className="space-y-3 p-5">

        {/* Category */}
        <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {book.category}
        </span>

        {/* Book Name */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-sm text-gray-500">
          By{" "}
          <span className="font-medium text-gray-700">
            {book.author}
          </span>
        </p>

        {/* Review */}
        <p className="line-clamp-2 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

        {/* Rating + Pages */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3">

          {/* Rating */}
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">
              ★
            </span>

            <span className="font-semibold">
              {book.rating}
            </span>

            <span className="text-sm text-gray-400">
              / 5
            </span>
          </div>

          {/* Pages */}
          <span className="text-sm text-gray-500">
            {book.totalPages} pages
          </span>

        </div>

        {/* View Details */}
        <Link
          href={`/books/${book.bookId}`}
          className="btn btn-primary w-full rounded-full"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
};

export default BookCard;

