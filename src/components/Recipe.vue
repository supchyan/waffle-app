<template v-slot:default="{ item }">
  <v-card 
    id="recipe-body"
    rounded
    class="w-100">
    <div id="recipe-name" class="pa-4" style="font-weight: 900; font-size: 25px; user-select: none;">A new recipe</div>
    <div id="recipe-desc" class="pa-4" style="font-weight: 400; font-size: 18px; user-select: none;">Hello there!</div>
  </v-card>
</template>
<style>
  #recipe-body {
    box-shadow: none;
    margin-bottom: 32px;
    border-radius:15px;
    max-height: 300px;
    min-width: 500px;
    background-color: #F3DB5A;
    color: #453C0D;
  }
</style>