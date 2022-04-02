import styles from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
    const isUserLoggedIn = true;
    return isUserLoggedIn ? (
        <button className={styles.signInButton} >
            <FaGithub color="#04d361"/>
            User Name
            <FiX color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button className={styles.signInButton} >
            <FaGithub color="#eba417"/>
            Sign with GitHub
        </button>
    );
}