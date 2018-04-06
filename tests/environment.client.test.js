/* eslint-env jest */
describe('test environment | client', () => {
  test('injects global window', () => {
    expect(typeof window).toBe('object')
  })
  test('injects global document', () => {
    expect(typeof document).toBe('object')
  })
})
