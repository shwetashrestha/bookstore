export const SET_IMAGESLIDERS = 'SET_IMAGESLIDERS';
import $api from 'axios';
import Axios from 'axios';
const state = {
    imageslidles: []
    
};
const mutations = {
    [SET_IMAGESLIDERS](state, payload)  {
        state.imageslidles = payload;
    }
    };
const actions = {
    getImagesliders:async(context)=>{
        let {data} = await Axios.get(`http://localhost:8081/bookstore/public/api/imagesliders`)
        context.commit('SET_IMAGESLIDERS',data.data);       
    },  
   
    async addImagesliders(context, formData)
    {
        let url = `http://localhost:8081/bookstore/public/api/imagesliders`;
        let response = await $api.post(url, formData);
        await context.dispatch('getImagesliders');
        return true;
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    imageslidles: state => state.imageslidles,
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
