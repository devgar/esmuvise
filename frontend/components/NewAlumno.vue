<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="{ props }">
        <v-btn border class="flex-grow-1" size="large" v-bind="props">
          Nou Alumne
        </v-btn>
      </template>
      <v-card>
        <v-card-title>Nou Alumne</v-card-title>
        <v-divider />
        <v-card-text>
            <VForm ref="form" v-model="valid">
                <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        md="6"
                        >
                        <v-text-field
                            ref="firstNameField"
                            v-model="firstName"
                            :rules="nameRules"
                            :counter="30"
                            label="Nom"
                            required
                        />
                        </v-col>

                        <v-col
                            cols="12"
                            md="6"
                        >
                        <v-text-field
                            ref="lastNameField"
                            v-model="lastName"
                            :rules="nameRules"
                            :counter="30"
                            label="Cognom"
                            required
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
import { useAlumnoStore } from '~~/stores/alumnos'
const $alumnos = useAlumnoStore()

const dialog = ref(false);

const firstName = ref('')
const lastName = ref('')
const form = ref(null)
const valid = ref(false)

const nameRules = [
    v => !!v || 'Name is required',
    v => v.length <= 30 || 'Name must be less than 30 characters',
]

async function create () {
    const result = await $alumnos.post({
        firstName: firstName.value.toUpperCase(),
        lastName: lastName.value.toUpperCase(),
    })

    form.value.reset()
    dialog.value = false
}

</script>