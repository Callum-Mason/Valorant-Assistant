<template>
  <v-container class="Resolution">
    <v-select
      v-model="resolution"
      :items="items"
      label="Resolution"
      data-vv-name="resolution"
      @change="ChangeResolution"
    ></v-select>
    <!-- <v-btn @click="StoreResolution">Store Resolution</v-btn>
    <v-btn @click="GetResolution">Get Resolution</v-btn> -->



    <v-snackbar
      v-model="snackbar"
      :timeout="snackbartimeout"
    >
      {{ snackbartext }}
    </v-snackbar>

  </v-container>
</template>

<script>
import { appWindow, PhysicalSize } from "@tauri-apps/api/window";


export default {
  name: "ChangeResolution",
  data() {
    return {
      resolution: null,
      items: ["1920x1080", "1280x720", "1024x768", "800x600"],
      snackbar: false,
      snackbartext: '',
      snackbartimeout: 2000,
      DarkTheme: false,


    };
  },
  methods: {
    ChangeResolution() {
      console.log(
        "Resolution - x: " +
          this.resolution.split("x")[0] +
          " y: " +
          this.resolution.split("x")[1]
      );
      appWindow.setSize(
        new PhysicalSize(
          parseInt(this.resolution.split("x")[0]),
          parseInt(this.resolution.split("x")[1])
        )
      );
      appWindow.isResizable = false;
      this.StoreResolution();
    },
    GetResolution(){
      // console.log(localStorage.getItem("resolution"));
      if(JSON.parse(localStorage.getItem('config')).resolution != null){
        this.resolution = JSON.parse(localStorage.getItem('config')).resolution;
        // console.log(JSON.parse(localStorage.getItem('config')));
        // console.log("Got from localStorage");
      }else{
        this.resolution = "1280x720";
        console.log("Default resolution");
        this.ChangeResolution();

        //Used for the Error Toast

        this.snackbartext = "Error: Setting back to Default resolution";
        this.snackbar = true;
      }

    },
    StoreResolution(){
      var config = JSON.parse(localStorage.getItem('config'));
      config.resolution = this.resolution;
      localStorage.setItem('config', JSON.stringify(config));
      // console.log(localStorage.getItem('config'));

    },
  },
  beforeMount(){
    this.GetResolution();
  }
};
</script>

<style>
</style>