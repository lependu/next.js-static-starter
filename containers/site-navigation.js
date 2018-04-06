import { mapProps } from 'recompose'
import NavItem from 'components/nav-item'
import { pageProps } from 'utils/get-props-from-path'

export const SiteNavigationComponent = ({ links }) =>
  <nav id='site-navigation'>
    <ul>
      {links}
    </ul>
  </nav>

export const enchance = mapProps(
  () => {
    let links = Object.keys(pageProps).map(key => {
      let item = pageProps[key]
      let href = `/?id=${item.id}`
      let as = item.id === 'index' ? '/' : `/${item.id}`
      return (
        <li key={item.id}>
          <NavItem as={as} href={href}>
            {item.title}
          </NavItem>
        </li>
      )
    })
    return { links }
  }
)

export default enchance(SiteNavigationComponent)
