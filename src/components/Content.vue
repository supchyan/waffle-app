<template class="pa-0 ma-0">
  <v-sheet class="d-flex justify-center align-top h-screen">
    <div>
      <v-sheet class="d-flex h-screen">
        <v-sheet class="flex-column">
          <!-- book block vvv -->
          <div>
            <v-card 
              class="d-flex align-center"
              rounded
              style="
                box-shadow: none;
                padding: 0px 100px;
                margin-bottom: 32px;
                margin-right: 16px;
                border-radius:0px 1000px 1000px 0px;
                background-color: #525252;
                color: #fff; font-family:
                'Montserrat Alternates';">
              <v-icon style="padding: 30px 0px;">mdi-bookmark</v-icon>
              <div class="pa-4" style="font-weight: 900; font-size: 25px;">Выпечка</div>
            </v-card>
            <v-card 
              class="d-flex align-center"
              rounded
              style="
                box-shadow: none;
                padding: 0px 100px;
                margin-bottom: 32px;
                margin-right: 16px;
                border-radius:0px 1000px 1000px 0px;
                background-color: #525252;
                color: #fff; font-family:
                'Montserrat Alternates';">
              <v-icon style="padding: 30px 0px;">mdi-bookmark</v-icon>
              <div class="pa-4" style="font-weight: 900; font-size: 25px;">Выпечка</div>
            </v-card>
            <v-card 
              class="d-flex align-center"
              rounded
              style="
                box-shadow: none;
                padding: 0px 100px;
                margin-bottom: 32px;
                margin-right: 16px;
                border-radius:0px 1000px 1000px 0px;
                background-color: #525252;
                color: #fff; font-family:
                'Montserrat Alternates';">
              <v-icon style="padding: 30px 0px;">mdi-bookmark</v-icon>
              <div class="pa-4" style="font-weight: 900; font-size: 25px;">Выпечка</div>
            </v-card>
          </div>
          <!-- book block ^^^ -->

          <!-- book navigation vvv -->
          <v-sheet class="d-flex" style="align-items: center; justify-content: center; margin-right: 16px;">
            <v-btn color="primary" class="mx-4" icon>
              <v-icon>mdi-plus</v-icon>
              <v-tooltip activator="parent" location="bottom" text="Создать книгу" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
            </v-btn>
            <v-btn color="primary" class="mx-4" icon>
              <v-icon>mdi-delete</v-icon>
              <v-tooltip activator="parent" location="bottom" text="Удалить" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
            </v-btn>
          </v-sheet>
          <!-- book navigation ^^^ -->
        </v-sheet>

        <v-sheet style="margin: -32px 0px;" class="d-flex align-center h-screen">
          <v-img style="height: 700px; width: 100px;" src="@/assets/Splitter.svg"/>
        </v-sheet>        
      
      </v-sheet>
    </div>

    <div class="w-75">
      <!-- recipe navigation vvv -->
      <v-sheet class="mx-8 d-flex justify-center align-center">
        <v-sheet class="w-100 d-flex justify-center align-center">
          <v-text-field
            :loading="loading"
            style="font-family: 'Montserrat Alternates'; font-weight: 900;"
            bg-color="primary"
            append-inner-icon="mdi-magnify"
            density="comfortable"
            clearable="true"
            rounded
            hide-details 
            dense
            label="Поиск"
            single-line
            variant="solo"
            @click:append-inner="onClick">
          </v-text-field>
          
          <v-btn color="primary" class="mx-4" icon>
            <v-icon>mdi-export-variant</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Поделиться" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
          
          <v-btn color="primary" icon>
            <v-icon>mdi-plus</v-icon>
            <v-tooltip activator="parent" location="bottom" text="Создать рецепт" style="font-family: 'Montserrat Alternates'; font-weight: 900;"></v-tooltip>
          </v-btn>
        </v-sheet>
      </v-sheet>
      <!-- recipe navigation ^^^ -->

      <!-- recipe block vvv -->
      <v-sheet class="mx-4 d-flex justify-center align-center">
        <v-card 
          rounded
          class="mx-4"
          style="
            margin-top: 32px;
            border-radius:15px;
            min-width: 400px; 
            max-height: 300px;
            background-color: #F3DB5A;
            color: #453C0D; font-family:
            'Montserrat Alternates';">
          <div class="pa-4" style="font-weight: 900; font-size: 25px;">🥐 Круассаны, как у мамы</div>
          <div class="pa-4" style="font-weight: 400; font-size: 18px;">Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание </div>
        </v-card>
        <v-card 
          rounded
          class="mx-4"
          style="
            margin-top: 32px;
            border-radius:15px;
            min-width: 400px; 
            max-height: 300px;
            background-color: #F3DB5A;
            color: #453C0D; font-family:
            'Montserrat Alternates';">
          <div class="pa-4" style="font-weight: 900; font-size: 25px;">🥐 Круассаны, как у мамы</div>
          <div class="pa-4" style="font-weight: 400; font-size: 18px;">Описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание описание </div>
        </v-card>
      </v-sheet> 
      <!-- recipe block ^^^ -->
    </div>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      loaded: false,
      loading: false,
    }),

    methods: {
      onClick () {
        this.loading = true

        setTimeout(() => {
          this.loading = false
          this.loaded = true
        }, 2000)
      },
    },
  }
</script>