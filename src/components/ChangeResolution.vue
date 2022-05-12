<template>
  <v-container class="Resolution">
    <v-select
      v-model="resolution"
      :items="items"
      label="Resolution"
      data-vv-name="resolution"
      @change="ChangeResolution"
    ></v-select>
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
    },
  },
};
</script>

<style>
</style>