<template>
    <div>
        <h1>
            New Arrivals
        </h1>
      
 <template>
  <v-container fluid grid-list-sm>
    <v-layout>
      <v-flex xs6 sm3 v-for="bestbook in bestbooks"  :key="bestbook.id" 
            @click="getBestbooks(bestbook.id)">   
       <v-img :src="bestbook.image" height="250" width="250" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
         ></v-img><br/>
                   
                      <h5 class="mb-1">Name: {{ bestbook.name }}</h5>                
                 
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
    this.getBestbooks()
  },
  computed: {
    ...mapGetters(['count', 'bestbooks'])
  },
  methods: {
    getBestbooks() {
      this.$store.dispatch("getBestbooks");
    },
  }
};
</script>


