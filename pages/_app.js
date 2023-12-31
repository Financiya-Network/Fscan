import Head from 'next/head'
import Router from 'next/router'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import NProgress from 'nprogress'
import TagManager from 'react-gtm-module'

import Layout from '../layouts'
import { useStore } from '../store'
import * as ga from '../lib/ga'
import 'antd/dist/antd.css'
import '../styles/globals.css'
import '../styles/ant.css'
import '../styles/animate.css'
import '../styles/layout.css'
import '../styles/tailwind.css'
import '../styles/components/button.css'
import '../styles/components/dropdown.css'
import '../styles/components/forms.css'
import '../styles/components/modals.css'
import '../styles/components/navbar.css'
import '../styles/components/notifications.css'
import '../styles/components/nprogress.css'
import '../styles/components/recharts.css'
import '../styles/components/skeleton.css'
import '../styles/components/table.css'

Router.events.on(
  'routeChangeStart',
  () => NProgress.start(),
)

Router.events.on(
  'routeChangeComplete',
  () => NProgress.done(),
)

Router.events.on(
  'routeChangeError',
  () => NProgress.done(),
)

export default (
  {
    Component,
    pageProps,
  },
) => {
  const router = useRouter()
  const store = useStore(pageProps.initialReduxState)

  useEffect(
    () => {
      const handleRouteChange = url =>
        ga.pageview(url)

      router.events
        .on(
          'routeChangeComplete',
          handleRouteChange,
        )

      return () =>
        router.events
          .off(
            'routeChangeComplete',
            handleRouteChange,
          )
    },
    [router.events],
  )

  useEffect(
    () => {
      if (process.env.NEXT_PUBLIC_GTM_ID) {
        TagManager.initialize(
          {
            gtmId: process.env.NEXT_PUBLIC_GTM_ID,
          },
        )
      }
    },
    [],
  )

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          charSet="utf-8"
        />
        <link
          rel="manifest"
          href="/manifest.json"
        />
        <link
          rel="shortcut icon"
          href="/favicon.png"
        />
        <meta
          name="msapplication-TileColor"
          content="#050707"
        />
        <meta
          name="msapplication-TileImage"
          content="/icons/mstile-150x150.png"
        />
        <meta
          name="theme-color"
          content="#050707"
        />
      </Head>
      <Provider store={store}>
        <Layout>
          <div id="portal" />
          <Component
            { ...pageProps }
          />
        </Layout>
      </Provider>
    </>
  )
}