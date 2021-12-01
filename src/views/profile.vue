<template>
  <div class="img">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-toolbar-title>Shopify</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/Home">
        <v-icon>mdi-home</v-icon>
        Home</v-btn
      >
      <v-btn class="ml-2" to="/Catogary">
        <v-icon>mdi-basket</v-icon>
        Catogary</v-btn
      >
      <v-btn class="ml-2" to="/profile">
        <v-icon>mdi-update</v-icon>
        profile</v-btn
      >
      <v-btn class="ml-2" to="/">
        <v-icon>mdi-logout</v-icon>
        Logout</v-btn
      >
    </v-app-bar>

    <v-row justify="center">
      <v-col class="mt-10" cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
          <v-card-text>
            <h1 class="text-center black--text">Profile</h1>
            <v-text-field
              ref="firstname"
              v-model="firstname"
              :rules="firstnameRule"
              :error-messages="errorMessages"
              label="First Name"
              placeholder="First Name"
              required
            ></v-text-field>

            <v-text-field
              ref="lastname"
              v-model="lastname"
              :rules="lastnameRule"
              :error-messages="errorMessages"
              label="Last Name"
              placeholder="Last Name"
              required
            ></v-text-field>

            <v-text-field
              ref="userName"
              v-model="username"
              :rules="UsernameRule"
              :error-messages="errorMessages"
              label="Username"
              placeholder="John Doe"
              required
            ></v-text-field>

            <v-text-field
              ref="email"
              v-model="email"
              :rules="emailRule"
              :error-messages="errorMessages"
              label="Email"
              placeholder="xyz@gmail.com"
              required
            ></v-text-field>

            <v-text-field
              ref="password"
              v-model="password"
              :type="'Password'"
              :rules="passwordRule"
              :error-messages="errorMessages"
              label="Password"
              placeholder="***"
              required
            ></v-text-field>

            <v-text-field
              ref="phone"
              v-model="phone"
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
            <v-btn color="primary" text @click="submit"> Update Profile </v-btn>
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
        </v-card>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>

<script>
import Footer from "../views/footer";
import {
  UsernameRule,
  emailRule,
  firstnameRule,
  lastnameRule,
  passwordRule,
  numberRule,
} from "../views/validation";

export default {
  components: {
    Footer,
  },
  data: () => ({
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
    email: "",
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    phone: "",
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

  mounted() {
    this.firstname = localStorage.getItem("firstname");
    this.lastname = localStorage.getItem("lastname");
    this.username = localStorage.getItem("username");
    this.email = localStorage.getItem("currentUser");
    this.password = localStorage.getItem("password");
    this.phone = localStorage.getItem("phone");
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
      this.formHasErrors = false;

      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) this.formHasErrors = true;

        this.$refs[f].validate(true);
      });
    },
  },
};
</script>

<style scoped>
.img {
  background: url("https://media.istockphoto.com/photos/internet-shopping-with-laptop-picture-id899198454");
}
</style>
