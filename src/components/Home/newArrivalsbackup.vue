<template>
    <div>
        <h1>
            New Arrivals
        </h1>
      
 <template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex xs6 sm3>
        
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
        <h1>Bookname</h1>
      </v-flex>

      <v-flex xs6 sm3>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
        <h1>Bookname</h1>
      </v-flex>

      <v-flex xs6 sm3>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height repeating-gradient"></div>
        </v-img>
        <h1>Bookname</h1>
      </v-flex>
      <v-flex xs6 sm3>
        <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
          <div class="fill-height bottom-gradient"></div>
        </v-img>
        <h1>Bookname</h1>

      </v-flex>
    </v-layout>
  </v-container>
</template>

    </div>
</template>
<style scope>
h1{
    text-align: center;
}
</style>
<script>
import { mapGetters } from "vuex";
export default {  
  created() {
    this.getNewarrivals()
  },
  computed: {
    ...mapGetters(['count', 'newarrivals'])
  },
  methods: {
    getNewarrivals() {
      this.$store.dispatch("getNewarrivals");
    },
  }
};
</script>


