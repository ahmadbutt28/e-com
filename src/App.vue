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
        this.$store.dispatch("loadCategory");

  },
  computed: {
    ...mapState(["posts"]),
        ...mapState(["Category"]),


  },
  data: () => ({
    // show:false,
    // drawer: null,
  }),
};
</script>
