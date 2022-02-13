import { pokemonApi } from '../api/pokemonApi'

const getAllPokemons = () => {
    return Array.from(Array(650)).map((_, idx) => idx + 1)
}

const getPokemonNames = async (pokemons = []) => {
    const promisesArr = pokemons.map((pokemon) => pokemonApi.get(`/${pokemon}`))
    const responses = await Promise.all(promisesArr)
    return responses.map((pokemon) => ({ name: pokemon.data.name, id: pokemon.data.id }))
}

export const getPokemonOptions = async () => {
    const mixedPokemons = getAllPokemons()
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
    return getPokemonNames(mixedPokemons)
}
