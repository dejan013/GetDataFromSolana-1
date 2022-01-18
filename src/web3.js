// // import * as web3 from '@solana/web3.js';
// // import {Connection, PublicKey} from "@solana/web3.js"
// // import * as SPLToken from "@solana/spl-token";

// // import {struct, u32, ns64} from "@solana/buffer-layout";
// // import {Buffer} from 'buffer';
// import * as web3 from "@solana/web3.js";
// import {useDispatch} from 'react-redux'
// let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');


// export const getAccountInfo = async (searchedValue) => {
// 	const newKey = new web3.PublicKey(searchedValue)
// 	const acc =  connection.getAccountInfo(newKey).then(res => {
// 		console.log(res);
// 	})
// }

// export const getTransaction = async (searchedValue)  => {	
// 	console.log(searchedValue);
// const newTrans = await connection.getTransaction(searchedValue).then(res=> {
// 	console.log(res)
// })
// }

// export const getBlock = async (searchedValue)  => {	
// 	console.log(searchedValue);
// const newBlock = connection.getBlock(+searchedValue).then(res=> {
// 	console.log(res)
// })
// }

// export const getTokenAccountBalance = async (searchedValue)  => {	
// 	console.log(searchedValue);
// 	const newAddress = new web3.PublicKey(searchedValue)
// connection.getTokenAccountBalance(newAddress).then(res=> {
// 	console.log(res)
// })
// }


