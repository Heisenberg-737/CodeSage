import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />

        <title>CodeSage</title>
        <meta
          name="description"
          content="Do swift code analysis with CodeSage using ChatGPT" 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta content="/favicon.ico" property="./logo.png" />
        <link rel="icon" href="./logo.png" />
        <link rel="apple-touch-icon" href="./logo.png" />
        {/*
            Notice the use of %PUBLIC_URL% in the tags above.
            It will be replaced with the URL of the `public` folder during the build.
            Only files inside the `public` folder can be referenced from the HTML.
            Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
            work correctly both with client-side routing and a non-root public URL.
            Learn how to configure a non-root public URL by running `npm run build`.
        */}

        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,301,701,300,501,401,901,400&f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&f[]=clash-grotesk@200,700,400,600,300,1,500&f[]=azeret-mono@501,701,800,801,200,401,500,601,900,600,300,901,700,400,100,1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
