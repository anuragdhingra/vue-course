<template>
    <div>
        <div class="form-group">
            <label for="comment">Add new quote:</label>
            <textarea class="form-control" rows="4" id="comment" v-model="newQuoteMessage"></textarea>
            <button @click="addQuote" type="button" class="btn btn-primary btn-lg">Add</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    data() {
        return {
            newQuoteMessage: ''
        }
    },
    methods: {
        addQuote() {
            if (this.newQuoteMessage != '') {
                eventBus.$emit('newQuoteAdded', this.newQuoteMessage)
                this.newQuoteMessage = ''
            } else {
                alert('Please enter a quote')
            }
        }
    }
}
</script>
    
</style>

<style scoped>
    .form-group {
        width: 70%;
        margin: 100px auto;
        text-align: center;
    }
    .btn {
        margin: 10px auto;
    }
</style>