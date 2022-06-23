import { GlobalStyle } from './styles/global';
import { Header } from './components/header';
import { Summary } from './components/summary';
import { NewTransactionsModal } from './components/newTransactionsModal';
import { TransactionsTable } from './components/transationsTable';
import { useState } from 'react';
export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionsModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionsModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <div className="App">
      <Header onOpenNewTransactionsModal={handleOpenNewTransactionsModal}></Header>     
      <Summary></Summary> 
      <TransactionsTable></TransactionsTable>
      <NewTransactionsModal isOpen={isNewTransactionsModalOpen} onRequestClose={handleCloseNewTransactionsModal}></NewTransactionsModal>
      <GlobalStyle/>
    </div>
  );
}