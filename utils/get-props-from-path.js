export const pageProps = {
  '/': {
    id: 'index',
    title: 'index',
    description: 'index desc'
  },
  '/other': {
    id: 'other',
    title: 'other',
    description: 'other desc'
  }
}

export default (asPath) => {
  // Handles trailing slash
  if (typeof window !== 'undefined' && window.location.href) {
    let key = asPath.replace(window.location.href, '')
    if (key !== '/') key = key.replace(/\/$/, '')
    return pageProps[key]
  } else {
    return pageProps[asPath]
  }
}
