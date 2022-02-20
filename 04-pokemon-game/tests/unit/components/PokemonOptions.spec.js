import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { mockPokemons } from '../mocks/pokemons.mock'

describe('PokemonOptions components', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons,
            },
        })
    })
    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
        // expect(wrapper.html()).toMatchInlineSnapshot()
    })
    test('should show the 4 options', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)
        expect(liTags[0].text()).toBe(mockPokemons[0].name)
        expect(liTags[1].text()).toBe(mockPokemons[1].name)
        expect(liTags[2].text()).toBe(mockPokemons[2].name)
        expect(liTags[3].text()).toBe(mockPokemons[3].name)
    })
    test('should emit "selection" with params on click', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li')
        li1.trigger('click')
        li2.trigger('click')
        li3.trigger('click')
        li4.trigger('click')
        expect(wrapper.emitted('selection').length).toBe(4)
        expect(wrapper.emitted('selection')[0]).toEqual([mockPokemons[0].id])
        expect(wrapper.emitted('selection')[1]).toEqual([mockPokemons[1].id])
        expect(wrapper.emitted('selection')[2]).toEqual([mockPokemons[2].id])
        expect(wrapper.emitted('selection')[3]).toEqual([mockPokemons[3].id])
    })
})
