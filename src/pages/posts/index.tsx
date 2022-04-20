import styles from './styles.module.scss';
import Head from 'next/head';
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