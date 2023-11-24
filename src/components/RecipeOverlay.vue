<template>
    <v-sheet
        @vnode-mounted="ScrollAI"
        style="
            overflow-y: hidden;
            max-height: 100vh;
            background: transparent;">
        <v-card
            @vnode-mounted="Spam"
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
        --top: 200px;
    }
    #overlay-body {
        background-color: #F3DB5A;
        user-select: none;
        top: var(--top);
    }
</style>
<script>
    export default {
        data: () => ({
            offset: 200, // top of the overlay
            mousePos: 0,
            oldMousePos: 0,
            isScrolling: false,
            scrollPos: 0,
            oldScrollPos: 200, // depends on offset value
            description: "",
            component: document.documentElement,
        }),
        methods: {
            Spam() {
                for(let i = 0; i < 500; i++) {
                    this.description += "Hello there! " 
                }
            },
            EditRecipe() {
                return;
            },
            ScrollAI() {
                window.addEventListener('mousedown', (event) => {
                    this.isScrolling = true;
                    this.oldMousePos = { x: event.pageX, y: event.pageY };
                });
                window.addEventListener('mousemove', (event) => {
                    if(!this.isScrolling) return;

                    this.mousePos = { x: event.pageX, y: event.pageY };
                    this.scrollPos = this.oldScrollPos + this.mousePos.y - this.oldMousePos.y;

                    this.component.style.setProperty('--top', this.scrollPos + 'px');
                });
                window.addEventListener('mouseup', (event) => {
                    this.isScrolling = false;
                    this.oldScrollPos = this.scrollPos;
                });
            },
        },
    }
</script>