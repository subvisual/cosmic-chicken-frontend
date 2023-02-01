import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-mono bg-background h-full text-brown text-2xl antialiased selection:bg-orange">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
