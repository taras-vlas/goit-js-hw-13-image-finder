/*
 *     apiService.js  -  об'єкт виконує логіку
 */

const apiKey = '3ee881b7ed69420ebc0d692477003d40';

export default {
    searchQuery: '',
    page: 1,

    fetchArticles(searchQuery) {   ///* REST-пагінація */!!! отримати на цю адресу запит                                                  /* REST-пагінація */
        const url = `https://pixabay.com/api/?image_type=photo&
            orientation=horizontal&
            q=${this.query}&
            page=${this.page}&
            per_page=12&
            key=${apiKey}`; /* як варіант звернення до GET-ера  */

        const options = {
            headers: { Authorization: apiKey,},
        };

        return fetch(url, options)
            .then(res => res.json())    //повернення res.json()
            .then(({ articles }) => {
                //this.page += 1; /* виносим в incrementPage() */
                this.incrementPage(); /*  incrementPage() */

                return articles;
            });       // !!! Це відповідь на наш запит          
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