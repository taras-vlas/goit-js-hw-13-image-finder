import articlesTpl from '../templates/articles.hbs'; // затягуємо цей шаблон templates  
import refs from './refs';

/// const refs = {
///     articlesContainer: document.querySelector('.js-articles'),
///     //searchForm: document.querySelector('.js-search-form'),
/// };

function updateArticlesMarkup(articles) {
    const markup = articlesTpl(articles);
    refs.articlesContainer.insertAdjacentHTML('beforeend', markup); 
    //refs.articlesContainer.innerHTML += markup; /* НЕ використовувати innerHTML в разі постійних оновлень інфи в контейнері*/
}

export default updateArticlesMarkup;