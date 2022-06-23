import logoImg from '../../assets/logo.svg';
import { Container, Content } from './style';
interface HeaderProps{
    onOpenNewTransactionsModal: () => void;
}
export function Header({onOpenNewTransactionsModal}:HeaderProps){   
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="Logo IMG" />
                <button type="button" onClick={onOpenNewTransactionsModal}>
                    Nova Transação
                </button>                
            </Content>
        </Container>
    );
}