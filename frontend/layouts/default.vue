<template>
    <v-app v-if="loaded" vfull-height>
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
                <v-btn icon="mdi-magnify" />
                <UserMenu />
            </v-container>
        </v-app-bar>
        
        <v-navigation-drawer v-if="loaded" class="no-print">
            <VCard v-if="route.name === 'print-AlumnoId'">
                <VCardTitle>Impresión</VCardTitle>
                <VCardActions>
                    <VBtn @click="print" block label="imprimir">Imprimir</VBtn>
                </VCardActions>
            </VCard>

            <VList v-if="route.name === 'alumnos'">
                <VListItem>
                    <VListItemAction>
                        <NewAlumno />
                    </VListItemAction>
                </VListItem>
            </VList>
        </v-navigation-drawer>

        <v-main v-if="loaded">
            <v-container fluid>
                <NuxtPage />
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup lang="ts">
import useMetaStore from '~~/stores/metaStore'
const globalError = useGlobalError()

const print = () => window.print()
const route = useRoute();

const loaded = ref(false)
useMetaStore().fetch()
    .then(() =>  loaded.value = true)
    .catch((err) => globalError.value = err)

</script>

<style>
body { position: relative; }

@media print {
    body { position: relative; }
    .no-print { display: none; }
    main { padding-top: 0 !important; padding-left: 0 !important; }
}
</style>