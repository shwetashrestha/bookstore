export const SET_BOOKS = 'SET_BOOKS';
import $api from 'axios';
import Axios from 'axios';
const state = {
    books: []
    
};
const mutations = {
    [SET_BOOKS](state, payload)  {
        state.books = payload;
    }
    };
const actions = {
    getBooks:async(context)=>{
        let {data} = await Axios.get(`http://localhost:8081/bookstore/public/api/books`)
        context.commit('SET_BOOKS',data.data);       
    },  
   
    addBooks(context, formData)
    {
        let url = `http://localhost:8081/bookstore/public/api/books`;
        $api.post(url, formData).then(res => {
            context.dispatch('getBooks');
        })
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
books: state => state.books,
}

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
    state,
    mutations,
    actions,
    getters
}
