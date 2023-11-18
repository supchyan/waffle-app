<template v-slot:default="{ item }">
  <v-card
    id="book"
    v-on:click="bookSelect">
      <!-- <v-icon style="padding: 30px 0px;">mdi-bookmark</v-icon> -->
    <div 
      id="book-name"
      >🥐 Book name is placed right here</div>
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

<script>
  export default {
    data: () => ({
      component: document.getElementById('book'),
    }),
    methods: {
      bookSelect() {
        this.component.style.setProperty('--bgColor', '#525252');
        this.component.style.setProperty('--textColor', '#fff');
      }
    }
  }
</script>