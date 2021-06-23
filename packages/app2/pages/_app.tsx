import type { AppProps } from "next/app"
import "../styles/tailwind.build.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
