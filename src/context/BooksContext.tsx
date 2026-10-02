"use client";

import React, {
  createContext,
  ReactNode,
  useState,
} from "react";

import type { IBook } from "@/types/books.type";

interface BooksContextType {
  readBooks: IBook[];
  wishlist: IBook[];

  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}

export const BooksContext =
  createContext<BooksContextType | null>(null);

interface BooksProviderProps {
  children: ReactNode;
}

export const BooksProvider = ({
  children,
}: BooksProviderProps) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  return (
    <BooksContext.Provider
      value={{
        readBooks,
        wishlist,
        setReadBooks,
        setWishlist,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};