<template>
    <table class="printable">
        <thead>
            <tr><td class="mflex">
                <b>Escola De Música Vicent Serrano</b>
                <span class="mgrow">1ª Avaluació 2022/23</span> 
                <b>{{ fullName }}</b> 
            </td></tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <h5 class="mflex mtop4"><i></i><div class="mgrow"></div>1ª Avaluació</h5>
                    <h3 class="mbottom2">{{ fullName }}</h3>
                    <Asignatura
                        v-for="matricula in matriculas" key="matricula.id"
                        :matricula="matricula"
                    />
                </td>
            </tr>
        </tbody>
    </table>
    <footer class="lastfooter">
        <div class="lastfooter__fullname">{{ fullName }}</div>
        <table>
            <tr>
                <td>
                    <b>Llegenda:</b>
                    <v-icon icon="mdi-timer-sand" size="x-small" />:En procés
                    <v-icon icon="mdi-check-bold" size="x-small" />:Aconseguit
                    <v-icon icon="mdi-star" size="x-small" />:Excel·lent
                </td>
                <td v-for="ei in evaluationItems">
                    <v-icon :icon="icon(ei.value)" size="x-small"></v-icon>
                </td>
            </tr>
        </table>
        <p class="lastfooter__sign">
            Signatura pare/mare/tutor
        </p>
    </footer>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import { useEvaluationItemStore } from '~~/stores/evaluationItems';
import { useMatriculaStore } from '~~/stores/matriculas'
import Asignatura from './_asignatura.vue'

const $alumnos = useAlumnoStore()
const $matriculas = useMatriculaStore()
const $evaluationItems = useEvaluationItemStore()

const route = useRoute()

const AlumnoId = computed(() => parseInt(route.params.AlumnoId))

const alumno = computed(() => $alumnos.byId(AlumnoId.value))

const fullName = computed(() => alumno.value && [alumno.value.firstName, alumno.value.lastName].join(" "))

const matriculas = computed(() => $matriculas.byAlumnoId(AlumnoId.value))

const evaluationItems = computed(() => $evaluationItems.evaluationItems.filter(e => e.AlumnoId === AlumnoId.value))

const icon = (value) => {
    value |= 0
    if (value < 500) return 'mdi-timer-sand'
    if( value < 700) return 'mdi-check-bold'
    return 'mdi-star'
}
</script>

<style>
.printable > thead {
    text-align: center;
    font-size: 80%;
    margin-bottom: 3rem;
    color: #666;
}

.lastfooter {
    display: block;
    text-align: center;
    border-top: 2px solid black;
}

.lastfooter table {
    margin: auto;
}

.lastfooter__sign {
    padding-bottom: 3rem;
    margin: 2rem 8rem 0;
    border-bottom: 1px dotted black;
}

@media print {
    .lastfooter {
        page-break-inside: avoid; 
    }
}

.mflex {
    display: flex;
}

.mflex i {
    font-weight: normal;
}

.mgrow {
    flex-grow: 1;
}
.mtop4 {
    margin-top: 2rem;
}
.mbottom2 {
    margin-bottom: 2rem;
}
</style>