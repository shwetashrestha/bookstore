<template>

  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in imageslidles"
      :key="i"
      :src="item.image" height="50"
    ></v-carousel-item>
  </v-carousel>

  <!-- <v-carousel>
    <v-carousel-item v-for="(item,i) in imageslidles" :key="i"  :src="item.image" height="100" width="500" style="aign:center"></v-carousel-item>
  </v-carousel> -->
</template>

<script>
import { mapGetters } from "vuex";
export default { 
  data () {
      return {
              }
    } ,
  created() {
    this.getImagesliders()
  },
  computed: {
    ...mapGetters(['count', 'imageslidles'])
  },
  methods: {
    getImagesliders() {
      this.$store.dispatch("getImagesliders");
    },
  }
};
</script>

