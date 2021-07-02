import type { AppProps } from "next/app"
import "../styles/tailwind.build.css"
import "../styles/globals.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
