<template>
  <v-container fluid grid-list-sm text-xs-center> 
    <v-layout row wrap>
              <v-flex xs12 sm4 md3 v-for="book in books"  :key="book.id" 
            @click="getBooks(book.id)">
              
                    <v-flex xs12 sm6 offset-sm3>
                      <v-img :src="book.image" height="250" width="200" style="align:center"></v-img>                    
                    </v-flex>
               
                   <h5 class="mb-1">Name: {{ book.name }}</h5>   
                </v-flex>
              
            
              
          </v-layout>
  </v-container>
</template>
<script>
import { mapGetters } from "vuex";
export default {  
  created() {
    this.getBooks()
  },
  computed: {
    ...mapGetters(['count', 'books'])
  },
  methods: {
    getBooks() {
      this.$store.dispatch("getBooks");
    },
  }
};
</script>