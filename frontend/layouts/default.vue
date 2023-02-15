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
import useMetaStore from '~~/stores/metaStore'
useMetaStore().fetch()
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