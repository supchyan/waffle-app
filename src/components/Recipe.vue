<template v-slot:default="{ item }">
  <v-card 
    id="recipe-body"
    rounded
    class="w-100">
    <div id="note-name" class="pa-4" style="font-weight: 900; font-size: 25px; user-select: none;">Name name name</div>
    <div id="note-desc" class="pa-4" style="font-weight: 400; font-size: 18px; user-select: none;">description description description description description description description description description</div>
  </v-card>
</template>
<style>
  #recipe-body {
    box-shadow: none;
    margin-bottom: 32px;
    border-radius:15px;
    max-height: 300px;
    background-color: #F3DB5A;
    color: #453C0D;
  }
</style>