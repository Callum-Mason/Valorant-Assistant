<template>
  <v-container class="SettingsView">
    <v-row justify="center">
      <v-col class="mb-5" cols="12">
        <h1 class="headline font-weight-bold mb-3">Change Resolution</h1>
        <ChangeResolution />
		<v-switch
        v-model="$vuetify.theme.dark"
        hint="This toggles the global state of the Vuetify theme"
        inset
        label="Vuetify Theme Dark"
        persistent-hint
      ></v-switch>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ChangeResolution from '@/components/ChangeResolution.vue'

export default {
  name: "HomeView",
  components: {
    // HelloWorld
    ChangeResolution
  },
}
</script>

<style>
</style>