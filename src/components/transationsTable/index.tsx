import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
interface ITransaction{
    id:number,
    title:string,
    category:string,
    type:string,
    amount:number,
    createAt:string
}
export function TransactionsTable(){
    const [transactions, setTransactions] = useState<ITransaction[]>([]);
    useEffect(()=>{ 
        api.get('transactions')
            .then((response)=>{
                console.log('response: ', response.data.transactions)
                setTransactions(response.data.transactions)
            })
            .catch(error=>console.error(error.message));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                        const type = Number(transaction.type) == 1 ? "" : "-";
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={Number(transaction.type) == 1 ? "entrada" : "saida"}>{type+new Intl.NumberFormat('pt-BR', {style:"currency", currency:"BRL"}).format(transaction.amount)}</td>
                                <td>{transaction.category}</td>
                                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createAt))}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    )
}