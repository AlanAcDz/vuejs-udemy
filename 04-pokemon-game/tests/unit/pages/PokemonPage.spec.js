import { shallowMount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { mockPokemons } from '../mocks/pokemons.mock'

const mockData = {
    pokemonArr: mockPokemons,
    pokemon: mockPokemons[0],
    showPokemon: false,
    showAnswer: false,
    message: '',
}

describe('PokemonPage component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })
    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('should call mixPokemonArray on mount', () => {
        const mixPokemoArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        shallowMount(PokemonPage)
        expect(mixPokemoArraySpy).toHaveBeenCalled()
    })
    test('should match snapshot when pokemons load', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return mockData
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('should show PokemonPicture & PokemonOptions components', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return mockData
            },
        })
        const pokemonPicture = wrapper.find('pokemon-picture-stub')
        const pokemonOptions = wrapper.find('pokemon-options-stub')
        expect(pokemonPicture.exists()).toBeTruthy()
        expect(pokemonOptions.exists()).toBeTruthy()
        expect(pokemonPicture.attributes('pokemonid')).toBe('1')
        expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
    })
    test('checkAnswer tests', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return mockData
            },
        })
        await wrapper.vm.checkAnswer(1)
        const h2Tag = wrapper.find('h2')
        expect(h2Tag.exists()).toBeTruthy()
        expect(h2Tag.text()).toBe(`Correcto, ${mockPokemons[0].name}`)
        expect(wrapper.vm.showPokemon).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
        // await wrapper.vm.newGame()
        // await wrapper.vm.checkAnswer(2)
        // expect(wrapper.vm.message).toBe(`Oops, era ${mockPokemons[0].name}`)
    })
})
