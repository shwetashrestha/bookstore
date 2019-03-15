export const SET_BESTBOOKS = 'SET_BESTBOOKS';
import $api from 'axios';
import Axios from 'axios';
const state = {
    bestbooks: []
    
};
const mutations = {
    [SET_BESTBOOKS](state, payload)  {
        state.bestbooks = payload;
    }
    };
const actions = {
    getBestbooks:async(context)=>{
        let {data} = await Axios.get(`http://localhost:8081/bookstore/public/api/bestbooks`)
        context.commit('SET_BESTBOOKS',data.data);       
    },  
   
    addBestbooks(context, formData)
    {
        let url = `http://localhost:8081/bookstore/public/api/bestbooks`;
        $api.post(url, formData).then(res => {
            context.dispatch('getBestbooks');
        })
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    bestbooks: state => state.bestbooks,
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
