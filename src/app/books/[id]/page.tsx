import ReadButton from '@/components/bookDetails/ReadButton';
import WishListButton from '@/components/bookDetails/WishListButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps{
    params: Promise<{
        id: string;
    }>
}
const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch(
    "http://localhost:3000/booksData.json"
  );

  const data = await response.json();

  return data;
};

const BookDetailsPage = async ({params}:IBookDetailsPageProps) => {
    const {id} = await params;
    // console.log(id,"id")
    const booksData = await getBooks();
    const book = booksData.find((book:IBook)=> String(book.bookId) === String(id),) as IBook;

    console.log(book,"book");
   
    
return (
  <div className="container mx-auto px-4 py-10">

    {/* Book Details */}
    <div className="card lg:card-side overflow-hidden rounded-3xl bg-base-100 shadow-xl">

      {/* Book Image */}
      <figure className="lg:w-2/5 bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 p-8">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={450}
          className="w-full max-w-[300px] rounded-2xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* Book Information */}
      <div className="card-body lg:w-3/5 p-6 lg:p-10">

        {/* Category + Rating */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="badge badge-primary badge-lg">
            {book.category}
          </span>

          <span className="flex items-center gap-1 rounded-full bg-warning/10 px-3 py-1 text-sm font-medium text-warning">
            ⭐ {book.rating}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-3xl font-bold leading-tight lg:text-4xl">
          {book.bookName}
        </h2>

        {/* Author */}
        <p className="text-lg text-base-content/60">
          by <span className="font-semibold text-base-content">{book.author}</span>
        </p>

        {/* Review */}
        <p className="mt-4 leading-7 text-base-content/70">
          {book.review}
        </p>

        {/* Book Information */}
        <div className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-base-200 p-5 sm:grid-cols-3">

          <div>
            <p className="text-sm text-base-content/50">Pages</p>
            <p className="font-semibold">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-sm text-base-content/50">Publisher</p>
            <p className="font-semibold">{book.publisher}</p>
          </div>

          <div>
            <p className="text-sm text-base-content/50">Published</p>
            <p className="font-semibold">{book.yearOfPublishing}</p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-5">
          <p className="mb-2 text-sm font-semibold">Tags</p>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag) => (
              <span
                key={tag}
                className="badge badge-outline"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="card-actions mt-7 flex-col gap-3 sm:flex-row">

          <ReadButton book={book}/>

            <WishListButton book={book}/>

        </div>

      </div>
    </div>
  </div>
);


};

export default BookDetailsPage;