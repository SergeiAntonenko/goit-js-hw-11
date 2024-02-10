'use strict';

export function searchImages(searchQuery) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api';
  const API_KEY = '/?key=42307654-d98cffd477e66adb5fa77b8c6';
  const PARAMS = `&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;

  const url = BASE_URL + END_POINT + API_KEY + PARAMS;

  return fetch(url)
    .then(res => {
      return res.json();
    })
    .catch(err => {
      throw new Error(err.status);
    });
}
