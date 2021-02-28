/*  Знаходимо на сторінці фoрму/попап, articles, кнопку */
const searchForm = document.querySelector('#search-form');
//const searchForm = document.querySelector('.js-search-form');

//const articlesContainer = document.querySelector('.js-articles');
const gallery = document.querySelector('.gallery');

//const loadMoreBtn = document.querySelector('[data-action="load-more"]');
const loadMoreBtn = document.querySelector('button[data-action="load-more"]');

// const loadMoreBtnLabel = loadMoreBtn.querySelector('.label',);
// const loadMoreBtnSpinner = loadMoreBtn.querySelector('.spinner',);

export default {
    searchForm,
    // articlesContainer,
    gallery,
    loadMoreBtn,
    // loadMoreBtnLabel,
    // loadMoreBtnSpinner,
};

// Duka
/*      Використання refs:
 * - Контроль фокусу, виділення тексту чи контроль програвання медіа.
 * - Виклик імперативної(обов'язкової) анімації.
 * - Інтеграція зі сторонніми DOM-бібліотеками.
 */