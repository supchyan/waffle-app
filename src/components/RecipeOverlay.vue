<template>
    <v-sheet 
        v-scroll.self="Scroll"
        style="
            overflow-y: scroll;
            max-height: 100vh;
            background: transparent;">
        <!-- v-on:scroll="ScrollOverlay"> -->
        <v-card
            v-on:vnode-mounted="Spam"
            id="overlay-body"
            class="d-flex justify-left align-top pa-8"
            rounded="xl"
            width="600"
            min-height="600"
            style="margin-top: 20vh; margin-bottom: 20vh;">
            <v-col>
                <v-row class="d-flex justify-left align-center">
                    <div id="title" style="font-size: 24px; font-weight: 900;"> {{ scrollInvoked }} A new recipe</div>
                    <v-icon class="px-4" v-on:click="EditRecipe">mdi-pencil</v-icon>
                </v-row>
                <v-row>
                    <div id="recipe-desc">{{ description }}</div>
                </v-row>
            </v-col>
        </v-card>
    </v-sheet>
</template>
<style>
    #overlay-body {
        background-color: #F3DB5A;
        user-select: none;
    }
</style>
<script>
    export default {
    data: () => ({
        scrollInvoked: 0,
        description: "",
        component: document.getElementById('overlay-body'),
    }),
    methods: {
        Spam() {
            for(let i = 0; i < 1000; i++) {
                this.description += "Hi! " 
            }
        },
        EditRecipe() {
            return;
        },
        Scroll() {
            this.scrollInvoked++
        },
    },
  }
</script>