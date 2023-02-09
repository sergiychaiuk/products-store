<template>
  <v-app
    dark
    :style="{ backgroundColor: $vuetify.theme.dark ? $vuetify.theme.themes.dark.bg : $vuetify.theme.themes.light.bg }"
  >
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>
