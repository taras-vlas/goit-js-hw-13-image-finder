
import fetchPhotos from '../index';

/* 
 * нескінчений скрол (infinityScroll)
 */

const infinityScroll = () => {
  window.addEventListener('scroll', function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
     // console.log('scrollTop + clientHeight: ', scrollTop + clientHeight,'scrollHeight: ', scrollHeight);
    
    if (scrollTop + clientHeight > scrollHeight) {
         setTimeout(fetchPhotos(), 2000);
    }
  });
};

export default infinityScroll;