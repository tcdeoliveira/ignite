import styles from "./style.module.scss"
import { SignInButton } from '../SignInButton/index';
import Link from "next/link";
import Image from "next/image"
export function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Image 
                    width="108.45" 
                    height="30.27" 
                    src="/images/ig.news.svg" 
                    alt="ig-news-logo" 
                />   
                <nav>
                    <Link href="/" prefetch>
                        <a className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                        <a>Posts</a>
                    </Link>
                    <ul>
                    </ul>
                </nav>
                <SignInButton/>
            </div>
        </header>
    );
}