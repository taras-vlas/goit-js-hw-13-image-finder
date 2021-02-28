
const refs = {
searchForm: document.querySelector('.js-search-form'),
articlesContainer: document.querySelector('.js-articles'),

    galleryContainer: () => document.querySelector('.gallery'),
    photo: () => document.querySelector('.photo'),         // находим первый элемент <.photo> в документе
    
    savedSearch: () => document.querySelector('.notification'), //повідомлення
    message: () => document.getElementById('js-search-yourQuery'),
    };

export default refs;
    
/* запис ЕКВІВАЛЕНТний */
// const searchForm = document.querySelector('.js-search-form');
// const articlesContainer = document.querySelector('.js-articles');

// // const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// // const loadMoreBtnLabel = loadMoreBtn.querySelector('.label',);
// // const loadMoreBtnSpinner = loadMoreBtn.querySelector('.spinner',);

// export default {
//     searchForm,
//     articlesContainer,
        
//     // loadMoreBtn,
//     // loadMoreBtnLabel,
//     // loadMoreBtnSpinner,
// };

