<template>
    <v-app>
        <div class="no-print">
            <v-app-bar title="EsMuViSe">
                <v-btn to="/alumnos">Alumnos</v-btn>
                <v-btn to="/asignaturas">Asignaturas</v-btn>
            </v-app-bar>
        </div>
        
        <v-navigation-drawer class="no-print">
            <VCard v-if="route.name === 'print-AlumnoId'">
                <VCardTitle>Iconos/Texto</VCardTitle>
                <v-card-actions>
                    <v-switch :label="switchText" v-model="textMode"></v-switch>
                </v-card-actions>
                <VCardTitle>Imprimir</VCardTitle>
                <VCardActions>
                    <VBtn @click="print" block label="imprimir">PRINT</VBtn>
                </VCardActions>
            </VCard>
        </v-navigation-drawer>


        <v-main><NuxtPage /></v-main>
    </v-app>
</template>

<script setup lang="ts">
import useMetaStore from '~~/stores/metaStore'
import { useEquivalenceStore } from '~~/stores/equivalences';
import { storeToRefs } from 'pinia'

useMetaStore().fetch()
const $equivalences = useEquivalenceStore()

const { textMode } = storeToRefs($equivalences)

const print = () => window.print()

const switchText = computed(() => textMode.value ? 'texto' : 'iconos')

const route = useRoute();

</script>

<style>
body { position: relative; }

@media print {
    body { position: relative; }
    .no-print { display: none; }
    main { padding-top: 0 !important; padding-left: 0 !important; }
}
</style>