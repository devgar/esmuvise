<template>
    <table class="printable">
        <thead>
            <tr><td class="mflex">
                <b> <img src="/escola.256.png" width="12">Escola De Música Vicent Serrano</b>
                <span class="mgrow">{{ $evaluation.id.value }}ª Avaluació 2022/23</span> 
                <b>{{ fullName }}</b> 
            </td></tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div style="display: flex;">
                        <h3 @click="copyCB" class="mgrow">{{ fullName }}</h3>
                        <h5 class="mflex">{{ $evaluation.id.value }}ª Avaluació</h5>
                    </div>
                    <Asignatura
                        v-for="matricula in matriculas" key="matricula.id"
                        :matricula="matricula"
                    />
                </td>
            </tr>
        </tbody>
    </table>
    <footer class="lastfooter">
        <table>
            <tr>
                <td><img src="/escola.256.png" width="48"></td>
                <td><div class="lastfooter__fullname">{{ fullName }}</div>
        <p class="lastfooter__sign">
            Signatura pare/mare/tutor
        </p></td>
                <td><img src="/agrupacio.jpg" width="48"></td>
            </tr>
        </table>
        
    </footer>
</template>

<script setup>
import { useEvaluationStore } from '~~/stores/evaluation'
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'
import Asignatura from './_asignatura.vue'

const $evaluation = useEvaluationStore()
const $alumnos = useAlumnoStore()
const $matriculas = useMatriculaStore()

const route = useRoute()

const AlumnoId = computed(() => parseInt(route.params.AlumnoId))

const alumno = computed(() => $alumnos.byId(AlumnoId.value))

const fullName = computed(() => 
    alumno.value && [alumno.value.firstName, alumno.value.lastName].join(" "))

const matriculas = computed(() => $matriculas.byAlumnoId(AlumnoId.value))

function copyCB() {
    navigator.clipboard.writeText(fullName.value)
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