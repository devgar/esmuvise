<template>
    <v-app full-height>
        <v-app-bar class="no-print">
            <v-container class="fill-height d-flex align-center">
                <v-avatar
                    class="me-10 ms-4"
                    color="grey-darken-1"
                    size="32"
                    image="/escola.256.jpg"    
                />
                <v-btn to="/alumnos" variant="text">Alumnos</v-btn>
                <v-btn to="/asignaturas" variant="text">Asignaturas</v-btn>
                <v-spacer />
                <v-responsive max-width="260">
                    <v-text-field
                        density="compact"
                        hide-details
                        variant="solo"
                        append-inner-icon="mdi-magnify"
                    />
                </v-responsive>
            </v-container>
        </v-app-bar>
        
        <v-navigation-drawer class="no-print">
            <VCard v-if="route.name === 'print-AlumnoId'">
                <VCardTitle>Iconos/Texto</VCardTitle>
                <v-card-actions>
                    <v-switch :label="switchText" v-model="textMode"></v-switch>
                </v-card-actions>
                <VCardActions>
                    <VBtn @click="print" block label="imprimir">Imprimir</VBtn>
                </VCardActions>
            </VCard>

            <VCard v-if="route.name === 'alumnos'">
                <VCardActions>
                    <NewAlumno />
                </VCardActions>
            </VCard>
        </v-navigation-drawer>


        <v-main>
            <v-container fluid>
                <NuxtPage />
            </v-container>
        </v-main>
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