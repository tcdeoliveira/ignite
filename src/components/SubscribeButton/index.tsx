import styles from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SubscribeButton() {
    return(
        <button className={styles.subscribeButton} >
            Subscribe Now        
        </button>
    );
}