import axios from 'axios';

import { UNSPLASH_ACCESS_KEY } from '@env';
const BASE_URL = 'https://api.unsplash.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
  },
});

export const searchPhotos = async (query, page = 1) => {
  try {
    const response = await api.get('/search/photos', {
      params: {
        query,
        page,
        per_page: 20,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Unsplash API Error:', error);
    throw error;
  }
};
