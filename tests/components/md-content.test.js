/* eslint-env jest */
import renderer from 'react-test-renderer'
import MdContent from 'components/md-content'

describe('Components | md-content', () => {
  test('matches snapshot', () => {
    let source = '# Alpha'
    let wrapper = renderer.create(<MdContent source={source} />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
