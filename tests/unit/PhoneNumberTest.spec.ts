import { mount } from '@vue/test-utils'
import PhoneNumberInput from '@/components/PhoneNumberInput.vue'

describe('PhoneNumberInput.vue', () => {
  it('renders correct placeholder based on locale', () => {
    Object.defineProperty(navigator, 'language', { value: 'en-US', configurable: true })
    const wrapper = mount(PhoneNumberInput, {
      props: {
        modelValue: ''
      }
    })
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('+1 (123) 456-7890')
  })

  it('allows only valid characters in the input', async () => {
    const wrapper = mount(PhoneNumberInput, {
      props: {
        modelValue: ''
      }
    })
    const input = wrapper.find('input')
    await input.setValue('abc123+() -')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['123+() -'])
  })

  it('updates model value properly', async () => {
    const wrapper = mount(PhoneNumberInput, {
      props: {
        modelValue: '234567'
      }
    })
    const input = wrapper.find('input')
    await input.setValue('243')
    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['243'])
  })
})
