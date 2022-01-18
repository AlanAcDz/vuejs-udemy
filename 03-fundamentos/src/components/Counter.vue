<template>
    <h2>Counter</h2>
    <p>{{ counter }}<sup>2</sup> = {{ getSquareCounter }} </p>
</template>

<script>
export default {
    data() {
        return {
            counter: 5,
        }
    },
    computed: {
        getSquareCounter() {
            return this.counter * this.counter
        }
    }
}
</script>

<style>

</style>