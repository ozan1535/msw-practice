import type { GetServerSideProps } from 'next'
import { SharedColors, FontSizes } from '@fluentui/theme';
import styles from '../styles/Home.module.css'
import { booksModel } from "../imodels/booksModel"
import Head from 'next/head';
import { Card, CardHeader, CardFooter, CardPreview } from "@fluentui/react-card"
import Image from 'next/image'
import { Body, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap"
  },
  root: {
    width: "300px",
    height: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "margin-left": "20px",
    "margin-right": "20px",
    "margin-bottom": "20px",
    "border-radius": "20px",
  },
  footer: {
    width: "100%",
    height: "75px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
})

const Home = ({ books }: { books: booksModel[] }) => {

  const classes = useStyles();

  return (
    <div className={styles.container}>

      <Head>
        <title>MSW Practice</title>
      </Head>

      <p style={{
        color: SharedColors.red10,
        fontSize: FontSizes.size42,
        textAlign: 'center'
      }}
      >MSW Practice</p>

      <div className={classes.container}>

        {
          books.map(book => (
            <Card className={classes.root} key={book.id}>
              <CardPreview>
                <Image src={`/${book.id}.jpg`} style={{ objectFit: "cover" }} width={200} height={250} />
              </CardPreview>
              <div className={classes.footer}>
                <span style={{ fontWeight: 700 }}>Author</span>
                <span>{book.author}</span>
              </div>
              <div className={classes.footer}>
                <span style={{ fontWeight: 700 }}>Book Name</span>
                <span>{book.book}</span>
              </div>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

/* export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('https://mockup.litecells.com/documents/')
  const book = await res.json()

  return {
    props: {
      book,
    },
  }
} */

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://mockup.litecells.com/documents/')
  const books: booksModel[] = await res.json()

  return {
    props: {
      books,
    },
  }
}

export default Home

// 8 version