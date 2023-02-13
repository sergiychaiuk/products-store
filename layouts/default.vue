<template>
  <v-app
    dark
    :style="{ backgroundColor: $vuetify.theme.dark ? $vuetify.theme.themes.dark.bg : $vuetify.theme.themes.light.bg }"
  >
    <Nav />

    <v-main>
      <Nuxt />
    </v-main>

    <Footer />
    <ScrollTop />
  </v-app>
</template>
