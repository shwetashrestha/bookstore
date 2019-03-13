<template>
  <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
     <v-flex xs12 sm6 md6>
        <v-card>
           <ContactMap></ContactMap>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
            <ContactForm></ContactForm>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>          
<script>
import ContactMap from '../components/Contact/ContactMap'
import ContactForm from '../components/Contact/ContactForm'

export default {
    components:{
        ContactMap,
        ContactForm
    }
}
</script>
