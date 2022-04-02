import styles from "./style.module.scss"
import { SignInButton } from '../SignInButton/index';
export function Header() {
    return(
        <header>
            <h1>ig.news</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Posts</li>
                </ul>
            </nav>
            <SignInButton/>
        </header>
    );
}