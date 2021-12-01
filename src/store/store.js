import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
vue.use( vuex , axios)

export default new vuex.Store({
    state: {
        posts:[
            

        ],
        
    },
    actions:{
        LoadPosts({commit}){
             axios
                 .get('https://fakestoreapi.com/products')
                 .then(data =>{
                     console.log(data.data)
                     let post = data.data
                     commit('SET_POSTS',posts)
                 })
                 .catch(error=> {
                     console.log(error)
                 })
        }

    },
    mutations:{
        SET_POSTS(state, posts){
            state.posts = posts
        }
    }

})