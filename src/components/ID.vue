<template>
    <div v-on:click="ClickToCopy" id="input-id">90349023</div>
</template>
<style>
    #input-id {
        font-weight: 900;
        padding: 0px 16px;
    }
</style>
<script>
    export default {
        data: () => ({
            copiedID: '',
        }),
        methods: {
            ClickToCopy() {
                this.copiedID = document.getElementById('input-id').innerText;
                alert(this.copiedID);
                return this.copiedID;
            }
        }
    }
</script>