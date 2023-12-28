import { useState, CSSProperties } from "react";
import axios from "axios";

import { SearchBar } from "./components/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";
import { BookList } from "./components/BookList";

const override: CSSProperties = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "5rem",
};

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}?q=${searchTerm}&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      console.log(data);
      setBooks(data.items);
    } catch (err: any) {
      setIsError(err);
    } finally {
      setIsLoading(false);
      setSearchTerm("");
    }
  };

  if (isError) {
    <div>{isError}</div>;
  }

  return (
    <div className="bg-gray-200 pt-10">
      <h1 className="text-3xl uppercase text-gray-400 text-center font-bold">
        Book finder
      </h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      <div className="flex">
        {isLoading ? (
          <ClipLoader
            color="green"
            loading={isLoading}
            size={150}
            cssOverride={override}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <BookList books={books} />
        )}
      </div>
    </div>
  );
}

export default App;
