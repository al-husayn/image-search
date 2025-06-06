import React, { useState, useRef, useEffect } from "react";
import { useFetch } from "../hook/useFetch";
import { ErrorMessage, LoadingMessage, ImageList } from ".";
const API_KEY = import.meta.env.VITE_API_KEY;


const Search: React.FC = () => {
  const [searchData, setSearchData] = useState<string>("");
  const searchInput = useRef<HTMLInputElement | null>(null);
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { data, isLoading, isError } = useFetch(searchData, page, API_KEY);

  const predefinedSearchTerms = ["Nature", "Birds", "Women", "Laptops"];

  useEffect(() => {
   if(data){
    setTotalPages(data?.total_pages)
   }
  }, [data])
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const searchTerm = searchInput.current?.value;
    if (searchTerm) {
      setSearchData(searchTerm);
      setPage(1)
    }
  };

  

  

  const handleQuickSearch = (term: string) => {
    if (searchInput.current) {
      searchInput.current.value = term;
      handleSubmit(
        new Event("submit") as unknown as React.FormEvent<HTMLFormElement>
      );
    }
  };
  const handlePage =(newPage:number)=>{
    if(newPage >= 1 && newPage <= totalPages){
      setPage(newPage)
    }
  }

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
          <ImageList data={data} onPageChange={handlePage} currentPage={page} totalPages={totalPages}/>
        )}
      </div>
    </div>
  );
};

export default Search;
