/* eslint-env jest */
import { mount } from 'enzyme'
import { enchance, NavItemComponent } from 'components/nav-item'

describe('Component | nav-item', () => {
  test('provides router, handleClick props', () => {
    let Enchanced = enchance(NavItemComponent)
    let wrapper = mount(<Enchanced />)
    let subject = wrapper.find(NavItemComponent).props()

    expect(typeof subject.handleClick).toBe('function')
    expect(typeof subject.router).toBe('undefined')
  })

  test('handles click event', () => {
    let router = { push: jest.fn() }
    let e = { preventDefault: jest.fn() }
    let Enchanced = enchance(NavItemComponent)
    let subject = mount(
      <Enchanced href='/?id=alpha' as='/alpha' router={router}>
        <p>children</p>
      </Enchanced>
    )
    let expected = [['/?id=alpha', '/alpha']]

    subject.find('a').simulate('click', e)
    expect(e.preventDefault.mock.calls.length).toBe(1)
    expect(router.push.mock.calls).toEqual(expected)
  })
})
