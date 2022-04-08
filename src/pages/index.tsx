import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import styles from "./home.module.scss"
import { SubscribeButton } from '../components/SubscribeButton/index';
import { stripe } from '../Services/stripe';
interface IHomeProps{
  product: {
    priceId: string,
    amount: number
  }
}
export default function Home({product}:IHomeProps) {
  console.log('product: ', product)
  return (
    <>
      <Head>
        <title>ig.news | Home</title>
      </Head>
      <main className={styles.homeContainer}>
        <section className={styles.hero}>
          <span className={styles.homeContainer__heyWelcomeSpan}>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>Get access to all <br/> <span>for {product.amount} month</span></p>
          <SubscribeButton priceId={product.priceId}/> 
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(
    "price_1KmES1JMP4NyruHLSpCDVb8k", 
    {expand:["product"]}
  ) 
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style:"currency",
      currency: "USD"
    }).format((price.unit_amount / 100)),
  }
  console.log('product 2: ', product)
  return {
    props: {product},
    revalidate: 6000
  }
}