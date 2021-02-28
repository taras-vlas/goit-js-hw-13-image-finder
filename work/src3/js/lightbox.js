import * as basicLightbox from 'basiclightbox';  // https://basiclightbox.electerious.com/  
import 'basicLightbox/src/styles/main.scss';
import refs from './refs';

const lightBox = () => {
  refs.galleryContainer().addEventListener('click', () => {  // регистрируем обработчик события "click" для элемента <refs. ...>
    if (refs.photo().nodeName !== 'IMG') {
      return;
    }
    const photo = event.target;
    const { source } = photo.dataset;
    console.log('c');
    const { alt } = photo;
    
        // https://basiclightbox.electerious.com/
        const instance = basicLightbox.create(
            `<img src = "${source}" alt ="${alt}">`,
        );
        instance.show();
  });
};

export default lightBox;