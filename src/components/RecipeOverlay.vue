<template>
    <v-card
        @vnode-mounted="ScrollAI"
        id="overlay-body"
        class="pa-8"
        rounded="xl"
        width="600"
        min-height="600"
        title=""
        text="">
    </v-card>
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