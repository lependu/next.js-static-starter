/**
 * @jest-environment node
**/
/* eslint-env jest */
import getPropsFromPath, { pageProps } from 'utils/get-props-from-path'

describe('Utils | get-props-from-path | server', () => {
  it('extracts props', () => {
    let expected = pageProps['/other']
    let actual = getPropsFromPath('/other')
    expect(actual).toEqual(expected)
  })
})
