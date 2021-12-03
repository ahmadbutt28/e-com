<template>
<!-- This folder contains folder contains the form for registration -->
  <div class="main">
    <v-row justify="center">
      <v-col class="mt-10" cols="12" sm="10" md="8" lg="6">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-card ref="form">
            <v-card-text>
              <h1 class="text-center black--text">Signup</h1>
              <v-text-field
                ref="firstname"
                v-model="userData.name.firstname"
                :rules="firstnameRule"
                :error-messages="errorMessages"
                label="First Name"
                placeholder="First Name"
                required
              ></v-text-field>

              <v-text-field
                ref="lastname"
                v-model="userData.name.lastname"
                :rules="lastnameRule"
                :error-messages="errorMessages"
                label="Last Name"
                placeholder="Last Name"
                required
              ></v-text-field>

              <v-text-field
                ref="userName"
                v-model="userData.username"
                :rules="UsernameRule"
                :error-messages="errorMessages"
                label="Username"
                placeholder="John Doe"
                required
              ></v-text-field>

              <v-text-field
                ref="email"
                v-model="userData.email"
                :rules="emailRule"
                :error-messages="errorMessages"
                label="Email"
                placeholder="xyz@gmail.com"
                required
              ></v-text-field>

              <v-text-field
                ref="password"
                v-model="userData.password"
                :type="'Password'"
                :rules="passwordRule"
                :error-messages="errorMessages"
                label="Password"
                placeholder="***"
                required
              ></v-text-field>

              <v-text-field
                ref="phone"
                v-model="userData.phone"
                :type="'number'"
                :rules="numberRule"
                :error-messages="errorMessages"
                label="Phone"
                placeholder="123456789"
                required
              ></v-text-field>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
              <v-btn color="blue-grey darken-1" text @click="submit">
                Submit
              </v-btn>
              <v-spacer></v-spacer>

              <v-slide-x-reverse-transition>
                <v-tooltip v-if="formHasErrors" left>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      icon
                      class="my-0"
                      v-bind="attrs"
                      @click="resetForm"
                      v-on="on"
                    >
                      <v-icon>mdi-refresh</v-icon>
                    </v-btn>
                  </template>
                  <span>Refresh form</span>
                </v-tooltip>
              </v-slide-x-reverse-transition>
            </v-card-actions>
            <span class="link"
              >Login in to your Account
              <router-link to="Login">
                <v-btn> Login </v-btn></router-link
              ></span
            >
          </v-card>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import {
  UsernameRule,
  emailRule,
  firstnameRule,
  lastnameRule,
  passwordRule,
  numberRule,
} from "../views/validation";

export default {
  data: () => ({
    valid: true,
    userData: {
      address: {
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
        city: "Lahore",
        street: "12-A, Johar Town",
        number: "",
        zip: "12926-3874",
      },
      email: "",
      username: "",
      password: "",
      name: {
        firstname: "",
        lastname: "",
      },
      phone: "",
    },
    errorMessages: "",
    formHasErrors: false,
    emailRule: emailRule,
    UsernameRule: UsernameRule,
    firstnameRule: firstnameRule,
    lastnameRule: lastnameRule,
    passwordRule: passwordRule,
    numberRule: numberRule,
  }),

  computed: {
    form() {
      return {
        userName: this.userName,
        email: this.email,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        phone: this.phone,
      };
    },
  },

  watch: {
    name() {
      this.errorMessages = "";
    },
  },

  methods: {
    resetForm() {
      this.errorMessages = [];
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    submit() {
      if (this.$refs.form.validate()) {
        localStorage.setItem(
          this.userData.email,
          JSON.stringify(this.userData)
        );
        localStorage.setItem("firstname", this.userData.name.firstname);
        localStorage.setItem("lastname", this.userData.name.lastname);
        localStorage.setItem("username", this.userData.username);
        localStorage.setItem("currentUser", this.userData.email);
        localStorage.setItem("password", this.userData.password);
        localStorage.setItem("phone", this.userData.phone);
        this.$router.push({ name: "Login" });

        this.formHasErrors = false;

        Object.keys(this.form).forEach((f) => {
          if (!this.form[f]) this.formHasErrors = true;

          this.$refs[f].validate(true);
        });
      }
    },
  },
};
</script>
<style>
.main {
  background-image: url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: cover;
}
</style>
