/*
 *     apiService.js  -  об'єкт виконує логіку
 */
import axios from 'axios';
import makeMarkup from '../templates/card.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { debounce } from 'debounce';
import ref from './refs';
import pnotify from './notification';

const API_KEY = '18642153-339199c7f42c73c0db1ceac08';

let hasEventListener = false;
ref.sumbit.addEventListener('click', search);

let page = 1;

function search(event) {
  event.preventDefault();

  ref.list.innerHTML = '';
  page = 1;
  makeRequest();
  if (!hasEventListener) {
    window.addEventListener('scroll', debounce(loadMorePgs, 500));
  }
}

async function makeRequest() {
  const requestWord = ref.input.value;

  try {
    const request = await axios.get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${requestWord}&page=${page}&per_page=12&key=${API_KEY}`,
    );

    if (requestWord === '') {
      pnotify.showNotice();
      return;
    }
    handleRequest(request);

    return request;
  } catch (error) {
    throw error;
  }
}

function handleRequest(request) {
  const data = request.data.hits;
  const markup = makeMarkup(data);
  ref.list.insertAdjacentHTML('beforeend', markup);
  if (markup.length >= 12) {
    pnotify.showSuccess();
  } else if (markup.length === 0) {
    pnotify.showError();
    ref.btn.classList.add('is-hidden');
  }

  scroll();

  openModal();
  addClass();
}

function openModal() {
  ref.list.addEventListener('click', createModal);
}

function createModal({ target }) {
  if (target.tagName === 'IMG') {
    const instance = basicLightbox.create(`
  <div class='modal'> <img src='${target.dataset.image}' width='1200' height ='800'></div>`);
    window.addEventListener('keydown', event => onPressKey(event, instance));
    instance.show();
  }
}

function onPressKey(event, instance) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function addClass() {
  ref.btn.classList.add('active');
}

async function loadMorePgs() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    hasEventListener = true;
    page += 1;
    makeRequest();
  }
}