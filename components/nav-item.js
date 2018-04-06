import { compose, withHandlers } from 'recompose'
import { withRouter } from 'next/router'

export const NavItemComponent = ({ as, children, handleClick, href, router }) =>
  <a href={as} onClick={handleClick}>{children}</a>

export const enchance = compose(
  withRouter,
  withHandlers({
    handleClick: props => e => {
      e.preventDefault()
      props.router.push(props.href, props.as)
    }
  })
)

export default enchance(NavItemComponent)
