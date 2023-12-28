import { FC } from "react";

interface BookProps {
  book: any;
}

export const Book: FC<BookProps> = ({ book }) => {
  return (
    <div className="flex h-60 bg-white px-4 gap-6">
      <div className="flex 1 relative">
        <img
          className="h-full w-full relative -top-4 object-cover"
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.smallThumbnail
              : "https://placehold.co/150x240/png"
          }
        />
      </div>
      <div className="flex 1 py-5 flex-col px-6">
        <h2 className="text-2xl text-slate-600">{book.volumeInfo.title}</h2>
        <span>By: {book.volumeInfo.authors && book.volumeInfo.authors[0]}</span>
        <span>Published By: {book.volumeInfo.publisher}</span>
        <a href={book.volumeInfo.infoLink} target="_blank" className="mt-auto">
          <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-auto">
            See this Book
          </button>
        </a>
      </div>
    </div>
  );
};
