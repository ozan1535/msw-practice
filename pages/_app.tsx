import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from './components/Navigation'
import styles from '../styles/App.module.css'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.container}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
  
}

export default MyApp
