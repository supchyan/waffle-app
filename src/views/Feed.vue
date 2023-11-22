<template>
  <v-sheet class="d-flex justify-center align-top">
    <!-- recipe overlay vvv -->
    <v-overlay 
      class="d-flex justify-center align-center" 
      v-model="recipeOverlay">
      <RecipeOverlay />
    </v-overlay>
    <!-- recipe overlay ^^^ -->

    <v-sheet class="d-flex h-screen" style="padding: 32px 0px;">
      <v-sheet class="mx-8" style="overflow-y: scroll;">
        <!-- book block vvv -->
        <v-virtual-scroll :items="bookArr">
          <Book />  
        </v-virtual-scroll>
        <!-- book block ^^^ -->

        <!-- book navigation vvv -->
        <v-sheet class="d-flex" style="align-items: center; justify-content: center; margin-right: 16px;">
          <v-btn id="new-book" color="primary" class="mx-4" icon style="box-shadow: none;" v-on:click="AddBook">
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Create a book" style="font-weight: 900;"></v-tooltip>
          </v-btn>
          
          <v-btn color="primary" class="mx-4" icon style="box-shadow: none;">
            <v-icon>mdi-delete</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Delete book" style="font-weight: 900;"></v-tooltip>
          </v-btn>
        </v-sheet>
        <!-- book navigation ^^^ -->
      </v-sheet>      
    </v-sheet>
    <v-sheet style="margin-right: 32px; padding: 32px 0px;">
      <!-- recipe navigation vvv -->
      <v-sheet class="d-flex justify-center align-center" style="padding-bottom: 32px;">
        <v-btn color="primary" rounded style="box-shadow: none; height: 48px;">
          <ID />
          <v-tooltip activator="parent" location="bottom" text="Copy book ID" style="font-weight: 900;"></v-tooltip>
        </v-btn>
        <v-text-field 
          class="mx-4"
          id="search"
          bg-color="primary"
          append-inner-icon="mdi-magnify"
          density="comfortable"
          clearable="true"
          rounded
          hide-details 
          dense
          label="Search"
          single-line>
        </v-text-field>
        <v-btn id="new-recipe" color="primary" icon style="box-shadow: none;" v-on:click="AddRecipe">
          <v-icon>mdi-plus</v-icon>
          <v-tooltip activator="parent" location="bottom" text="Add a new recipe" style="font-weight: 900;"></v-tooltip>
        </v-btn>
      </v-sheet>
      <!-- recipe navigation ^^^ -->

      <!-- recipe block vvv -->
      <v-sheet class="d-flex h-screen justify-center align-top flex-wrap" style="overflow: scroll;">
        <v-virtual-scroll :items="recipeArr" style="padding-bottom: 114px;">
          <Recipe @click="recipeOverlay = !recipeOverlay"/>
        </v-virtual-scroll>
      </v-sheet> 
      <!-- recipe block ^^^ -->
    </v-sheet>
  </v-sheet>
</template>
<style>
  body {
    font-family: 'Montserrat Alternates';
    box-shadow: none;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  #search {
    font-weight: 900;
    margin: 0px 16px;
  }
</style>
<script>
  export default {
      data: () => ({
        recipeOverlay: false,
        m: 0, // book arr size
        n: 0, // recipe arr size
        bookArr: Array.from({ length: 1 }, a => a + 1),
        recipeArr: Array.from({ length: 1 }, b => b + 1),
      }),
      methods: {
        AddBook() {
          this.m+=1;
          this.bookArr = Array.from({ length: this.m }, a => a + 1);
        },
        AddRecipe() {
          this.n+=1;
          this.recipeArr = Array.from({ length: this.n }, b => b + 1);
        },
      }
    }
</script>
<script setup>
  import Book from '@/components/Book.vue'
  import Recipe from '@/components/Recipe.vue'
  import RecipeOverlay from '@/components/RecipeOverlay.vue'
  import ID from '@/components/ID.vue'
</script>
