import { Html, Head, Main, NextScript } from 'next/document';
import { render } from 'react-dom';
import { ServerStyleSheet } from 'styled-components';

export default function Document() {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
