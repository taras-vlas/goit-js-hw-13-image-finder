import * as basicLightbox from 'basiclightbox';  // https://basiclightbox.electerious.com/  
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  // регистрируем обработчик события "click" для элемента <refs. ...>
  refs.galleryContainer().addEventListener('click', function(event) {  // function(event)  замість  () =>
    if (refs.photo().nodeName !== "IMG") {
      return;
    }
    
    const photo = event.target;
    const {source} = photo.dataset;
    const {alt} = photo;
    
        /* https://basiclightbox.electerious.com */
        const instance = basicLightbox.create(
            `<img src="${source}" alt="${alt}">`,
        );
        instance.show();
  });
  
};

   
export default lightBox;