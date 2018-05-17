<template>
    <div id="app">
      <input type="text" v-on:input="changeTitle"/>
      <p>{{ title }}</p>
      <p>{{sayHello()}}</p>
    </div>
</template>

<script>
    export default {
      name: 'udemy01',
      data() {
          return {
            title: 'Hello World!',
          }
      },
      methods: {
        changeTitle: function (event) {
          this.title = event.target.value;
        },
        sayHello: function () {
          return 'Hello';
        }
      }
    }
</script>

<style scoped>

</style>
