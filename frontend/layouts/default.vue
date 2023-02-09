<template>
    <v-app>
        <div class="no-print">
            <v-app-bar title="EsMuViSe">
                <v-btn to="/alumnos">Alumnos</v-btn>
                <v-btn to="/asignaturas">Asignaturas</v-btn>
            </v-app-bar>
        </div>
        
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
import { useEvaluationItemStore } from '~~/stores/evaluationItems'

useAlumnoStore().fetch()
useMatriculaStore().fetchFull()
useAsignaturaStore().fetch()
useRubricaGroupStore().fetch()
useRubricaStore().fetch()
useEvaluationItemStore().fetch()
</script>

<style>
body {
    position: relative;
}

@media print {
    body {
        position: relative;
    }
    .no-print {
        display: none;
    }

    main {
        padding-top: 0 !important;
    }
}
</style>