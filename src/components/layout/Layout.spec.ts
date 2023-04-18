import { test, assert, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Layout from './Layout.vue'

describe('Layout', () => {
  test('render layout', () => {
    const wrapper = mount(Layout)

    expect(wrapper.exists()).toBe(true)
  })
})
