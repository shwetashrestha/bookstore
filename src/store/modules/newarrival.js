export const SET_NEWARRIVALS = 'SET_NEWARRIVALS';
import $api from 'axios';
import Axios from 'axios';
const state = {
    newarrivals: []
    
};
const mutations = {
    [SET_NEWARRIVALS](state, payload)  {
        state.newarrivals = payload;
    }
    };
const actions = {
    getNewarrivals:async(context)=>{
        let {data} = await Axios.get(`http://localhost:8081/bookstore/public/api/newarrivals`)
        context.commit('SET_NEWARRIVALS',data.data);       
    },  
   
    addNewarrivals(context, formData)
    {
        let url = `http://localhost:8081/bookstore/public/api/newarrivals`;
        $api.post(url, formData).then(res => {
            context.dispatch('getNewarrivals');
        })
    }
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
    newarrivals: state => state.newarrivals,
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
