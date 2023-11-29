<template>
  <v-sheet class="d-flex justify-center align-top">
    <!-- recipe overlay vvv -->
    <v-overlay class="d-flex justify-center align-center" v-model="overlay" persistent v-on:vnode-mounted="CloseOverlay">
      <v-card @vnode-mounted="ScrollAI" id="recipe-overlay" rounded="lg">
        <v-text-field
          id="recipe-overlay-title"
          label="Recipe title"
          variant="plain">
        </v-text-field>
        <v-textarea 
          id="recipe-overlay-desc"
          auto-grow
          label="Describe your recipe here"
          variant="plain">
        </v-textarea>
        <v-btn id="recipe-overlay-btn" rounded="lg" icon style="box-shadow: none;" v-on:click="EditRecipe">
          <v-icon>{{ overlayBtn }}</v-icon>
          <v-tooltip activator="parent" location="bottom" style="font-weight: 900;">{{ overlayTooltip }}</v-tooltip>
        </v-btn>
        <v-btn id="recipe-overlay-btn" class="mx-4" rounded="lg" icon style="box-shadow: none;" @click="overlay = false">
          <v-icon>mdi-close</v-icon>
          <v-tooltip activator="parent" location="bottom" text="Close" style="font-weight: 900;"></v-tooltip>
        </v-btn>
      </v-card>
    </v-overlay>
    <!-- recipe overlay ^^^ -->

    <v-sheet class="d-flex h-screen" style="padding: 32px 0px;">
      <v-sheet class="mx-8" style="overflow-y: scroll;">
        <!-- book block vvv -->
        <v-item-group mandatory>
          <div id="booksPlaceholder" class="d-flex justify-center align-center">{{ booksPlaceholder }}</div>
          <v-virtual-scroll :items="books">
            <template v-slot:default="{ item }">
              <v-container style="padding: 0px 32px 32px 0px;">
                <v-item v-slot="{ isSelected, toggle }">
                  <v-card id="book" class="d-flex justify-left align-center px-4" rounded="lg"
                  :color="isSelected ? 'primary' : ''"
                  @click="toggle"
                  v-on:click="SelectedBookAI"
                  v-on:vnode-mounted="CheckPlaceHolder">
                    <div>{{ item.title }}</div>
                  </v-card>
                </v-item>
              </v-container>
            </template>
          </v-virtual-scroll>
        </v-item-group>
        <!-- book block ^^^ -->

        <!-- book navigation vvv -->
        <v-sheet class="d-flex" style="align-items: center; justify-content: center; margin-right: 32px;">
          <v-btn id="new-book" color="primary" rounded="lg" class="mx-4" icon style="box-shadow: none;" v-on:click="AddBook">
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Create a book" style="font-weight: 900;"></v-tooltip>
          </v-btn>
          
          <v-btn color="primary" rounded="lg" class="mx-4" icon style="box-shadow: none;">
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
        <v-btn id="content-id" color="primary" rounded="lg" style="box-shadow: none; height: 48px;" v-on:click="ClickToCopy">
          <div>{{ contentID }}</div>
          <v-tooltip activator="parent" location="bottom" text="Copy book ID" style="font-weight: 900;"></v-tooltip>
        </v-btn>
        <v-text-field 
          class="mx-4"
          id="search"
          rounded="lg"
          bg-color="primary"
          append-inner-icon="mdi-magnify"
          density="comfortable"
          clearable
          hide-details 
          dense
          label="Search"
          single-line>
        </v-text-field>
        <v-btn id="new-recipe" rounded="lg" color="primary" icon style="box-shadow: none;" v-on:click="AddRecipe">
          <v-icon>mdi-plus</v-icon>
          <v-tooltip activator="parent" location="bottom" text="Add a new recipe" style="font-weight: 900;"></v-tooltip>
        </v-btn>
      </v-sheet>
      <!-- recipe navigation ^^^ -->

      <!-- recipe block vvv -->
      <v-sheet class="d-flex h-screen justify-center align-top flex-wrap" style="overflow: scroll;">
        <div id="recipesPlaceholder">{{ recipesPlaceholder }}</div>
        <v-virtual-scroll :items="recipes" style="padding-bottom: 114px;">
          <template v-slot:default="{ item }">
            <v-card 
              id="recipe" class="justify-left align-center pa-4" rounded="lg"
              @click="overlay = true"
              v-on:click="SelectedRecipeAI"
              v-on:vnode-mounted="CheckPlaceHolder">
              <div id="recipe-title">{{ item.title }}</div>
              <div id="recipe-desc">{{ item.desc }}</div>
            </v-card>
          </template>
        </v-virtual-scroll>
      </v-sheet> 
      <!-- recipe block ^^^ -->
    </v-sheet>
  </v-sheet>
</template>

<style src="./src/styles/Feed.css"></style>
<script src="./src/scripts/Feed.js"></script>
