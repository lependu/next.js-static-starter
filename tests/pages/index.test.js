/* eslint-env jest */
import renderer from 'react-test-renderer'
import IndexPage, { enchance } from 'pages'
import { MockComponent } from 'tests/helpers'
import { pageProps } from 'utils/get-props-from-path'

describe('Pages | index', () => {
  test('matches snapshot', () => {
    let wrapper = renderer.create(<IndexPage id='index' />)
    let tree = wrapper.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('provides props', async () => {
    let Enchanced = enchance(MockComponent)
    let subject = await Enchanced.getInitialProps({ asPath: '/' })
    expect(subject.asPath).toBe('/')
    expect(subject.title).toBe(pageProps['/'].title)
    expect(subject.id).toBe(pageProps['/'].id)
    expect(subject.description).toBe(pageProps['/'].description)
  })
})
