<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginView",
  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters({
      user: "getUserInfo",
      // ...
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: "fetchUser",
    }),
  },
};
</script>

<template>
  <div class="about">
    <el-container>
      <h1>Login Page</h1>
      <br />
      {{ user }}
      <button @click="fetchUser">Login</button>
    </el-container>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
