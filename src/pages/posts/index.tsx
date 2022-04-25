import styles from './styles.module.scss';
import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import { getPrismicClient } from '../../Services/prismic';
import * as Prismic from '@prismicio/client'
export default function Posts(){
    return(
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.container__posts}>
                    <a href="#">
                        <time>Quando</time>
                        <strong>Titulo</strong>
                        <p>Paragrafo</p>
                    </a>
                    <a href="#">
                        <time>Quando</time>
                        <strong>Titulo</strong>
                        <p>Paragrafo</p>
                    </a>
                    <a href="#">
                        <time>Quando</time>
                        <strong>Titulo</strong>
                        <p>Paragrafo</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps:GetStaticProps = async()=> {
    console.log('loading primisc')
    const prismic = getPrismicClient();
    const response = await prismic.query(
        [Prismic.predicates.at('document.type', 'post')],
        {
            fetch:['post.title', 'post.content'],
            pageSize: 100
        }
    );
    console.log('response: ' + JSON.stringify(response, null, 2))
    return {
        props: {

        }
    }
}