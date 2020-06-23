<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <quote :quote="q" v-for="q of quotes" :key="q.id"></quote>
            </div> 
        </div>   
    </div>
</template>

<script>
import Quote from './Quote.vue'
import { eventBus } from '../../main.js'
export default {
    data() {
        return {
            quotes: []
        }
    },
    components: {
        'quote': Quote
    },
    created() {
        eventBus.$on('newQuoteAdded', (quote) => {
            if (this.quotes.length < 10) {
                this.quotes.push({id:this.quotes.length + 1, message: quote})
            } else {
                alert('Please delete some quotes to add new quotes')
            }
        })

        eventBus.$on('quoteRemoved', (id) => {
           this.quotes = this.quotes.filter(q => {
               return q.id != id;
           })
        })
    }
}
</script>