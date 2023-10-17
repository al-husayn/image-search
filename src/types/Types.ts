export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Image {
  id: string;
  description: string;
  alt_description: string;
  urls: ImageUrls;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: Image[];
}
