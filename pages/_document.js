import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import cssReset from 'styles/reset.css'

export default class CostumDocument extends Document {
  static getInitialProps ({ renderPage }) {
    let { html, head, errorHtml, chunks } = renderPage()
    let styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <style dangerouslySetInnerHTML={{ __html: cssReset }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
