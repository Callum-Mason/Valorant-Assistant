<template>
  <v-app>
    <v-navigation-drawer permanent app class="pt-4" color="grey lighten-3">
      <!-- -->

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Application </v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <router-link :to="item.Link" class="links">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </router-link>
            </v-list-item-content>
          </v-list-item>
        </nav>
      </v-list>
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer padless app>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style >
</style>


<script>
export default {
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", Link: "/" },
        { title: "About", icon: "mdi-help-circle", Link: "/about" },
        { title: "Settings", icon: "mdi-cog-outline", Link: "/settings" },
      ],
      right: null,
    };
  },
};
</script>

<style>
a:link {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

a:visited {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

a:hover {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}

a:active {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>