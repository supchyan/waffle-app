<template class="pa-0 ma-0">
  <v-sheet class="d-flex justify-center align-center">
    <v-sheet class="w-50 d-flex justify-center align-center">
      <v-img min-height="128" max-width="128" class="mr-4" src="@/assets/Waffle.svg"/>
      <v-text-field
        :loading="loading"
        style="font-weight: 900;"
        bg-color="primary"
        append-inner-icon="mdi-magnify"
        density="comfortable"
        clearable="true"
        class="mx-2"
        rounded="lg"
        hide-details 
        dense
        label="Поиск"
        single-line
        variant="solo"
        @click:append-inner="onClick">
      </v-text-field>
      
      <v-btn color="primary" class="mx-2 rounded-lg" icon>
        <v-icon>mdi-filter</v-icon>
        <v-tooltip activator="parent" location="bottom" text="Фильтровать контент"></v-tooltip>
      </v-btn>
      
      <v-btn color="primary" class="mx-2 rounded-lg" icon>
        <v-icon>mdi-plus</v-icon>
        <v-tooltip activator="parent" location="bottom" text="Добавьте новую книгу"></v-tooltip>
      </v-btn>
    
    </v-sheet>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>