import { test, assert, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Layout from './Layout.vue'

describe('Layout', () => {
  test('should render', () => {
    const wrapper = mount(Layout)

    expect(wrapper.html()).toMatchSnapshot()
  })
})
