
"use client";

import React, { useContext } from "react";
import { BooksContext } from "@/context/BooksContext";
import { IBook } from "@/types/books.type";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {

  const {  wishlist,setWishlist } = useContext(BooksContext);

  const router = useRouter();

  const handleAddToWishlist = () => {
    console.log("Add to wishlist btn triggered", book);

    setWishlist([...wishlist, book]);

    toast.success(`You have added "${book.bookName}" to your wishlist`);

    router.push("/listed-books");
  };

  return (
    <div>
      <button
        className="btn btn-primary flex-1 rounded-full"
        onClick={() => handleAddToWishlist()}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishListButton;

