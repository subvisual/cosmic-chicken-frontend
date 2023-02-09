import Head from "next/head";

export default function MetaHead() {
  const meta = {
    title: "Cosmic Chicken",
    description:
      "Provide undercollateralized lending to Storage Providers using Chicken Bond mechanism on Filecoin",
    image: "/images/social-image.png",
  };

  return (
    <Head>
      <title>{meta.title}</title>

      <link rel="icon" href="/favicon.ico" />
      <meta
        name="keywords"
        content="filecoin, fvm, fintech, chicken bonds, undercollateralized lending, blockchain, finiam"
      />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta name="twitter:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="image" property="og:image" content={meta.image} />
      <meta property="og:description" content={meta.description} />
    </Head>
  );
}
