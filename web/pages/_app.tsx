import "modern-normalize"
import "styles/globals.scss"
import Script from "next/script"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        src="https://plausible.io/js/plausible.js"
        data-domain="mattcook.dev"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
