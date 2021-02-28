/*
 *     apiService.js  -  об'єкт виконує логіку
 */

//const apiKey = '20347157-bf35dc9934e298cd0bab289fc';
                
export default {
    searchQuery: '',
    page: 1,
    //  apiKey: '20347157-bf35dc9934e298cd0bab289fc',
              
     
                        /* REST-пагінація */  //!!! отримати на цю адресу запит    
async fetchArticles() {   //async один простой смысл: эта функция всегда возвращает промис.   
      const apiKey = '20347157-bf35dc9934e298cd0bab289fc';
    const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&q=${this.searchQuery}&per_page=12&page=${this.page}`; /* як варіант звернення до GET-ера  */
       
    // const options = {
    //     headers: { Authorization: apiKey,},
    // };

    // return fetch(url, options)
        return fetch(url)    
            .then(res => res.json())    //повернення res.json()
             .catch(console.log)
            .then(({ hits }) => {
                //this.page += 1; /* виносим в incrementPage() */
                this.incrementPage(); /*  incrementPage() */

                return hits;
            })       // !!! Це відповідь на наш запит  
             .catch(error => console.log(error));        
    },
    resetPage() {
        this.page = 1;
    },    
    incrementPage() {  /* створюєм incrementPage() */
        this.page += 1;
    },
    get query() {         /*  на всяк випадок стоять */
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },

};



// export default {
//     query: '',
//     page: 1,
//     //  apiKey: '20347157-bf35dc9934e298cd0bab289fc',
              
     
//                         /* REST-пагінація */  //!!! отримати на цю адресу запит    
// async fetchArticles(query) {   //async один простой смысл: эта функция всегда возвращает промис.   
//       const apiKey = '20347157-bf35dc9934e298cd0bab289fc';
//     const url = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&q=${this.query}&per_page=12&page=${this.page}`; /* як варіант звернення до GET-ера  */
       
//     // const options = {
//     //     headers: { Authorization: apiKey,},
//     // };

//     // return fetch(url, options)
//         return fetch(url)    
//             .then(res => res.json())    //повернення res.json()
//              .catch(console.log)
//             .then(({ hits }) => {
//                 //this.page += 1; /* виносим в incrementPage() */
//                 this.incrementPage(); /*  incrementPage() */

//                 return hits;
//             })       // !!! Це відповідь на наш запит  
//              .catch(error => console.log(error));        
//     },
//     resetPage() {
//         this.page = 1;
//     },    
//     incrementPage() {  /* створюєм incrementPage() */
//         this.page += 1;
//     },
//     get searchQuery() {         /*  на всяк випадок стоять */
//         return this.query;
//     },
//     set searchQuery(value) {
//         this.query = value;
//     },

// };