<template>
<!-- This folder contains data related to Categories -->
  <div>
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>
      <!-- navbar with MDI icons -->
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

    <v-navigation-drawer v-model="drawer" fixed temporary>
      
    </v-navigation-drawer>
<!-- Slider -->
    <v-carousel hide-delimiters>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!-- Fetching Category Names -->
    <v-container>
      <v-row>
        <v-col
          sm="3"
          md="3"
          v-for="(CategoryName, index) in Category"
          :key="index"
        >
          <v-btn @click="fetchdata(CategoryName)">{{ CategoryName }}</v-btn>
        </v-col>
      </v-row>

      <v-main class="grey lighten-2">
        <v-container>
          <!-- Adding cards from vuetify and images from api -->
          <v-row>
            <!-- Adding cards from vuetify and images from api -->
            <template v-for="data in getCat">
              <v-card :key="data.id" class="mx-auto mt-5" max-width="375">
                <v-card-title
                  class="font-weight-bold text-center text-h5 text-uppercase"
                  >{{ data.category }}</v-card-title
                >
                <v-img
                  class="white--text align-end"
                  height="350px"
                  width="350px"
                  :src="data.image"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  {{ data.title }}
                </v-card-subtitle>

                <v-card-text class="text--primary"> </v-card-text>

                <v-card-actions class="d-flex justify-space-between">
                  <v-chip class="ms-5" text-color="white" color="black"
                    >${{ data.price }}</v-chip
                  >
                  <v-btn class="me-5" fab dark small color="black">
                    <v-icon dark>mdi-shopping bag</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  class="mx-3 mb-5 mt-5 ms-5"
                  color="success"
                  outlined
                  @click="button()"
                  
                >
                  <v-icon left small>mdi-plus</v-icon>
                  Add to Cart</v-btn
                >
                <v-btn
                  class="mx-3 mb-5 mt-5 ms-5"
                  @click="fatchsingleProductData(data.id)"
                  >See Details</v-btn
                >
              </v-card>
            </template>
          </v-row>
        </v-container>
      </v-main>
    </v-container>
    <v-snackbar top color="green" v-model="snackbar">
      Successfully Add to Cart
    </v-snackbar>
    <!-- Adding Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Footer from "../views/footer";

export default {
  data() {
    return {
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
    };
  },
  components: {
    Footer,
  },
  methods: {
    fetchdata(apiId) {
      this.$store.dispatch("apiCall", apiId);
    },
    button() {
      this.snackbar = true;
    },
    fatchsingleProductData(apiId) {
      this.$store.dispatch("fatchsingleProductData", apiId);
      this.$router.push({ name: "SingleProduct" });
    },
    // after logout hide all data related to user goes null
    log(){
      
      localStorage.setItem("currentUser","");
      this.$router.push({name:"SignUp"});
    },
    // Adding data into cart
     addCart(apiId){
      this.snackbar = true;
      this.$store.dispatch("Add",apiId)


    },
  },

  mounted() {
     if(localStorage.getItem("currentUser") == ""){

          this.$router.push({ name: "SignUp" });

 

      }
    this.$store.dispatch("loadCategory");
  },
  computed: {
    ...mapGetters(["getSingleProduct"]),
    ...mapState(["Category"]),
    ...mapGetters(["getCat"]),
    ...mapState(["cart"]),
    ...mapGetters(["cart"])
  },
};
</script>

<style></style>
