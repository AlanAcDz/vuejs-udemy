import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter component', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
    test('should match snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
    test('title h2 should have default value of "Counter"', () => {
        const h2 = wrapper.find('h2')
        expect(h2.exists()).toBeTruthy()
        expect(h2.text()).toBe('Counter')
    })
    test('default value should be 100 in p element', () => {
        // const pTags = wrapper.findAll('p')
        // expect(pTags[1].text()).toBe('100')
        const value = wrapper.find('[data-testid]').text()
        expect(value).toBe('100')
    })
    test('should increase and decrease counter value', async () => {
        const [decreaseBtn, increaseBtn] = wrapper.findAll('button')
        const counterP = wrapper.find('[data-testid]')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        expect(counterP.text()).toBe('99')
    })
    test('should set default value', () => {
        const { start } = wrapper.props()
        const value = wrapper.find('[data-testid]').text()
        expect(value).toBe(start.toString())
    })
    test('should show title prop', () => {
        const title = 'Hola mundo'
        const wrapper = shallowMount(Counter, {
            props: { title },
        })
        expect(wrapper.find('h2').text()).toBe(title)
    })
})
