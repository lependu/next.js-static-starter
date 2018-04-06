/* eslint-env jest */
import { mount } from 'enzyme'
import { enchance } from 'containers/content-selector'
import indexMd from 'contents/index.md'
import { MockComponent } from 'tests/helpers'

describe('Containers | content-selector', () => {
  test('provides source prop', () => {
    let Enchanced = enchance(MockComponent)
    let wrapper = mount(<Enchanced id='index' />)
    let subject = wrapper.find(MockComponent).prop('source')

    expect(subject).toBe(indexMd)
  })
})
