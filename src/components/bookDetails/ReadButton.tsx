
"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {

  const { readBooks, setReadBooks } = useContext(BooksContext);

  const router = useRouter();

  const handleReadBook = () => {
    console.log("Read book btn triggered", book);

    setReadBooks([...readBooks, book]);

    toast.success(`You have read "${book.bookName}"`);

    router.push("/listed-books");
  };

  return (
    <div>
      <button
        className="btn btn-primary flex-1 rounded-full"
        onClick={handleReadBook}
      >
        Read
      </button>
    </div>
  );
};

export default ReadButton;

