<template>
    <div id="app">
        {{msg}}
        <my-component></my-component>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'Use Vue 2.0 Today!'
        }
    },
    methods: {
        startHacking() {
        }
    }
}
</script>
<style>
body {
    font-family: Helvetica, sans-serif;
}
</style>
