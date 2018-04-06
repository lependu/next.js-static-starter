/**
 * @jest-environment jsdom-global
**/
/* eslint-env jest */
/* global jsdom */
import getPropsFromPath, { pageProps } from 'utils/get-props-from-path'

describe('Utils | get-props-from-path | client', () => {
  test('extracts props', () => {
    jsdom.reconfigure({
      url: 'https://www.example.com/'
    })
    let expected = pageProps['/']
    let actual = getPropsFromPath('/')
    expect(actual).toEqual(expected)
  })

  test('handles trailing slash', () => {
    jsdom.reconfigure({
      url: 'https://www.example.com/other/'
    })
    let expected = pageProps['/other']
    let actual = getPropsFromPath('/other/')
    expect(actual).toEqual(expected)
  })
})
