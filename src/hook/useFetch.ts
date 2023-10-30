import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const API_URL = "https://api.unsplash.com/search/photos";

export const fetchImageData = async (url: string) => {
  const response = await axios.get(url);
  console.log('AAAAAAAAA', response?.data);
  
  return response.data;
};

export const useFetch = (
  searchTerm: unknown,
  page: unknown,
  apiKey: unknown
) => {
  const imagesPerPage = 20;
  const apiUrl = `${API_URL}?query=${searchTerm}&page=${page}&per_page=${imagesPerPage}&client_id=${apiKey}`;

  return useQuery(["imageData", apiUrl], () => fetchImageData(apiUrl), {
    enabled: true,
  });
};
