<template>
  <v-sheet class="d-flex justify-center align-top">
    <div>
      <v-sheet class="d-flex h-screen" style="padding: 32px 0px;">
        <v-sheet class="flex-column" style="margin-right: 32px; overflow: scroll;">
          <!-- book block vvv -->
          <v-virtual-scroll
            :items="books">
            <Book />
          </v-virtual-scroll>
          
          <!-- book block ^^^ -->

          <!-- book navigation vvv -->
          <v-sheet class="d-flex" style="align-items: center; justify-content: center; margin-right: 16px;">
            <v-btn color="primary" class="mx-4" icon>
              <v-icon>mdi-plus</v-icon>
              <v-tooltip activator="parent" location="bottom" text="Создать книгу" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
            </v-btn>
            <v-btn color="primary" class="mx-4" icon>
              <v-icon>mdi-delete</v-icon>
              <v-tooltip activator="parent" location="bottom" text="Удалить" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
            </v-btn>
          </v-sheet>
          <!-- book navigation ^^^ -->
        </v-sheet>

        <v-sheet style="margin: -32px 0px;" class="d-flex align-center h-screen">
          <v-img style="height: 700px; width: 100px;" src="@/assets/Splitter.svg"/>
        </v-sheet>        
      
      </v-sheet>
    </div>

    <div class="w-75">
      <!-- recipe navigation vvv -->
      <v-sheet class="mx-8 d-flex justify-center align-center" style="padding: 32px 0px;">
        <v-sheet class="w-100 d-flex justify-center align-center">
          <v-text-field
            style="font-family: 'Montserrat Alternates'; font-weight: 900;"
            bg-color="primary"
            append-inner-icon="mdi-magnify"
            density="comfortable"
            clearable="true"
            rounded
            hide-details 
            dense
            label="Поиск"
            single-line
            variant="solo">
          </v-text-field>
          
          <v-btn color="primary" class="mx-4" icon>
            <v-icon>mdi-export-variant</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Поделиться" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
          
          <v-btn color="primary" icon>
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Создать рецепт" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
        </v-sheet>
      </v-sheet>
      <!-- recipe navigation ^^^ -->

      <!-- recipe block vvv -->
      <div style="overflow: hidden;">
        <v-sheet class="mx-4 d-flex justify-center align-center flex-wrap">
          <Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note /><Note />
        </v-sheet> 
      </div>
      <!-- recipe block ^^^ -->
    </div>
  </v-sheet>
</template>

<script>
  export default {
      data: () => ({
        books: Array.from({ length: 10 }, (k, v) => v + 1),
        notes: Array.from({ length: 10 }, (k, v) => v + 1),
      }),
      methods: {

      }
    }
</script>

<script setup>
  import Book from '@/components/Book.vue'
  import Note from '@/components/Note.vue'
</script>
