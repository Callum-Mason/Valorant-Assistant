<template>
  <v-container fluid class="fill-height" align="center" justify="center">
    <v-select v-model="theme" :items="themes" label="Theme" :value="theme" @change="ChangeTheme"></v-select>
  </v-container>
</template>
<script>
export default {
  name: "ThemeSelector",
  components: {},
  data() {
    return {
      theme: null,
      themes: ["Light", "Dark"],
    };
  },
  methods: {
    GetTheme() {
      if(JSON.parse(localStorage.getItem('config')).theme != null){
        this.theme = JSON.parse(localStorage.getItem('config')).theme;
        // console.log(JSON.parse(localStorage.getItem('config')));
        // console.log("Got from localStorage");
      }else{
        this.theme = "Dark";
        // console.log("Default resolution");
        this.ChangeTheme();

        //Used for the Error Toast

        this.snackbartext = "Error: Setting back to Default theme";
        this.snackbar = true;
      }
    },
    ChangeTheme() {
      console.log(this.theme);
      switch (this.theme) {
        case "Light":
          this.SaveTheme();
          //set darkmode
          this.$vuetify.theme.dark = false;
          break;
        case "Dark":
          this.SaveTheme();
          this.$vuetify.theme.dark = true;
          break;
        case "Custom":
          this.SaveTheme();
          break;
      }
    },
    SaveTheme() {
      var config = JSON.parse(localStorage.getItem("config"));
      config.theme = this.theme;
      localStorage.setItem("config", JSON.stringify(config));
      // console.log(localStorage.getItem('config'));
    },
  },
  beforeMount() {
    this.GetTheme();
  },
};
</script>

<style>
</style>