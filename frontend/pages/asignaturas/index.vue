<template>
    <v-table density="compact" hover>
        <thead>
            <tr>
                <th class="text-center">Asignatura</th>
                <th>Nº Matricules</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of usedAsignaturas" :key="item.id">
                <td>
                    <v-btn class="text-left" block :to="`/asignatura/${item.id}`" variant="text">
                        {{ item?.nameVLC }}
                    </v-btn>
                </td>
                <td>
                    {{ $matriculas.byAsignaturaId(item.id)?.length }} alumnos
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useMatriculaStore } from '~~/stores/matriculas'

const $asignaturas = useAsignaturaStore()
const $matriculas = useMatriculaStore()

const usedAsignaturasIds = computed(
    () => Array.from(new Set(
        $matriculas.matriculas.map(m => m.AsignaturaId)
    ))
)

const  usedAsignaturas = computed(
    () => $asignaturas.asignaturas.filter(
        ({ id }) => usedAsignaturasIds.value.includes(id)
    )
)
</script>