<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Dashboard</h1>
    <p>{{ count }}</p>
    <v-btn @click="increment">Click me</v-btn>
    <br>




  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import ChangeResolution from '@/components/ChangeResolution.vue'

export default {
  name: "HomeView",
  components: {
    // HelloWorld
  },
  data() {
    return {
      count: -1,
    };
  },
  methods: {
    increment() {
      this.count++;
      console.log(this.count);
    },
    decrement() {
      this.count--;
      console.log(this.count);
    },
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
  },
};
</script>
