import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LegacyRef, useRef, useCallback, useEffect, useState } from 'react'

import {
  Compose,
  LandingButton,
  LandingFooter,
  LandingHeader,
  LandingSearchBar,
  Logo,
} from 'src/components'
import { ThemeContextProvider } from 'src/contexts'
import { useSearchText } from 'src/hooks/useSearchText'

import 'src/styles/globals.scss'

import styles from 'src/styles/pages/App.module.scss'
import { sleep } from 'src/utils'

interface LandingProps {
  searchText: string
  searchRef: LegacyRef<HTMLInputElement>
  onSearchClick: VoidFunction
}

const Landing: React.FC<LandingProps> = ({
  searchText,
  searchRef,
  onSearchClick,
}: LandingProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const search = useCallback(async () => {
    await sleep(300)
    buttonRef.current?.focus()
    await sleep(400)
    buttonRef.current?.click()
  }, [])

  useEffect(() => {
    if (searchText === 'Richard Hong') search()
  }, [search, searchText])

  return (
    <div className={styles.container}>
      <LandingHeader />
      <div className={styles.landing}>
        <Logo />
        <LandingSearchBar searchRef={searchRef} searchText={searchText} />
        <div className={styles.buttons}>
          <LandingButton onClick={onSearchClick} buttonRef={buttonRef}>
            Google Search
          </LandingButton>
          <LandingButton>I&apos;m Feeling Lucky</LandingButton>
        </div>
      </div>
      <LandingFooter />
    </div>
  )
}

function GoogleSearch({ Component, pageProps }: AppProps) {
  const [landing, setLanding] = useState(true)
  const searchText = useSearchText(1000)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const focus = async () => {
      await sleep(500)
      searchRef.current?.focus()
    }

    focus()
  }, [])

  const onSearchClick = useCallback(() => {
    setLanding(false)
  }, [])

  return (
    <Compose components={[ThemeContextProvider]}>
      <Head>
        <title>Google Search</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="root">
        {landing ? (
          <Landing
            searchText={searchText}
            searchRef={searchRef}
            onSearchClick={onSearchClick}
          />
        ) : (
          <Component {...pageProps} />
        )}
      </div>
    </Compose>
  )
}

export default GoogleSearch
