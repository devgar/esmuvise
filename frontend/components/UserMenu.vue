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
                title="Anónimo"
                subtitle="Evaluación"
            >
                <template v-slot:append>
                <v-btn
                    variant="text"
                    :class="fav ? 'text-red' : ''"
                    @click="fav = !fav"
                >{{ $evaluation.evaluation }}</v-btn>
                </template>
            </v-list-item>
        </v-list>

        <v-divider />
        <v-list>
            <v-list-item title="Alumnos" to="/students">
                <template v-slot:append>{{ $Alumnos.alumnos.length }}</template>
            </v-list-item>

            <v-list-item title="Asignaturas" to="/asignaturas">
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
        </v-list>
        <v-divider></v-divider>

        <v-list>
            <v-list-item title="Route">
                <template v-slot:append>{{ route.name }}</template>
            </v-list-item>
        </v-list>

        <v-card-actions v-if="false">
            <v-spacer />

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
    const $Alumnos = useAlumnoStore()
    const $Asignaturas = useAsignaturaStore()
    const $Matriculas = useMatriculaStore()
    const $EvaluationItems = useEvaluationItemStore()
    const $RubricaGroups = useRubricaGroupStore()
    const $Rubricas = useRubricaStore()
    const $evaluation = useEvaluationStore()
    const menu = ref(false)
    const fav = ref(false)
    const route = useRoute()
</script>