import { pokemonApi } from '@/api/pokemonApi'

describe('pokemonApi', () => {
    test('axios instance should be configures with pokemon api', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })
})
