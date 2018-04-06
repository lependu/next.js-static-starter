/* eslint-env jest */
import renderer from 'react-test-renderer'
import Layout from 'containers/layout'

describe('Container | Layout', () => {
  test('matches snapshot', () => {
    let wrapper = renderer.create(<Layout id='index' />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
