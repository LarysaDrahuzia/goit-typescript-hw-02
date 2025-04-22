import axios from 'axios';
import { UnsplashResponse } from './components/App/App.types';

const accessKey = 'ZKZwrADfPTEUElkSE0-Glih-SGMnhAbU1FxBHNmdhqY';

export const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
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
