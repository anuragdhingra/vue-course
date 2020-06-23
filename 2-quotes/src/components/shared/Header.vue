<template>
    <div>
        <h1>Quotes Added</h1>
        <div class="progress">
            <div class="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" :style="{ width: quoteCount*10 + '%'}">
                {{ quoteCount }}/10
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
export default {
    data() {
        return {
            quoteCount: 0
        }
    },
    created() {
        eventBus.$on('newQuoteAdded', () => {
            if (this.quoteCount < 10) {
                this.quoteCount++
            }
        })
        eventBus.$on('quoteRemoved', () => {
            this.quoteCount--
        })
    }
}
</script>

<style scoped>
    .progress {
        margin: 20px auto;
    }
</style>