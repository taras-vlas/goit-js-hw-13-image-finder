
// Duka
/*      Використання ref:
 * - Контроль фокусу, виділення тексту чи контроль програвання медіа.
 * - Виклик імперативної(обов'язкової) анімації.
 * - Інтеграція зі сторонніми DOM-бібліотеками.
 */

const refs = {
  searchForm: () => document.querySelector('.js-search-form'),   // находим первый элемент <.js-search-form> в документе
  galleryContainer: () => document.querySelector('.gallery-container'),
  spin: () => document.querySelector('.spinner'),
  photo: () => document.querySelector('.photo'),  // находим первый элемент <.photo> в документе
  savedSearch: () => document.querySelector('.notification'),
  message: () => document.getElementById('js-search-yourQuery'),
};

export default refs;













  // list: document.querySelector('.gallery'),
  // btn: document.querySelector('.load-more'),
  // input: document.querySelector('input'),
  // sumbit: document.querySelector('.submit'),
