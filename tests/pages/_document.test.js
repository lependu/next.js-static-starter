/* eslint-env jest */

import { shallow } from 'enzyme'
import Doc from 'pages/_document'

describe('Pages | _document', () => {
  test('#getInitialProps', async () => {
    let renderPage = jest.fn(() => ({
      html: {}, head: {}, errorHtml: {}, chunks: {}
    }))
    let props = await Doc.getInitialProps({ renderPage })
    expect(typeof props).toBe('object')
    expect(props.styles).toEqual([])
  })

  test('sets meta tags', () => {
    let wrapper = shallow(<Doc />)
    expect(wrapper.find({ lang: 'en' }).length).toBe(1)
    expect(wrapper.find({ name: 'viewport' }).length).toBe(1)
  })
})
