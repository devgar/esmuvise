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
            title="John Leider"
            subtitle="Founder of Vuetify"
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

        <v-list>
        <v-list-item>
            <VListItemTitle>Route</VListItemTitle>
            <VListItemSubtitle>{{ route.name }}</VListItemSubtitle>
        </v-list-item>
        </v-list>

        <v-card-actions>
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
    const menu = ref(false)
    const fav = ref(false)
    const route = useRoute()
</script>