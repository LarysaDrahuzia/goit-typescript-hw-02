export type Image = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
    small: string;
  };
};

export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: Image[];
};
