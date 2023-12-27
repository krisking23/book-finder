import { useState, CSSProperties } from "react";
import axios from "axios";
import { Book } from "./components/Book";
import { SearchBar } from "./components/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  marginLeft: "auto",
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

      setBooks(data.items);
    } catch (err: any) {
      setIsError(err);
    } finally {
      setIsLoading(false);
    }
  };

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
      <div className="container mx-auto grid grid-cols-2 gap-x-6 gap-y-20 py-10">
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
          books?.map((book: any) => {
            return <Book key={book.id} book={book} />;
          })
        )}
      </div>
    </div>
  );
}

export default App;
