import { compose, pure, setStatic } from 'recompose'
import Layout from 'containers/layout'
import getPropsFromPath from 'utils/get-props-from-path'

export const enchance = compose(
  setStatic(
    'getInitialProps',
    async ({ asPath }) => {
      let pageProps = getPropsFromPath(asPath)
      return Object.assign({}, { asPath }, pageProps)
    }
  ),
  pure
)

export default enchance(Layout)
