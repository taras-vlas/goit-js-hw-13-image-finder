
import fetchPhotos from '../index';

/* 
 * нескінчений скрол (infinityScroll) у видимій області (viewport)
 * https://developer.mozilla.org/ru/docs/Web/API/Element/scrollHeight
 *  + 47-хв. 26-веб.
      console.log('document.documentElement.offsetHeight', document.documentElement.offsetHeight);

         window.scrollBy({
          top: scrollHeight,
          behavior: 'smooth',  //Плавна прокрутка
   });
 */

const infinityScroll = () => {
  
  window.addEventListener('scroll', () => {
    
    const scrollHeight = document.documentElement.scrollHeight;
      //console.log('scrollHeight', scrollHeight);    
    const scrollTop = document.documentElement.scrollTop; //scrollBy  scrollTo, scrollTop        
      //console.log('scrollTop', scrollTop);
    const clientHeight = document.documentElement.clientHeight;

      console.log('scrollTop + clientHeight: ', scrollTop + clientHeight,'scrollHeight: ', scrollHeight);
     /* (this.scrollHeight - this.scrollTop === this.clientHeight) возвращает true, если элемент был прокручен до конца */
    if (scrollTop + clientHeight >= scrollHeight) setTimeout(fetchPhotos(), 1000);
  });
};

export default infinityScroll;