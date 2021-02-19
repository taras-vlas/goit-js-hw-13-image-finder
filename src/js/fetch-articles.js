// import articlesTpl from '../templates/articles.hbs'; // затягуємо цей шаблон templates  
// import refs from './refs';

// /// const refs = {
// ///     articlesContainer: document.querySelector('.js-articles'),
// ///     //searchForm: document.querySelector('.js-search-form'),
// /// };

// function updateArticlesMarkup(articles) {
//     const markup = articlesTpl(articles);
//     refs.articlesContainer.insertAdjacentHTML('beforeend', markup); 
//     //refs.articlesContainer.innerHTML += markup; /* НЕ використовувати innerHTML в разі постійних оновлень інфи в контейнері*/
// }

// export default updateArticlesMarkup;



import articles from './apiService';
import cardImagesTpl from '../templates/card-img.hbs';// затягуємо цей шаблон 
import refs from './refs';


refs.searchForm.addEventListener('submit', imageSearchInputHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

function imageSearchInputHandler(event) {

  event.preventDefault();

  const form = event.currentTarget;
  const input = form.elements.query;

  clearListItems();

  articles.resetPage();
  articles.searchQuery = input.value;

  articles.fetchArticles().then(hits => {
    const markup = buildListItemsTemplate(hits);
    listItems(markup);
  });
  input.value = '';
}

function loadMoreBtnHandler() {
  articles.fetcArticles().then(hits => {
    const markup = buildListItemsTemplate(hits);
    listItems(markup);
    window.scrollTo(0, 1000);

    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });
  });
}
function iserListItems(items) {
  refs.gallery.insertAdjacentHTML('beforeend', items);
}
function buildListItemsTemplate(items) {
  return cardImagesTpl(items);
}
function clearListItems() {
  refs.gallery.innerHTML = '';
}