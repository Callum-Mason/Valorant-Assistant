<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Hello World</h1>
    <p>{{ count }}</p>
    <br>
    <v-btn @click="increment">Click me</v-btn>
    <br>
    <ChangeResolution/>




  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import ChangeResolution from '@/components/ChangeResolution.vue'

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    ChangeResolution
  },
  data() {
    return {
      count: -1,
      resolution: null,
      items: [
        '1920x1080',
        '1280x720',
        '1024x768',
        '800x600',
      ],

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
