<template>
  <v-app>
    <div id="app">
      
     
    </div>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Main",
  mounted() {
    this.$store.dispatch("loadPosts");
        this.$store.dispatch("loadCatogary");

  },
  computed: {
    ...mapState(["posts"]),
        ...mapState(["Catogary"]),


  },
  data: () => ({
    // show:false,
    // drawer: null,
  }),
};
</script>
