
import './styles.css';
import apiService from './js/apiService';
import renderMarkup from './js/updateMarkup';
import refs from './js/refs';
import infinityScroll from './js/scroll';
import lightBox from './js/lightbox';


refs.searchForm().addEventListener('submit', function(event) { // регистрируем обработчик события "submit" для элемента <refs.searchForm()>  //подія submit на [ФОРМІ]- відвідувач 
  event.preventDefault();                                   //event.preventDefault() визиваєм якщо є помилки  
  const form = event.currentTarget;                      //event.currentTarget - элемент, на котором сработал обработчик: читання

  apiService.searchQuery = form.elements.query.value;

  refs.galleryContainer().innerHTML = '';
  apiService.resetPage();
  fetchPhotos();
  savedSearchText();
  lightBox();
  form.reset();

  //messageText();
});

  infinityScroll();


      function fetchPhotos() {
        refs.spin().classList.remove('is-hidden');
        apiService.fetchPhotos()
          .then(photos => {
            renderMarkup(photos);
          })
          .finally(() => refs.spin().classList.add('is-hidden'));
      }

const savedSearchText = () => {
  //refs.savedSearch().classList.remove('is-hidden');

        /*  Results for <span id="js-search-notification"> */
        //const messageText = (event) => {
    const form = event.currentTarget; //event.currentTarget - элемент, на котором сработал обработчик 
    refs.message().textContent = form.elements.query.value;
    //refs.savedSearch().textContent = form.elements.query.value;
        //};
};     

//   /* '.notification' */
// const savedSearchText = () => {
//   refs.savedSearch().classList.remove('is-hidden');
// };

//   /*  Results for <span id="js-search-notification"> */
// const messageText = (event) => {
//   const form = event.currentTarget; //event.currentTarget - элемент, на котором сработал обработчик 
//   refs.message().textContent = form.elements.query.value;
// };

export default fetchPhotos;



/*            Всплытие 
 *       Алгоритм:          https://learn.javascript.ru/bubbling-and-capturing
 * - При наступлении события – элемент, на котором оно произошло, помечается как «целевой» (event.target).
 * - Далее событие сначала двигается вниз от корня документа к event.target, по пути вызывая обработчики, поставленные через addEventListener(...., true).
 * - Далее событие двигается от event.target вверх к корню документа, по пути вызывая обработчики, поставленные через on* и addEventListener(...., false).
 *      
 *       Каждый обработчик имеет доступ к свойствам события: 
 * - event.target – самый глубокий элемент, на котором произошло событие.
 * - event.currentTarget (=this) – элемент, на котором в данный момент сработал обработчик (до которого «доплыло» событие).
 * - event.eventPhase – на какой фазе он сработал (погружение =1, всплытие = 3).
 */