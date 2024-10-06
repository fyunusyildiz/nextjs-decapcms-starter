import Head from "next/head";

export interface HeaderProps {
  title: string;
  description: string;
}

export default function Header(props: HeaderProps) {
  const title = `${props.title} | Example App`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <header className="w-full h-20 p-5">Header Component</header>
    </>
  );
}
