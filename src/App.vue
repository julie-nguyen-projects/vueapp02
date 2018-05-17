<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <div class="form-group">
      <label>Username</label>
      <input class="form-control" type="text" v-model="user.username"/>
    </div>
    <div class="form-group">
      <label>Mail</label>
      <input class="form-control" type="text" v-model="user.email"/>
    </div>
    <button class="btn btn-primary" @click="submit">Submit</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      user: {
        username: '',
        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.user);
      this.$http.post(
        'https://vuejs-httptest.firebaseio.com/data.json',
        this.user
      ).then(response => {
        console.log(response)
      }, error => {
        console.log(error);
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
