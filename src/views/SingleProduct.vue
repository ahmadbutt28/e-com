<template>
<!-- This folder shows a product that is being view by clicking on see details button -->
  <div class="backimage">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

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
      <v-btn class="ml-2" to="/profile">
        <v-icon>mdi-update</v-icon>
        profile</v-btn
      >
      <v-btn class="ml-2" @click="log()" >
        <v-icon>mdi-logout</v-icon>
        Logout</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
    </v-navigation-drawer>

    <v-card class="mx-auto mt-10" max-width="344">
      <v-card-title class="text-center">
        {{ getSingleProduct.category }}
      </v-card-title>
      <v-img :src="getSingleProduct.image" height="200px"></v-img>

      <v-card-title>
        {{ getSingleProduct.title }}
      </v-card-title>

      <v-card-subtitle> ${{ getSingleProduct.price }} </v-card-subtitle>

      <v-btn color="success" outlined @click="button()">
        <v-icon left small>mdi-plus</v-icon>
        Add to Cart</v-btn
      >

      <v-card-actions>
        <v-btn color="orange lighten-2" text> Description </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon @click="show = !show">
          <v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ getSingleProduct.description }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
    <v-snackbar top color="green" v-model="snackbar">
      Successfully Add to Cart
    </v-snackbar>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "../views/footer";

export default {
  components: {
    Footer,
  },

  data: () => ({
    show: false,
    snackbar: false,
  }),

  methods: {
    button() {
      this.snackbar = true;
    },
    log(){
      localStorage.setItem("currentUser","");
      this.$router.push({name:"SignUp"});
    }
  },

  computed: {
    ...mapGetters(["getSingleProduct"]),
  },
};
</script>

<style>
.backimage {
  background-image: url("https://images.unsplash.com/photo-1627483262268-9c2b5b2834b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
  height: max-content;
}
</style>
