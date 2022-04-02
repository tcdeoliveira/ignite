import styles from "./style.module.scss"
import { SignInButton } from '../SignInButton/index';
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
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                    <ul>
                    </ul>
                </nav>
                <SignInButton/>
            </div>
        </header>
    );
}