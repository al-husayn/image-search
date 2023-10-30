import React from "react";
import { Image, UnsplashResponse } from "../types/Types";

const ImageList: React.FC<{ data: UnsplashResponse; onPageChange: (newPage:number)=> void; currentPage: number; totalPages: number }> = ({ data , onPageChange,currentPage, totalPages}) => {
  
  // Check if data is not empty and contains results
  const hasData = data && data.results && data.results.length > 0;

  return (
    <div className="flex flex-wrap justify-center align-center h-96">
      {hasData &&
        data.results.map((image: Image) => (
          <div
            key={image.id}
            className="w-72 h-64 justify-self-center self-center rounded-lg transition-transform transform hover:-translate-y-3">
            <img
              src={image.urls?.small}
              alt={image?.alt_description}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      {hasData && (
        <div className="flex">
          {currentPage > 1 && (
            <button
              className="bg-O200 text-black p-2 m-2 rounded-md hover:bg-O100 focus:outline-none font-P400"
              onClick={() => onPageChange(currentPage - 1)}>
              Prev
            </button>
          )}
          {currentPage < totalPages && (
            <button
              className="bg-O200 text-black p-2 m-2 rounded-md hover:bg-O100 focus:outline-none font-P400"
              onClick={() => onPageChange(currentPage + 1)}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageList;
