/*
 *  Візуалізація розмітки (render Markup)  
 */
  
import galleryItem from '../templates/gallery-item.hbs';
import refs from './refs';

function renderMarkup(hits) {
  const markup = galleryItem(hits);
  refs.galleryContainer().insertAdjacentHTML('beforeend', markup); 
 
}

export default renderMarkup;
