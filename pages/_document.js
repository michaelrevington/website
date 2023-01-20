import DOMParserReact from "dom-parser-react";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png"
        />
        <meta
          name="google-site-verification"
          content="NEHCvnQNYkKkAc5KGrDzxL8Djd867HczPDBN9UUp3io"
        />
        <meta name="author" content="Ravindu Denuwan" />
        <meta
          name="keywords"
          content="developer, ravindu denuwan, michael, revington, revington dev's, revington developments, programmer, c++, java, html, css, js, javascript, web-development, front-end development, back-end development, software"
        />
      </Head>
      <body style={{ height: "100vh", overflow: "auto" }}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WDMQGFW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
        <Script strategy="beforeInteractive" id="gtag">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WDMQGFW');`}
        </Script>
        <Script
          strategy="beforeInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-3SLHT42S29"
        ></Script>
        <Script strategy="beforeInteractive" id="gtag-analyzer">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());

          gtag("config", "G-3SLHT42S29");`}
        </Script>
      </body>
    </Html>
  );
}
