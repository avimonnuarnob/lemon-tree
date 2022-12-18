import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href='/fonts/TTTravels-Regular.ttf'
            rel='preload'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            href='/fonts/TTTravels-italic.ttf'
            rel='preload'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            href='/fonts/TTTravels-Bold.ttf'
            rel='preload'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
          />
          <link
            href='/fonts/TTTravels-BoldItalic.ttf'
            rel='preload'
            as='font'
            type='font/ttf'
            crossOrigin='anonymous'
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

export default MyDocument;
