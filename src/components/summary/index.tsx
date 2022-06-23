import { Card, CardContent, CardHeader, Container } from './style';
import iconEntradas from '../../assets/income.svg';
import iconSaidas from '../../assets/outcome.svg';
import iconTotal from '../../assets/total.svg';
export function Summary(){
    return(
        <Container>
            <Card>
                <CardHeader>
                    <h5>Entradas</h5>
                    <img src={iconEntradas} alt="Logo IMG" />
                </CardHeader>
                <CardContent>
                    <h6>R$ 17.400,00</h6>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <h5>Saídas</h5>
                    <img src={iconSaidas} alt="Logo IMG" />
                </CardHeader>
                <CardContent>
                    <h6>R$ 1.259,00</h6>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <h5>Total</h5>
                    <img src={iconTotal} alt="Logo IMG" />
                </CardHeader>
                <CardContent>
                    <h6>R$ 16.141,00</h6>
                </CardContent>
            </Card>
        </Container>
    );
}