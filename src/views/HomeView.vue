<template>
  <div class="DashboardView">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h1>Dashboard</h1>

    <br> -->


    <v-container class="">
      <v-row justify="center">
        <h1>Dashboard View</h1>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="mb-5">
            <v-card-title>
              <v-icon left>mdi-chart-line</v-icon>
              <span class="headline">BLANK</span>
            </v-card-title>
            <v-card-text>
              <v-row class="fill-height" align="center">
                <h2>{{ count }}</h2>
                <v-btn @click="increment" block x-large >Click me</v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>


        <v-col cols="12" md="6">
          <v-card class="mb-5" loading=false>
            <v-card-title>
              <v-icon left>mdi-chart-line</v-icon>
              <span class="headline">Graph</span>
            </v-card-title>
            <v-card-text>
              <v-row class="fill-height" align="center">
                <GraphComponent/>

              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>








  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import ChangeResolution from '@/components/ChangeResolution.vue'
import GraphComponent from '@/components/GraphComponent.vue'

export default {
  name: "DashboardView",
  components: {
    GraphComponent
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
