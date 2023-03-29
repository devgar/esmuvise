<template>
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        scrollable
      >
        <template v-slot:activator="{ props }">
          <v-btn border class="flex-grow-1" size="large" v-bind="props">
            Nova matricula
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Nova matricula</v-card-title>
          <v-divider />
          <v-card-text>
              <VForm ref="form" v-model="valid">
                  <v-container>
                      <v-row>
                          <v-col
                          cols="12"
                          md="8"
                          >
                          <v-autocomplete
                            v-if="$asignaturas.asignaturas?.length"
                            clearable
                            ref="asignaturaField"
                            v-model="asignatura"
                            label="Asignatura"
                            :items="$asignaturas.asignaturas"
                            item-value="id"
                            item-title="nameCAS"
                            
                            />
                          </v-col>
  
                          <v-col
                              cols="12"
                              md="4"
                          >
                          <v-select
                            ref="courseField"
                            v-model="course"
                            label="Curs"
                            :items="courseLines"
                            />
                          </v-col>
                      </v-row>
                  </v-container>
              </VForm>
          </v-card-text>
          <VCardActions>
              <VBtn @click="dialog = !dialog">CANCEL</VBtn>
              <VBtn @click="create" :disabled="!valid">CREAR</VBtn>
          </VCardActions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>
  
  <script setup>
  import { useAsignaturaStore } from '~~/stores/asignaturas'
  import { useMatriculaStore } from '~~/stores/matriculas'

  const $asignaturas = useAsignaturaStore()
  const $matriculas = useMatriculaStore()
  const route = useRoute()

  const alumnoId = computed(() => parseInt(route.params.id))
  
  $asignaturas.fetch() 
  $matriculas.fetchFull()
  
  const courseLines = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  ]

  const dialog = ref(false);
  
  const asignatura = ref('')
  const course = ref('')
  const form = ref(null)
  const valid = ref(false)
  
  async function create () {
    console.log("Inserting", asignatura.value, course.value)
      const year = (new Date()).getFullYear()
      const result = await $matriculas.post({
        AlumnoId: alumnoId.value,
        AsignaturaId: asignatura.value,
        curso: course.value,
        ano: year -1,
      })
  
      form.value.reset()
      dialog.value = false
  }
  
  </script>