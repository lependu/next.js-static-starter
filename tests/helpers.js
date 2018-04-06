/* eslint-env jest */
import { Component } from 'react'

export class MockComponent extends Component {
  render () {
    return <div>{this.props.children}</div>
  }
}
