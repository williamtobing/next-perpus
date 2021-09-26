import Head from "next/head";

type metaProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

const Meta = ({ title, keywords, description }: metaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Sayap Suci",
  keywords: "perpustakaan, sayap, suci, kepak",
  description: "Admin Perpustakaan Kepak Sayap Suci",
};

export default Meta;
