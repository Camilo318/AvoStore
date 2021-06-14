// import App from 'next/app'

import Layout from '@components/Layout'
import AppProvider from '@components/AppProvider/index'

import type { AppProps } from 'next/app'
import '@styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
