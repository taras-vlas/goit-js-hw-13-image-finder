
/* Цей Клас може бути і Об'єктом */
export default class LoadMoreBtn {
    //constructor(selector) {
    constructor({ selector, hidden }) {              
    //constructor({ selector, hidden = false }) {    /*для btn без is-hidden*/    
        this.refs = this.getRefs(selector);
        hidden && this.refs.button.classList.add('is-hidden');/*для btn без is-hidden*/
        // this.refs.button = document.querySelector(selector);
        // this.refs.label = this.refs.button.querySelector('.label');
        // this.refs.spinner = this.refs.button.querySelector('.spinner');
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.label = refs.button.querySelector('.label');
        refs.spinner = refs.button.querySelector('.spinner');

        return refs;
    }

    enable() {   /*show*/ // методи Класа
        this.refs.button.disabled = false; /* коли все OK, вона включена*/
        this.refs.label.textContent = 'Load more';
        this.refs.spinner.classList.add('is-hidden'); /* Після загрузки Spinner ховаємо */ 
    }

    disable() {  /*hide*/
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.spinner.classList.remove('is-hidden'); /* Перед загрузкою Spinner прибираємо */ 
    }
    
    show() {  /* покажемо btn при першій загрузці */
        this.refs.button.classList.remove('is-hidden');
    }
}





/* Цей Об'єкт може бути і Класом */
// const loadMoreBtn = {
//     refs: {
//         button: document.querySelector('[data-action="load-more"]'),
//         label: document.querySelector('[data-action="load-more"] > .label'),
//         spinner: document.querySelector('[data-action="load-more"] > .spinner'),
//     },
//     enable() {   /*show*/
//         this.refs.button.disabled = false; /* коли все OK, вона включена*/
//         this.refs.label.textContent = 'Показати ще';
//         this.refs.spinner.classList.add('is-hidden'); /* Після загрузки Spinner ховаємо */ 
//     },
//     disable() {  /*hide*/
//         this.refs.button.disabled = true;
//         this.refs.label.textContent = 'Загрузка...';
//         this.refs.spinner.classList.remove('is-hidden'); /* Перед загрузкою Spinner прибираємо */ 
//     },
//     show() {  /* покажемо btn при першій загрузці */
//         this.refs.button.classList.remove('is-hidden');
//     },
// }

// export default loadMoreBtn;







// const loadMoreBtn = {  /* робимо об'єкт */
//     enable() {   /*show*/
//         refs.loadMoreBtn.disabled = false; /* коли все OK, вона включена*/
//         refs.loadMoreBtnLabel.textContent = 'Показати ще';
//         refs.loadMoreBtnSpinner.classList.add('is-hidden'); /* Після загрузки Spinner ховаємо */ 
//     },
//     disable() {  /*hide*/
//         refs.loadMoreBtn.disabled = true;
//         refs.loadMoreBtnLabel.textContent = 'Загрузка...';
//         refs.loadMoreBtnSpinner.classList.remove('is-hidden'); /* Перед загрузкою Spinner прибираємо */ 
//     },
//     show() {  /* покажемо btn при першій загрузці */
//         refs.loadMoreBtn.classList.remove('is-hidden');
//     },
// }


// const loadMoreBtn = document.querySelector('[data-action="load-more"]');
// const loadMoreBtnLabel = loadMoreBtn.querySelector('.label',);
// const loadMoreBtnSpinner = loadMoreBtn.querySelector('.spinner',);