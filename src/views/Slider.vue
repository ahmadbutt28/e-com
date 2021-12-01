<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item, ia) in itemsa"
      :key="ia"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  data() {
    return {
      itemsa: [
        {
          src: "https://image.shutterstock.com/image-photo/festive-winter-snow-background-snowdrifts-260nw-1487084123.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>
