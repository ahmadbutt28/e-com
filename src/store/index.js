import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex,axios);

export default new Vuex.Store({
 
  state:{
    posts:[],
    Catogary: [],
    post: "",
    singleproductData: [],
  },
  actions:{
    loadPosts({commit}){
      axios
           .get('https://fakestoreapi.com/products')
           .then(data => {
             console.log(data.data)
             let posts = data.data
             commit('SET_POSTS',posts)
           })
           .catch(error => {
             console.log(error)
           })
    },
    loadCatogary ({commit}) {
      axios
      .get('https://fakestoreapi.com/products/categories')
      .then(res => {
        console.log(res.data)
        let Catogary = res.data
        commit('SET_CATOGARY', Catogary)
      })
      .catch(error => {
        console.log(error)
      })
      
    },
    apiCall({ commit }, payload) {
      console.log(commit);
      console.log (payload);
      axios.get(`https://fakestoreapi.com/products/category/${payload}`).then((response) => {
            let data = response.data;
            console.log(data);
            commit('SET_CAT', data)
          })
  },
  fatchsingleProductData ({commit},payload) {
   
    axios
      .get(`https://fakestoreapi.com/products/${payload}`)
      .then(data => {
         console.log(data.data)
         let product = data.data
         commit('SET_PRODUCT', product)
      })
      .catch(error => {
        console.log(error)
      })
  },
  },

  mutations:{
    SET_POSTS (state,posts){
      state.posts = posts
    },
    SET_CATOGARY(state, Catogary){
      state.Catogary = Catogary
    },
    SET_CAT(state,post){
      state.post = post; 
    },
    SET_PRODUCT(state, singleproductData){
      state.singleproductData = singleproductData
  },
  },
  getters:{
    getCat(state){
       return state.post;
    }, 
    getSingleProduct(state){
      return state.singleproductData;
    } 
  },
  
});
