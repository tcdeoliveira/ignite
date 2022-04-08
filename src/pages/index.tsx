import Head from 'next/head'
import Image from 'next/image'
import styles from "./home.module.scss"
import { SubscribeButton } from '../components/SubscribeButton/index';

export default function Home() {
  return (
    <>
      <Head>
        <title>ig.news | Home</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span className={styles.homeContainer__heyWelcomeSpan}>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all <br/> <span>for $9,90 month</span></p>
          <SubscribeButton/>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

