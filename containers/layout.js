import Head from 'next/head'
import SiteNavigation from 'containers/site-navigation'
import ContentSelector from 'containers/content-selector'

export default ({ id, description, title }) =>
  <div id='site-layout'>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Head>
    <SiteNavigation />
    <ContentSelector id={id} />
  </div>
