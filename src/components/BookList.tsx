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
    <>
      {books.map((book: any) => {
        return <Book key={book.id} book={book} />;
      })}
    </>
  );
};
