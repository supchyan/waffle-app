<template v-slot:default="{ item }">
  <v-card
    style="
      width: 300px;
      box-shadow: none;
      padding: 0px 15px;
      margin: 0px 0px 32px 0px;
      border-radius:15px;
      background-color: #525252;
      color: #fff;">
      <!-- <v-icon style="padding: 30px 0px;">mdi-bookmark</v-icon> -->
    <v-textarea
      style="font-family: 'Montserrat Alternates'; font-weight: 900; font-size: 10px;"
      :model-value="this.setName()"
      auto-grow
      variant="plain"
      rows="1">
    </v-textarea>
  </v-card>
</template>
<script src="@/scripts/createBook"></script>