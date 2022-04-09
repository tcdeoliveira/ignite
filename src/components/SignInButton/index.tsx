import styles from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react"

export function SignInButton() {
    const { data: session } = useSession()
    return session  ? ( 
        <button className={styles.signInButton} >
            <FaGithub color="#04d361"/>
            {session.user.name}
            <FiX  onClick={()=> signOut()} color="#737380" className={styles.closeIcon}/>
        </button>
    ) : (
        <button 
            className={styles.signInButton} 
            onClick={()=> signIn('github')}
            >
            <FaGithub color="#eba417"/>
            Sign with GitHub
        </button>
    );
}