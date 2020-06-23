<template>
    <div @click="removeQuote" class="col-sm-2 quote" :key="quote.id"> {{ quote.message }} </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    props: {
        quote: {
            id: Number,
            message: String
        }
    },
    methods: {
        removeQuote(e) {
            eventBus.$emit('quoteRemoved', this.quote.id)
        }
    }
}
</script>

<style scoped>
    .quote {
        padding: 20px 20px;
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
        background-color:lightgray;
        box-shadow: 1px 1px #888888;
        margin: 10px;
        font-family: Arizonia;
        font-size: 20px;
    }
    .quote:hover {
        background-color:rgb(241, 120, 120);
        color: white;
        cursor: pointer;
    }
</style>