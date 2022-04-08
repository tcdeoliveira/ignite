import styles from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

interface ISubscribeButtonProps{
    priceId:string
}
export function SubscribeButton({priceId}:ISubscribeButtonProps) {
    return(
        <button className={styles.subscribeButton} >
            Subscribe Now        
        </button>
    );
}