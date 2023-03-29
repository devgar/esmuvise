<template>
    <v-menu
        v-model="menu"
        :close-on-content-click="false"
    >
    <template v-slot:activator="{ props }">
        <v-btn icon="mdi-account" v-bind="props" />
    </template>

    <v-card min-width="300">
        <v-list>
        <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
            title="Anónimo"
            subtitle="Evaluación"
        >
            <template v-slot:append>
            <v-btn
                variant="text"
                :class="fav ? 'text-red' : ''"
                icon="mdi-logout-variant"
                @click="fav = !fav"
            ></v-btn>
            </template>
        </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list-item title="Alumnos">
            <template v-slot:append>{{ $Alumnos.alumnos.length }}</template>
        </v-list-item>

        <v-list-item title="Asignaturas">
            <template v-slot:append>{{ $Asignaturas.asignaturas.length }}</template>
        </v-list-item>

        <v-list-item title="Matriculas">
            <template v-slot:append>{{ $Matriculas.matriculas.length }}</template>
        </v-list-item>

        <v-list-item title="EvaluationItems">
            <template v-slot:append>{{ $EvaluationItems.evaluationItems.length }}</template>
        </v-list-item>

        <v-list-item title="RubricaGroups">
            <template v-slot:append>{{ $RubricaGroups.rubricaGroups.length }}</template>
        </v-list-item>

        <v-list-item title="Rubricas">
            <template v-slot:append>{{ $Rubricas.rubricas.length }}</template>
        </v-list-item>

        <v-list>
        <v-list-item title="Route">
            <template v-slot:append>{{ route.name }}</template>
        </v-list-item>
        </v-list>

        <v-card-actions v-if="false">
        <v-spacer></v-spacer>

        <v-btn
            variant="text"
            @click="menu = false"
        >
            Cancel
        </v-btn>
        <v-btn
            color="primary"
            variant="text"
            @click="menu = false"
        >
            Save
        </v-btn>
        </v-card-actions>
    </v-card>
</v-menu>
</template>

<script setup>
    import { useAlumnoStore } from '~~/stores/alumnos';
    import { useAsignaturaStore } from '~~/stores/asignaturas';
    import { useMatriculaStore } from '~~/stores/matriculas';
    import { useEvaluationItemStore } from '~~/stores/evaluationItems';
    import { useRubricaGroupStore } from '~~/stores/rubricaGroups';
    import { useRubricaStore } from '~~/stores/rubricas';

    const $Alumnos = useAlumnoStore()
    const $Asignaturas = useAsignaturaStore()
    const $Matriculas = useMatriculaStore()
    const $EvaluationItems = useEvaluationItemStore()
    const $RubricaGroups = useRubricaGroupStore()
    const $Rubricas = useRubricaStore()
    const menu = ref(false)
    const fav = ref(false)
    const route = useRoute()
</script>