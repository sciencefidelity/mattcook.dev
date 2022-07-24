import Head from "next/head"

/**
 * BaseHead: the site `<head>`
 * @returns The JSX Code for the document `<head>`
 */
export function BaseHead() {
  return (
    <Head>
      <title>Matt Cook</title>
      <meta
        name="Description"
        content="Front-end engineer specialising in React and TypeScript."
      />
      <meta name="keywords" content="" />
      <link
        rel="preload"
        href="/fonts/spacemono-italic.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/gtpressura-regular.woff2"
        as="font"
        crossOrigin=""
      />
      <link
        rel="preload"
        href="/fonts/gtpressuramono-regular.woff2"
        as="font"
        crossOrigin=""
      />
      {/* Facebook */}
      <meta property="og:title" content="Matt Cook" />
      <meta
        property="og:description"
        content="Front-end engineer specialising in React and TypeScript."
      />
      <meta property="og:url" content="https://mattcook.dev" />
      <meta property="og:image" content="" />
      <meta property="og:site_name" content="Matt Cook" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="article" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Matt Cook" />
      <meta
        name="twitter:description"
        content="Front-end engineer specialising in React and TypeScript."
      />
      <meta name="twitter:site" content="https://mattcook.dev" />
      <meta name="twitter:image" content="" />
      <meta name="twitter:creator" content="@sciencefidelity" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="mask-icon" href="/mask-icon.svg" color="#00B5DD" />
    </Head>
  )
}
