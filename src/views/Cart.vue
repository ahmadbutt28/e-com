<template>
    <div>
         <v-app-bar app>
      <v-toolbar-title>Shopify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/Home">
        <v-icon>mdi-home</v-icon>
        Home</v-btn
      >
      <v-btn class="ml-2" to="/Category">
        <v-icon>mdi-basket</v-icon>
        Category</v-btn
      >
       <v-btn class="ml-2" router to="/cart">
        <v-icon>mdi-cart</v-icon>
        Cart</v-btn>
      <v-btn class="ml-2" to="/profile">
        <v-icon>mdi-update</v-icon>
        profile</v-btn
      >
      <v-btn class="ml-2" @click="log()" >
        <v-icon>mdi-logout</v-icon>
        Logout</v-btn
      >
      
    </v-app-bar>
        <div v-for="(data,index) in getCart" :key="index">

        <p>

        {{data.title}}
        </p>

<img :src="data.image" alt="">
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed:{
    ...mapGetters(["getCart"])
    }
    
}
</script>