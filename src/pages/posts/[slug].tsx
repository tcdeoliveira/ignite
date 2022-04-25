import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { getPrismicClient } from "../../Services/prismic";
import {RichText} from 'prismic-dom'
import Head from 'next/head';
import styles from './post.module.scss'
interface IPostsProps{
    post:{
        slug:string,
        title:string,
        content:string,
        updatedAt:string
    }
}

export default function post({post}:IPostsProps){
    return(
        <>
            <Head>
                <title>{post.title} | ig.news</title>
            </Head>
            <main className={styles.container}>
                <article className={styles.post}>
                    <h1>{post.title}</h1>
                    <time>{post.updatedAt}</time>
                    <div
                        className={styles.postContent}
                        dangerouslySetInnerHTML={{__html: post.content}} ></div>
                </article>
            </main>
        </>
    );
}

export const getServerSideProps:GetServerSideProps = async ({req, params})=>{
    const session = await getSession({req});
    const {slug} = params;
    const prismic = getPrismicClient();
    const response = await prismic.getByUID('post', String(slug), {});
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asText(response.data.content),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day:'2-digit',
            month:'long',
            year:'numeric'
        })
    };
    if(!session){
        //TODO: Redirect
    }
    return  {
        props:{
            post
        }
    }
}