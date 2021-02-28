/*        -  Дає уявлення
Використання окремого об'єкта для збереження логіки /чи уявлення 
Можна виконувати як:
    як об'єкт (+методи, +властивості/property);
    як модуль;
    локальними змінними;
    функціями;
    класами
*/


import './styles.css';
//import './sass/styles.scss';
//import articlesTpl from './templates/articles.hbs'; // затягуємо цей шаблон templates  /////забираєм до ...js
//import fetchArticles from './js/apiService.js';

import apiService from './js/apiService';
    console.log('apiService: ', apiService);   
import updateArticlesMarkup from './js/update-articles-markup.js';
//import loadMoreBtn from './js/components/load-more-button'; /* Варіант для  Об'єкта */ 
  import LoadMoreBtn from './js/components/load-more-button'; /* Варіант для  Класу */
import refs from './js/refs';
  import lightBox from './js/lightbox';
  import infinityScroll from './js/scroll';  

 /* fetch - отримати | api = backend  */


/* Варіант для  Класу */
//console.log(new LoadMoreBtn('button[data-action="load-more"]'));
/* Робимо новий spinner */
//const loadMoreBtn = new LoadMoreBtn('button[data-action="load-more"]');
//console.log(loadMoreBtn);
const loadMoreBtn = new LoadMoreBtn({  /*для btn без is-hidden*/
    selector: 'button[data-action="load-more"]',
    hidden: true,                  
    });
 console.log(loadMoreBtn); 

// const loadMoreUsersBtn = new LoadMoreBtn('.load-more-enything'); /* Можна зробити безліч цих кнопок на Класі */
//  console.log(loadMoreUsersBtn);

refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function searchFormSubmitHandler(event) {
    event.preventDefault();

    const form = event.currentTarget;   
    apiService.query = form.elements.query.value;
        console.log('apiService.query: ', apiService.query);
    
    clearArticlesContainer();
    apiService.resetPage();
    fetchArticles();
    form.reset();  
         savedSearchText();
        lightBox(); 
        
}

    infinityScroll();
        
function fetchArticles() {
    loadMoreBtn.disable();

    apiService.fetchArticles().then(articles => {
        updateArticlesMarkup(articles);
        loadMoreBtn.show();
        loadMoreBtn.enable();
    });
}   


        const savedSearchText = () => {
        // //refs.savedSearch().classList.remove('is-hidden');

        //         /*  Results for <span id="js-search-yourQuery"> */
        //         //const messageText = (event) => {
        const form = event.currentTarget; //event.currentTarget - элемент, на котором сработал обработчик 
            
        refs.message().textContent = form.elements.query.value;
           // console.log('refs.message().textContent', refs.message().textContent)
            //refs.savedSearch().textContent = form.elements.query.value;
                //};
        };  


function clearArticlesContainer() {
    refs.articlesContainer.innerHTML = '';  /* хороший спосіб очистки */
}


export default fetchArticles;
