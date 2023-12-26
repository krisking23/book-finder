import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Book } from "./components/Book";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  console.log(import.meta.env);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${
        import.meta.env.VITE_API_KEY
      }`
    );
    console.log(data);
    setBooks(data.items);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("hi");
    fetchData();
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="bg-gray-200 pt-10">
      <h1 className="text-3xl uppercase text-gray-400 text-center font-bold">
        Book finder
      </h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        fetchData={fetchData}
        handleClick={handleClick}
      />
      <div className="container mx-auto  grid grid-cols-2	gap-x-6 gap-y-20 py-10">
        {books &&
          books.map((book: any) => {
            return <Book key={book.id} book={book} />;
          })}
      </div>
    </div>
  );
}

export default App;
