import { AppProps } from "next/app"
import { Header } from "../components/Header"
import "../style/global.scss"
import { SessionProvider as NextAutProvider } from "next-auth/react"

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <NextAutProvider session={pageProps.session}>
      <Header/>
      <Component {...pageProps} />
    </NextAutProvider>
  )
}

export default MyApp