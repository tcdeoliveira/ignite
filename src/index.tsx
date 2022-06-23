import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs'

createServer({
  models:{
    transaction:Model
  },
  seeds(server){
    server.db.loadData({
      transactions:[
        {id:1,title:"Job", category:"Salário", type:1, amount:4470.00, createAt: new Date("01/01/2022")},
        {id:2,title:"Renda - Apartamento", category:"Moradia", type:0, amount:550, createAt: new Date("03/01/2022")},
        {id:3,title:"Job", category:"Bonus", type:1, amount:1150, createAt: new Date("06/01/2022")}
      ]
    })
  },
  routes(){
    this.namespace = 'api';
    this.get('/transactions', ()=> {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);
      return schema.create( 'transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);