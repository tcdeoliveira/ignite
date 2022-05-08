import { getSession, useSession } from "next-auth/react";
import { getPrismicClient } from "../../../Services/prismic";
import {RichText} from 'prismic-dom'
import Head from 'next/head';
import styles from '../post.module.scss'
import { GetStaticProps } from 'next/types';
import Link from "next/link";
import { useEffect } from "react";
import { Session } from "next-auth";
import { useRouter } from "next/router";
interface IPostPreviewProps{
    post:{
        slug:string,
        title:string,
        content:string,
        updatedAt:string
    }
}

export default function PostPreview({post}:IPostPreviewProps){
    const{data}= useSession();
    const router = useRouter();
    console.log('session', data);
    useEffect(()=>{
        if(data?.activeSubscription){
            router.push(`/posts/${post.slug}`)
        }
    }, [data])
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
                        className={`${styles.postContent} ${styles.previewContent}`}
                        dangerouslySetInnerHTML={{__html: post.content}} >
                    </div>
                    <div className={styles.continueReading}>
                        Wanna continue reading?
                        <Link href="/">
                            <a>Subscribe now 🤗</a>
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}

export const getStaticPaths = () =>{
    return {
        paths:[],
        fallback: 'blocking'
    }
};

export const getStaticProps:GetStaticProps = async ({params})=>{
    const {slug} = params;
    const prismic = getPrismicClient();
    const response = await prismic.getByUID('post', String(slug), {});
    const post = {
        slug,
        title: RichText.asText(response.data.title),
        content: RichText.asText(response.data.content.splice(0, 3)),
        updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day:'2-digit',
            month:'long',
            year:'numeric'
        })
    };    
    return  {
        props:{
            post
        },
        redirect: 60 * 30 //30 minutes
    }
}