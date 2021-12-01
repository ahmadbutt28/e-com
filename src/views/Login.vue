<template>
  <v-app  class="background">
    <div class="backgruond">
    <v-main class="d-flex justify-center align-center mt-16 mb-16">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <!-- <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar> -->
            <h2 class="black--text">Login</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="user.password"
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
              <v-switch label="Remember me" color="blue-grey darken-1"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="blue-grey darken-1">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="red" v-model="snackbar">
      Please Enter Correct Email or Password
    </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import {
        emailRule,
        passwordRule, } from '../views/validation';

export default {
  name: 'Login',

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    loading:false,
    snackbar:false,
    passwordShow:false,
    user :{
       email: "",
    password: "",
    }
    
   
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
          this.snackbar = true

        const keys = Object.keys(localStorage);
        for (let key of keys) {
          console.log(this.user.email);
          if (this.user.email === key) {
            if (
              this.user.password === JSON.parse(localStorage.getItem(key)).password
            ) {
              localStorage.setItem("currentUser", this.user.email);
              this.$router.push({ name: "DashBoard" });
            }
          }
        }
         
         
        
        },3000)
      }
    }
  }
};
</script>
<style scoped>
  .background{
    
  background: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  }
</style>