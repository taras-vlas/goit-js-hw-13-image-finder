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



import service from './apiService';
import cardImagesTpl from '../templates/img-gallery.hbs';// затягуємо цей шаблон 
import refs from './refs';

/* приєднуємо/додаємо обрабник події 'submit','click' до елементу searchForm, loadMoreBtn*/ 
refs.searchForm.addEventListener('submit', imgSearchInputHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);

/* Ф-я обробник події , яка навішена на обрабник ПОДАЧІ */
function imgSearchInputHandler(evt) {
    
    /* Відмінюєм перехід за посиланням, тобто змінюємо поведінку браузера за замовчуванням */
    evt.preventDefault();   
    
    const form = evt.currentTarget;
    const input = form.elements.query;
    
    clearListItems();

    service.resetPage();
    service.searchQuery = input.value;
             
    service.fetchArticles()
        .then(hits => {
            const markup = buildListItemsTemplate(hits);
                //console.log('markup: ', markup); 
            listItems(markup);
        });
    input.value = '';
}

// Ф-я обробник події , яка навішена на кнопку обрабник кліка
function loadMoreBtnHandler() {
    service.fetchArticles()
        .then(hits => {
            const markup = buildListItemsTemplate(hits);
            insertListItems(markup);
      
            window.scrollTo(0, 1000);

            window.scrollTo({
                top: 1000,
                behavior: 'smooth',
            });
      
        });
}
function insertListItems(items) {
    refs.gallery.insertAdjacentHTML('beforeend', items);  //разбирає вказаний текст як HTML і вставляє отримані вузли (nodes) в DOM дерево у вказану позицію
}
function buildListItemsTemplate(items) {
    return cardImagesTpl(items);
}
function clearListItems() {
    refs.gallery.innerHTML = '';
}