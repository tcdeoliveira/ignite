import styles from "./style.module.scss"
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession } from "next-auth/react";
import { api } from "../../Services/api";
import { getStripeJS } from "../../Services/stripe-js";
import { useRouter } from "next/router";

interface ISubscribeButtonProps{
    priceId:string
}
export function SubscribeButton({priceId}:ISubscribeButtonProps) {
    const { data: session } = useSession()
    const router = useRouter();

    async function handleSubscribe(){
        if(!session){
            signIn('github');
            return;
        } 
        if(session.activeSubscription){
            router.push('/posts');
            return;
        }
        try {
            const response = await api.post('/subscribe');
            const { sessionId } = response.data
            const stripe = await getStripeJS();
            await stripe.redirectToCheckout({sessionId});
        } catch (error) {
            alert(error.message);
        }
    }
    return(
        <button 
            className={styles.subscribeButton} 
            onClick={handleSubscribe}
        >
            Subscribe Now        
        </button>
    );
}