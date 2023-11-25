<template v-slot:default="{ item }">
  <v-card 
    v-on:click="ResetOverlayScroll"
    id="recipe-body"
    rounded
    class="w-100">
  </v-card>
</template>
<style>
  #recipe-body {
    user-select: none;
    box-shadow: none;
    margin-bottom: 32px;
    border-radius:15px;
    max-height: 300px;
    min-width: 500px;
    background-color: #F3DB5A;
    color: #453C0D;
  }
</style>
<script>
  export default {
    data: () => ({

    }),
    methods: {
      ResetOverlayScroll() {
        
      }
    }
  }
</script>