<template v-slot:default="{ item }">
  <v-card
    id="book">
    <div 
      id="book-name"
      >🥐 A new book</div>
  </v-card>
</template>
<style>
  :root {
    --textColor: #000;
    --bgColor: #fff; 
  }
  #book {
    width: 300px;
    box-shadow: none;
    padding: 15px;
    margin-bottom: 32px;
    border-radius:15px;
    background-color: var(--bgColor);
    color: var(--textColor);
  }
  #book-name {
    font-weight: 900;
    font-size: 24px;
    user-select: none;
  }
</style>