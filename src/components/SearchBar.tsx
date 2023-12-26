import React, { FC, useState, MouseEvent, MouseEventHandler } from "react";

interface BioProps {
  searchTerm: string;
  setSearchTerm: Function;
  fetchData: Function;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const SearchBar: FC<BioProps> = ({
  searchTerm,
  setSearchTerm,
  fetchData,
  handleClick,
}) => {
  const handleInputChange = (e: any) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="relative text-gray-600 focus-within:text-gray-400">
        <form onSubmit={() => fetchData()}>
          <input
            type="text"
            className="w-full py-2 pl-8 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleClick}>Click</button>
        </form>
      </div>
    </div>
  );
};
