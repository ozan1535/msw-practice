import type { GetServerSideProps } from 'next'
// import { Body, makeStyles } from '@fluentui/react-components';
import styles from '../styles/Home.module.css'
// import { Card, CardHeader, CardFooter } from "@fluentui/react-card"
import Head from 'next/head';
import { postsModel } from '../imodels/postsModel';
import { SharedColors, FontSizes } from '@fluentui/react';
import { useMemo } from 'react';
import Cards from './components/Card';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  root: {
    maxWidth: "300px",
    height: "350px",
    "margin-left": "10px",
    "margin-right": "10px",
    "margin-bottom": "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    "border-radius": "25px",
    backgroundColor: "#387C63",
    color: "#fff",
  },
  header: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "border-bottom": "1px solid #fff",
    textAlign: "center",
  },
  body: {
    width: "90%",
    height: "60%",
    textAlign: "justify",
    color: "black",
  },
  footer: {
    width: "100%",
    height: "20%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
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

  const classes = useStyles();

  const memoData = useMemo(() => {
    return (
      posts.slice(0, 12).map((post) => (
        <Cards post={post} />
      ))
    )
  }, [posts])


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

      <div className={classes.cards}>{memoData}</div>

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

{/* <Card className={classes.root} key={post.id}>
          <div className={classes.header}>
            <h4>{post.title}</h4>
          </div>
          <div className={classes.body}>
            <p>{post.body}</p>
          </div>
          <CardFooter className={classes.footer}>
            ID: {post.id}
          </CardFooter>
        </Card> */}