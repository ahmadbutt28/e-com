<template>
  <v-app id="inspire">
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
      <v-btn class="ml-2" to="/Catogary">
        <v-icon>mdi-basket</v-icon>
        Catogary</v-btn
      >
      <v-btn class="ml-2" to="/profile">
        <v-icon>mdi-update</v-icon>
        profile</v-btn
      >
      <v-btn class="ml-2" @click="log()" to="/" >
        <v-icon>mdi-logout</v-icon>
        Logout</v-btn
      >
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
    </v-navigation-drawer>

    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>

    <v-main class="grey lighten-2 mb-10">
      <v-container>
        <!-- Adding cards from vuetify and images from api -->
        <v-row>
          <!-- Adding cards from vuetify and images from api -->
          <template v-for="(item, index) in posts">
            <v-card :key="index" class="mx-auto mt-5" max-width="375px">
              <v-card-title
                class="font-weight-bold text-center text-h5 text-uppercase"
                >{{ item.category }}</v-card-title
              >
              <v-img
                class="white--text align-end"
                height="350px"
                width="350px"
                :src="item.image"
              >
              </v-img>

              <v-card-subtitle class="pb-0"> {{ item.title }} </v-card-subtitle>

              <v-card-text class="text--primary"> </v-card-text>

              <v-card-actions class="d-flex justify-space-between">
                <v-chip class="ms-5" text-color="white" color="black"
                  >${{ item.price }}</v-chip
                >
                <v-btn class="me-5" fab dark small color="black">
                  <v-icon dark>mdi-shopping bag</v-icon>
                </v-btn>
              </v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="success"
                class="mx-3 mb-5 mt-5 ms-5"
                outlined
                @click="button()"
              >
                <v-icon left small>mdi-plus</v-icon>
                Add to Cart</v-btn
              >
              <v-btn
                class="mx-3 mb-5 mt-5 ms-5"
                @click="fatchsingleProductData(item.id)"
                >See Details</v-btn
              >
            </v-card>
          </template>
        </v-row>
      </v-container>
    </v-main>
    <v-snackbar top color="green" v-model="snackbar">
      Successfully Add to Cart
    </v-snackbar>
    <Footer />
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Footer from "./footer";

export default {
  components: {
    Footer,
  },

  name: "Main",
  mounted() {
    if(localStorage.getItem("currentUser") == ""){

          this.$router.push({ name: "SignUp" });

 

      }
    this.$store.dispatch("loadPosts");
  },
  computed: {
    ...mapState(["posts"]),
    ...mapGetters(["getSingleProduct"]),
  },
  methods: {
    button() {
      this.snackbar = true;
    },
    fatchsingleProductData(apiId) {
      this.$store.dispatch("fatchsingleProductData", apiId);
      this.$router.push({ name: "SingleProduct" });
    },
    log(){
      this.$router.push({name:"Signup"});
      localStorage.setItem("currentUser","");
    }
  },

  data: () => ({
    drawer: null,
    snackbar: false,
    items: [
      {
        src: "https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      },
      {
        src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
      {
        src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        src: "https://images.unsplash.com/photo-1523251691580-613e117a75e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
    ],
  }),
};
</script>
