import React, {useState} from 'react';
// import {useSelector, useDispatch} from 'react-redux'
// import { getDataControls } from './features/dataControls';
import * as web3 from "@solana/web3.js";
import './App.css';
let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

function App() {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [getDataSwitch, setgetDataSwitch] = useState('transaction')
  const [solanaData, setsolanaData] = useState('')

   const getAccountInfo = async (searchedValue) => {
    const newKey = new web3.PublicKey(searchedValue)
    console.log(newKey);
    const acc =  connection.getAccountInfo(newKey).then(res => {
      console.log(res.owner);
    })
  }
  
   const getTransaction = async (searchedValue)  => {	
    console.log(searchedValue);
  const newTrans = await connection.getTransaction(searchedValue).then(res=> {
    console.log(res)
  })
  }
  
   const getBlock = async (searchedValue)  => {	
    console.log(searchedValue);
  const newBlock = connection.getBlock(+searchedValue).then(res=> {
    console.log(res)
  })
  }
  
   const getTokenAccountBalance = async (searchedValue)  => {	
    console.log(searchedValue);
    const newAddress = new web3.PublicKey(searchedValue)
  connection.getTokenAccountBalance(newAddress).then(res=> {
    console.log(res)
  })
  }
  

  const setGetDataFunc = () => {
     if(getDataSwitch === 'transaction'){
      getTransaction(searchInputValue)
     }
     if(getDataSwitch === 'account info'){
     getAccountInfo(searchInputValue)
     }
    if(getDataSwitch === 'block'){
     getBlock(searchInputValue.replace(/,/g,''))
     }
    if(getDataSwitch === 'token account balance'){
     getTokenAccountBalance(searchInputValue)
     }
    }

  return (
    <div className="App">
      <div className='App_container'>
        <form onSubmit={e => e.preventDefault()} className='App_firstInput'>
          <input placeholder={`Search ${getDataSwitch}...`} onChange={(e) => setSearchInputValue(e.target.value)}/>
          <button type='submit' onClick={setGetDataFunc}>Submit</button>
          <select onChange={(e) => setgetDataSwitch(e.target.value)} >
             <option value="transaction">Transaction</option>
             <option value="account info">Account Info</option>
             <option value="token account balance">Token Account Balance</option>
             <option value="block">Block</option>
          </select>
        </form>
      </div>
    </div>
  );
}

export default App;
