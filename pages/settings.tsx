import type { GetServerSideProps } from 'next'
import { Body, makeStyles } from '@fluentui/react-components';
import styles from '../styles/Home.module.css'
import Head from 'next/head';
import { postsModel } from '../imodels/postsModel';
import { SharedColors, FontSizes } from '@fluentui/react';
import { useMemo } from 'react';
import Cards from './components/Card';
import { mainContext } from "./_app";
import { useContext } from "react";

const useStyles = makeStyles({
  cards: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap"
  }
})

const Settings = ({ posts }: { posts: postsModel[] }) => {

  const { counter, setCounter } = useContext(mainContext)

  const classes = useStyles();

  const twelveRecentPosts = useMemo(() => posts.slice(0, counter), [posts, counter])

  const increase = () => {
    setCounter(counter + 3);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Fetch Data</title>
      </Head>

      <p style={{
        color: SharedColors.red10,
        fontSize: FontSizes.size42,
        textAlign: 'center'
      }}
      >Fetch Data</p>

      <div className={classes.cards}>{
        twelveRecentPosts.map((post) => (
          <Cards post={post} />
        )
        )}
      </div>
      <button onClick={increase} style={{ width: "300px", fontSize: "30px", backgroundColor: "transparent", border: "1px solid green", borderRadius: "30px", cursor: "pointer" }}>
        Load More</button>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const posts: postsModel[] = await response.json();

  return {
    props: {
      posts,
    }
  }
}

export default Settings;