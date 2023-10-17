import React, { useState, useRef } from "react";
import { useFetch } from "../hook/useFetch";
import { ErrorMessage, LoadingMessage, ImageList } from ".";
const API_KEY = import.meta.env.VITE_API_KEY;


const Search: React.FC = () => {
  const [searchData, setSearchData] = useState<string>("");
  const searchInput = useRef<HTMLInputElement | null>(null);

  const predefinedSearchTerms = ["Nature", "Birds", "Women", "Laptops"];

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = searchInput.current?.value;
    if (searchTerm) {
      setSearchData(searchTerm);
    }
  };

  const { data, isLoading, isError } = useFetch(searchData, 20, API_KEY);
  

  console.log("daaaaaaaaaaa", data?.results);
  

  const handleQuickSearch = (term: string) => {
    if (searchInput.current) {
      searchInput.current.value = term;
      handleSubmit(
        new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <div className="w-1/2 justify-center items-center">
        <>
          <div className="m-10">
            <h1 className="text-black font-semibold text-center text-3xl">
              Image Search
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="text-center">
            <input
              type="text"
              placeholder="Search..."
              ref={searchInput}
              className="p-4 rounded-l-md min-w-70% border border-N300 focus:outline-none font-P300"
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
        </>
      </div>
      <div className="mt-10">
        {isLoading ? (
          <LoadingMessage />
        ) : isError ? (
          <ErrorMessage />
        ) : (
          <ImageList data={data} />
        )}
      </div>
    </div>
  );
};

export default Search;
