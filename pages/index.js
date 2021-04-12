import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Name List | Home</title>
        <meta name="keywords" content="names"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, animi sit nisi, soluta quidem similique praesentium obcaecati reiciendis distinctio nemo voluptate aspernatur corrupti ad est voluptatibus cumque vitae tempora.</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam assumenda, animi sit nisi, soluta quidem similique praesentium obcaecati reiciendis distinctio nemo voluptate aspernatur corrupti ad est voluptatibus cumque vitae tempora.</p>
        <Link href="/names">
          <a className={styles.btn}>See Name Listing</a>
        </Link>
      </div>
    </>
  )
}
