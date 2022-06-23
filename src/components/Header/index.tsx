import styles from "./style.module.scss"
import { SignInButton } from '../SignInButton/index';
import Link from "next/link";
import Image from "next/image"
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";
export function Header() {
    const {asPath} = useRouter();
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
                    <ActiveLink activeClassName={styles.active}  href="/" prefetch>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink  activeClassName={styles.active} href="/posts" prefetch>
                        <a>Posts</a>
                    </ActiveLink>
                    <ul>
                    </ul>
                </nav>
                <SignInButton/>
            </div>
        </header>
    );
}