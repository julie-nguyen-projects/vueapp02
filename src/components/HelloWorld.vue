<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <ul>
        <li v-for="comp in compositions">
          {{comp.name}}, associée au module : {{comp.moduleId}}
        </li>
      </ul>
    </div>

    <div>
      <input type="text" v-model="input_val"/>
      <span v-text="input_val"></span>
    </div>

    <div>
        <button v-on:click="counter++">You've clicked this button {{counter}} times !</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      compositions: [
        {moduleId: 1, name: 'Composition1'},
        {moduleId: 2, name: 'Composition2'},
        {moduleId: 3, name: 'Composition3'}
      ],
      input_val: '',
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
