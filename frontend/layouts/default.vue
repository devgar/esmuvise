<template>
    <v-app>
        <v-app-bar title="EsMuViSe">
            <v-btn to="/alumnos">Alumnos</v-btn>
            <v-btn to="/asignaturas">Asignaturas</v-btn>
        </v-app-bar>

        <!--<v-navigation-drawer>...</v-navigation-drawer>-->

        <v-main><NuxtPage /></v-main>
    </v-app>
</template>

<script setup lang="ts">
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { useRubricaStore } from '~~/stores/rubricas'

useAlumnoStore().fetch()
useMatriculaStore().fetchFull()
useAsignaturaStore().fetch()
useRubricaGroupStore().fetch()
useRubricaStore().fetch()
</script>