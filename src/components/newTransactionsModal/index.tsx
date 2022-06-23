import ReactModal from 'react-modal'
import { Container, TransactionsTypeButton, TransactionsTypeContainer } from './style';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
ReactModal.setAppElement('#root')
interface NewTransacitionsModalProps{
    isOpen: boolean,
    onRequestClose: ()=> void;
}
export function NewTransactionsModal({isOpen, onRequestClose}:NewTransacitionsModalProps){
    const [transactionType, setTransactionType] = useState(0);
    const [value, setValue] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [titulo, setTitulo] = useState('');

    function handlerTransactionTypeOutcome(){
        setTransactionType(0);
    }
    function handlerTransactionTypeIncome(){
        setTransactionType(1);
    }
    
    function handlerCreateNewTransaction(event:FormEvent){
        event.preventDefault();
        var data = {
            tipo: transactionType,
            value: value,
            categoria: categoria,
            titulo: titulo
        };
        api.post('transactions', data);
    }

    return (
        <ReactModal 
            ariaHideApp={false} 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName={'react-modal-overlay'}
            className={'react-modal-container'}
        >
            <button type='button' className='react-modal-close' onClick={onRequestClose} >
                <img src={closeImg} alt="Close Modal" />
            </button>
            <Container onSubmit={handlerCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input onChange={(event)=> setTitulo(event.target.value)} placeholder='Titulo'/>
                <input onChange={(event)=> setValue(Number(event.target.value))} placeholder='Valor' type="number"/>
                <input onChange={(event)=> setCategoria(event.target.value)} placeholder='Categoria'/>
                <TransactionsTypeContainer>
                    <TransactionsTypeButton 
                    activeColor='green'
                        type="button"
                        className={transactionType===1 ? "isActive" : ""}
                        onClick={handlerTransactionTypeIncome}                    
                    >
                        <img src={incomeImg} alt="Income IMG" />
                        <span>
                            Entradsa
                        </span>
                    </TransactionsTypeButton>
                    <TransactionsTypeButton 
                        activeColor='red'
                        type="button"
                        className={transactionType===0 ? "isActive" : ""}
                        onClick={handlerTransactionTypeOutcome}                    
                    >
                        <img src={outcomeImg} alt="Outcome IMG" />
                        <span>
                            Saída
                        </span>
                    </TransactionsTypeButton>
                </TransactionsTypeContainer>
                <button type='submit'>
                    Cadastrar
                </button>
            </Container>
        </ReactModal>
    );
}