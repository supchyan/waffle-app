<template>
  <v-sheet class="d-flex justify-center align-top">
    <v-sheet class="d-flex h-screen" style="padding: 32px 0px;">
      <v-sheet class="mx-8" style="overflow-y: scroll;">
        <!-- book block vvv -->
        <v-virtual-scroll
          :items="arr1">
          <Book />
        </v-virtual-scroll>
        <!-- book block ^^^ -->

        <!-- book navigation vvv -->
        <v-sheet class="d-flex" style="align-items: center; justify-content: center; margin-right: 16px;">
          <v-btn color="primary" class="mx-4" icon style="box-shadow: none;">
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Создать книгу" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
          
          <v-btn color="primary" class="mx-4" icon style="box-shadow: none;">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Удалить" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
        </v-sheet>
        <!-- book navigation ^^^ -->
      </v-sheet>      
    </v-sheet>
    <v-sheet style="margin-right: 32px;">
      <!-- recipe navigation vvv -->
      <v-sheet class="d-flex justify-center align-center" style="padding: 32px 0px;">
        <v-btn color="primary" rounded style="box-shadow: none; height: 48px;">
          <ID />
          <v-tooltip activator="parent" location="bottom" text="Копировать ID" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
        </v-btn>
        <v-text-field
          style="box-shadow: none; font-family: 'Montserrat Alternates'; font-weight: 900; margin:  0px 16px;"
          bg-color="primary"
          append-inner-icon="mdi-magnify"
          density="comfortable"
          clearable="true"
          rounded
          hide-details 
          dense
          label="Поиск"
          single-line>
        </v-text-field>
        <v-btn color="primary" icon style="box-shadow: none;">
          <v-icon>mdi-plus</v-icon>
          <v-tooltip activator="parent" location="bottom" text="Создать рецепт" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
        </v-btn>
      </v-sheet>
      <!-- recipe navigation ^^^ -->

      <!-- recipe block vvv -->
      <v-sheet class="d-flex h-screen justify-center align-top flex-wrap" style="overflow: scroll;">
        <v-virtual-scroll :items="arr2">
          <Note />
        </v-virtual-scroll>
      </v-sheet> 
      <!-- recipe block ^^^ -->
    </v-sheet>
  </v-sheet>
</template>

<script>
  export default {
      data: () => ({
        arr1: Array.from({ length: 10 }, a => a + 1),
        arr2: Array.from({ length: 10 }, b => b + 1),
      }),
      methods: {

      }
    }
</script>

<script setup>
  import Book from '@/components/Book.vue'
  import Note from '@/components/Note.vue'
  import ID from '@/components/ID.vue'
</script>
