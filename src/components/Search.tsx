import React, { useRef } from "react";

const Search: React.FC = () => {
  const searchInput = useRef<HTMLInputElement | null>(null);

  const predefinedSearchTerms = ["Nature", "Birds", "Women", "Laptops"];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("You searched for", searchInput.current?.value);
  };

  const handleQuickSearch = (term: string) => {
    if (searchInput.current) {
      searchInput.current.value = term;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="w-[50%]">
        <div className="m-10">
          <h1 className="text-black H900 text-center text-3xl">Image Search</h1>
        </div>
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            placeholder="Search..."
            ref={searchInput}
            className="p-4 rounded-l-md min-w-[70%] border border-N300 focus:outline-none font-P300"
          />
          <button
            type="submit"
            className="bg-O200 text-white p-4 rounded-r-md hover:bg-O100 focus:outline-none font-P500">
            Search
          </button>

          <div className="mt-4">
            {predefinedSearchTerms.map((term, index) => (
              <button
                key={index}
                onClick={() => handleQuickSearch(term)}
                className="bg-O200 text-black p-2 m-2 rounded-md hover:bg-O100 focus:outline-none font-P400">
                {term}
              </button>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
