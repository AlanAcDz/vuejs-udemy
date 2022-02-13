<template>
    <template v-if="pokemon">
        <h1>¿Quién es este pokemon?</h1>
        <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer($event)" />
        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame()">Nuevo Juego</button>
        </template>
    </template>
    <h1 v-else>Espere por favor...</h1>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture'
import PokemonOptions from '@/components/PokemonOptions'
import { getPokemonOptions } from '@/helpers/getPokemonOptions'

export default {
    components: { PokemonPicture, PokemonOptions },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: '',
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const rndInt = Math.floor(Math.random() * 4)
            this.pokemon = this.pokemonArr.at(rndInt)
        },
        checkAnswer(selectedId) {
            if (this.showAnswer) return
            this.showAnswer = true
            this.showPokemon = true
            this.message =
                selectedId === this.pokemon.id ? `Correcto, ${this.pokemon.name}` : `Oops, era ${this.pokemon.name}`
        },
        newGame() {
            this.pokemon = null
            this.showPokemon = false
            this.showAnswer = false
            this.message = ''
            this.mixPokemonArray()
        },
    },
    mounted() {
        this.mixPokemonArray()
    },
}
</script>
