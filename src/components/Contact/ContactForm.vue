<template>
<v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
    <h1>Contact Form</h1>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
    <v-text-field  v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
    <v-text-field  v-model="subject" :rules="subjectRules" label="Subject" required></v-text-field>  
    <v-textarea name="input-12-1"  label="Message" hint="Hint text"></v-textarea>
    <v-btn  :disabled="!valid" color="success" @click="validate">Validate</v-btn>
    <v-btn  color="error" @click="reset">Reset Form</v-btn>   
  </v-form>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      }
    }
  }
</script>
