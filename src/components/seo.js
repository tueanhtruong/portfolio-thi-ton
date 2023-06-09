import Head from "next/head";

export default function SEO({
  description = "startup landing descriptions",
  author = "RedQ, Inc",
  meta,
  title = "startup landing title",
}) {
  const metaData = [
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:card",
      content: "summary",
    },
    {
      name: "twitter:creator",
      content: author,
    },
    {
      name: "twitter:title",
      content: title,
    },
    {
      name: "twitter:description",
      content: description,
    },
  ].concat(meta);
  return (
    <Head>
      <title>{title}</title>
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
      Thi Ton
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3DRWWKZHN6"
      ></script>
      <script src="./googleTag.js"></script>
    </Head>
  );
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
};
