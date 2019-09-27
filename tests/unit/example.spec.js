import { expect, assert } from 'chai'
import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import VueForm from 'vue-form'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const localVue = createLocalVue()
  localVue.use(VueForm)

  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue,
      sync: false
    })
    expect(wrapper.text()).to.include(msg)
  })

  it('renders require error when name field is blank', async () => {
    const wrapper = mount(HelloWorld, {
      sync: false,
      localVue
    })
    await wrapper.vm.$nextTick()

    const errorMessage = wrapper.find('#requiredError')
    assert(errorMessage.exists(), 'error exists')
  })

  it('renders max length error when name field is longer than 10 characters', async () => {
    const wrapper = mount(HelloWorld, {
      sync: false,
      localVue
    })
    wrapper.setData({ name: '123456789011' })
    await wrapper.vm.$nextTick()

    const errorMessage = wrapper.find('#maxLengthError')
    assert(errorMessage.exists(), 'error exists')
  })

  it('does not render any error when name field is valid', async () => {
    const wrapper = mount(HelloWorld, {
      sync: false,
      localVue
    })
    wrapper.setData({ name: 'name' })
    await wrapper.vm.$nextTick()

    const requiredError = wrapper.find('#requiredError')
    const maxLengthError = wrapper.find('#maxLengthError')
    assert(!requiredError.exists(), 'error does not exist')
    assert(!maxLengthError.exists(), 'error does not exist')
  })
})
