import React from 'react';
import {  Image, UnsplashResponse } from '../types/Types'

const ImageList:React.FC <{ data: UnsplashResponse }>  = ({ data }) => {
    
  return (
    <div className="flex flex-wrap justify-center align-center h-96">
      {data?.results.map((image: Image) => (
        <div
          key={image.id}
          className="w-96 h-64 justify-self-center self-center rounded-lg transition-transform transform hover:-translate-y-3">
          <img
            src={image.urls?.small}
            alt={image?.alt_description}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageList;
