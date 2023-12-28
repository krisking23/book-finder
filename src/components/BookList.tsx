import { FC } from "react";
import { Book } from "./Book";

interface BookListProps {
  books: any[];
}

export const BookList: FC<BookListProps> = ({ books }) => {
  if (!books) {
    return <h1>no books found</h1>;
  }

  return (
    <div className=" px-3 lg:mx-auto lg:container grid lg:grid-cols-2 md:grid-cols-1 gap-x-6 gap-y-20 py-10">
      {books.map((book: any) => {
        return <Book key={book.id} book={book} />;
      })}
    </div>
  );
};
