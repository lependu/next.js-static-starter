/**
 * @jest-environment node
**/
/* eslint-env jest */
describe('test environment | server', () => {
  test('does not inject global window', () => {
    expect(typeof window).toBe('undefined')
  })

  test('does not inject global document', () => {
    expect(typeof document).toBe('undefined')
  })
})
