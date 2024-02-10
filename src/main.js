'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { searchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { galleryList } from './js/render-functions';

const form = document.querySelector('.form');
const loaderContainer = document.querySelector('.loader-container');
const iziToastOptions = {
  backgroundColor: 'red',
  messageColor: 'white',
  messageSize: '14',
  position: 'topRight',
  timeout: 3000,
};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  galleryList.innerHTML = '';
  loaderContainer.classList.remove('is-hidden');
  const searchQuery = e.target.elements.input.value.trim();
  searchImages(searchQuery).then(data => {
    loaderContainer.classList.add('is-hidden');
    if (data.totalHits === 0) {
      iziToast.show({
        ...iziToastOptions,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else if (searchQuery === '') {
      loaderContainer.classList.add('is-hidden');
      iziToast.show({
        ...iziToastOptions,
        message: 'Fill out the search form!',
      });
    } else {
      loaderContainer.classList.add('is-hidden');
      renderImages(data);
    }
  });
  e.target.reset();
}
