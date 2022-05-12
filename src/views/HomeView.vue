<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Hello World</h1>
    <p>{{ count }}</p>
    <br>
    <v-btn @click="increment">Click me</v-btn>
    <br>
    <v-select
          v-model="resolution"
          :items="items"
          label="Resolution"
          data-vv-name="resolution"
          @change="ChangeResolution"
        ></v-select>



  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
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
      // document.title = "Demo App : Count" + this.count;
      appWindow.setTitle("Demo App : Count " + this.count);
    },
    decrement() {
      this.count--;
      console.log(this.count);
      appWindow.setTitle("Demo App : Count " + this.count);
    },
    ChangeResolution() {
      console.log("ChangeResolution");
      console.log(this.resolution.split('x')[0] + ' y: ' + this.resolution.split('x')[1]);
      appWindow.setSize(new PhysicalSize(parseInt(this.resolution.split('x')[0]), parseInt(this.resolution.split('x')[1])));
    },
    close(){
      appWindow.close();
    }
  },
  mounted() {
    // methods can be called in lifecycle hooks, or other methods!
    this.increment();
  },
};
</script>
