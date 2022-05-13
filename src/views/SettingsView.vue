<template>
  <v-container class="SettingsView">
    <v-row justify="center">
      <h1>Settings</h1>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="mb-5">
          <v-card-title>
            <v-icon left>mdi-palette</v-icon>
            <span class="headline">Theme</span>
          </v-card-title>
          <v-card-text>
            <v-row class="fill-height" align="center">
                <v-col cols="12" md="6">
                    <ThemeSelector/>

            </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="mb-5">
          <v-card-title>
            <v-icon left>mdi-monitor-screenshot</v-icon>
            <span class="headline">Change Resolution</span>
          </v-card-title>
          <v-card-text>
            <v-row class="fill-height" align="center">
              <ChangeResolution />
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeResolution from "@/components/ChangeResolution.vue";
import ThemeSelector from "@/components/ThemeSelector.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    ChangeResolution,
    ThemeSelector
  },
  data() {
    return {
    };
  },
  methods: {
  },
  beforeMount() {},
};
</script>

<style>
</style>