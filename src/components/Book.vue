<template v-slot:default="{ item }">
  <v-card id="book"></v-card>
</template>
<style>
  :root {
    --textColor: #000;
    --bgColor: #fff; 
  }
  #book {
    user-select: none;
    width: 300px;
    box-shadow: none;
    padding: 8px;
    border-radius:15px;
    background-color: var(--bgColor);
    color: var(--textColor);
  }
</style>