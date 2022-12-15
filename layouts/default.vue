<template>
  <v-app dark>
    <v-app-bar dense :clipped-left="clipped" fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer />

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-btn small plain nuxt to="/alumnos">Alumnos</v-btn>
        <v-btn small plain>Asignaturas</v-btn>
        <v-btn small plain next to="/matriculas">Matriculas</v-btn>
        <v-btn small plain>Rubricas</v-btn>
        <v-divider vertical />
      </template>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Esmuvise'
    }
  }
}
</script>
