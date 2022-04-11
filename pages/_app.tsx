import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from './components/Navigation'
import styles from '../styles/App.module.css'
import { createContext, useState } from 'react'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../mocks')
}

export const mainContext = createContext();

function MyApp({ Component, pageProps }: AppProps) {

  const [counter, setCounter] = useState<number>(3);
  const [color, setColor] = useState<boolean>(true);

  const data = {
    counter,
    setCounter,
    color,
    setColor
  }



  return (
    <mainContext.Provider value={data}>
      <div className={styles.container}>
        <Navigation />
        <Component {...pageProps} />
      </div >
    </mainContext.Provider>

  )

}

export default MyApp
