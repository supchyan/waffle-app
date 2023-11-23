<template>
    <v-sheet
        style="
            overflow-y: hidden;
            max-height: 100vh;
            background: transparent;">
        <!-- v-on:scroll="ScrollOverlay"> -->
        <v-card
            @vnode-mounted="HoverAI"
            v-on:vnode-mounted="Spam"
            id="overlay-body"
            class="d-flex justify-left align-top pa-8"
            rounded="xl"
            width="600"
            min-height="600">
            <v-col>
                <v-row class="d-flex justify-left align-center">
                    <div id="title" style="font-size: 24px; font-weight: 900;">A new recipe</div>
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
    :root {
        --margin: 0vh;
    }
    #overlay-body {
        background-color: #F3DB5A;
        user-select: none;
        margin-top: var(--margin);
        margin-bottom: 20vh;
    }
</style>
<script>
    export default {
    data: () => ({
        mousePos: 0,
        oldMousePos: 0,
        description: "",
        component: document.documentElement,
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
        HoverAI() {
            window.addEventListener('mousedown', (event) => {
                this.mousePos = { x: event.clientX, y: event.clientY };
                this.component.style.setProperty('--margin', this.mousePos.y/10 + 'vh');
            });
        },
    },
  }
</script>