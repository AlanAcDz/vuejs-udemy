import { getPokemonOptions, getAllPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('getPokemonOptions helpers', () => {
    test('getAllPokemons should return array of numbers', () => {
        const pokemons = getAllPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[649]).toBe(650)
    })
    test('getPokemonNames should return an array of 4 elements with names of pokemons', async () => {
        const pokemons = await getPokemonNames([1, 2, 3, 4])
        expect(pokemons).toStrictEqual(mockPokemons)
    })
    test('getPokemonOptions should return a mixed array', async () => {
        const expected = { name: expect.any(String), id: expect.any(Number) }
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([expected, expected, expected, expected])
    })
})
