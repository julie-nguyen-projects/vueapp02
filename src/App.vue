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
    <hr>
    <button class="btn btn-primary" @click="fetchData">Get Data</button>
    <ul class="list-group">
      <li class="list-group-item" v-for="u in users"> {{u.username}} - {{u.email}}</li>
    </ul>
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
        },
        users: []
      }
    },
    methods: {
      submit() {
        this.$http.post(
          'https://vuejs-httptest.firebaseio.com/data.json',
          this.user
        ).then(response => {
          console.log(response)
        }, error => {
          console.log(error);
        });
      },
      fetchData() {
        this.$http.get('https://vuejs-httptest.firebaseio.com/data.json')
          .then(response => {
            return response.json();
          }).then(data => {
            const resultArray = [];
            for (let key in data) {
              resultArray.push(data[key]);
            }
            this.users = resultArray;
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
