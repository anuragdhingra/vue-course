<template>
    <div class="container">
        <app-header></app-header>
        <new-quote></new-quote>
        <quotes></quotes>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header.vue'
import NewQuote from './components/quote/New.vue'
import Quotes from './components/quote/Quotes.vue'
import Footer from './components/shared/Footer.vue'
export default {
        components: {
            'app-header': Header,
            'new-quote': NewQuote,
            'quotes': Quotes,
            'app-footer': Footer
        }
    }
</script>

<style>
</style>
