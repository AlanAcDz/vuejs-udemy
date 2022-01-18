
const app = Vue.createApp({
    data() {
        return {
            quote: 'Im batman',
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote() {
            this.author = 'Alan Acuña'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    },
})

app.mount('#app')
