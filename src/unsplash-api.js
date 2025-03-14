import axios from 'axios';

const accessKey = 'ZKZwrADfPTEUElkSE0-Glih-SGMnhAbU1FxBHNmdhqY';
// axios.defaults.baseURL = 'https://api.unsplash.com/search';
// axios.defaults.headers.common = { Authorization: `Client-ID ${accessKey}` };
// axios.defaults.params = {
//   per_page: 12,
//   orientation: 'landscape',
// };

// export const fetchImages = async (query, page) => {
//   const { data } = await axios.get(`photos?query=${query}&page=${page}`);

//   return data;
// };

export const fetchImages = async (query, page) => {
  const { data } = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: 15,
      orientation: 'landscape',
    },
    headers: { Authorization: `Client-ID ${accessKey}` },
  });

  return data;
};
