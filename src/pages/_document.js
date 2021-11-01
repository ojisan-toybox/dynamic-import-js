import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  //   static async getInitialProps(ctx) {
  //     const initialProps = await Document.getInitialProps(ctx);
  //     return { ...initialProps };
  //   }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* <script async src="https://news.google.com/swg/js/v1/swg.js"></script> */}
          <script type="application/ld+json">{`${{
            publicationId: "3",
            isAccessibleForFree: false,
            isPartOf: {
              "@type": ["CreativeWork", "Product"],
              name: "Product name",
              productID: "product-id",
            },
          }}`}</script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
