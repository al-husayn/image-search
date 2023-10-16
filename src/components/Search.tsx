import React, { useState } from "react";

const Search: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  return (
    <div className="flex justify-center items-center mt-4">
      <div>
        <h1 className="text-N300 font-P500">Image Search</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleSearchChange}
            className="p-4 rounded-l-md min-w-[70%] border border-N300 focus:outline-none font-P300"
          />
          <button
            type="submit"
            className="bg-O600 text-white p-4 rounded-r-md hover:bg-O100 focus:outline-none font-P500">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
