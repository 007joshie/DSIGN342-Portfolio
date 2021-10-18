import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <meta
            name="description"
            content="Kia Ora, I'm Josh! Welcome to my porfolio!"
          />
          <link rel="canonical" href="https://www.joshboag.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary" />
          <meta property="og:url" content="https://www.joshboag.com/" />
          <meta
            property="og:title"
            content="Web-developer portfolio for Joshua Boag"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
