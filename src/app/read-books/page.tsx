"use client";

import React, { useContext } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { BooksContext } from "@/context/BooksContext";

const ReadBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "ReadBooks must be used inside BooksProvider"
    );
  }

  const { readBooks } = context;

  const data = readBooks.map((book) => ({
    name:
      book.bookName.length > 12
        ? `${book.bookName.slice(0, 12)}...`
        : book.bookName,

    pages: book.totalPages,
  }));

  return (
    <main className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold">
          Read Books
        </h1>

        <p className="mt-3 text-gray-500">
          Track the number of pages in your read books
        </p>
      </div>

      {/* Empty State */}
      {readBooks.length === 0 ? (
        <div className="rounded-2xl bg-base-200 p-12 text-center">
          <h2 className="text-2xl font-bold">
            No Read Books Yet
          </h2>

          <p className="mt-2 text-gray-500">
            Mark some books as read to see your reading
            statistics.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl bg-base-100 p-5 shadow-lg">
          <div className="h-[450px] w-full">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <BarChart
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  left: 10,
                  bottom: 50,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="name"
                  angle={-20}
                  textAnchor="end"
                  height={70}
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="pages"
                  fill="#0088FE"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </main>
  );
};

export default ReadBooks;