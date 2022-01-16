import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccountTransactionsHistory } from "../../features/allData";

import "../../styles/CreatorsAccount/CreatorsAccount.css";

import "moment-timezone";
import TransactionsHistory from "../../Components/TransactionsHistory/TransactionsHistory";

function CreatorsAccount() {
  const creatorsAccountData = useSelector((state) => state.allData.creatorsAccountData);
  const accountTransactionsHistory = useSelector((state) => state.allData.accountTransactionsHistory);
  console.log(accountTransactionsHistory);
  console.log(creatorsAccountData);
  const dispatch = useDispatch();

  return (
    <div className="Acc">
      <div className="Acc_container">
        <div className="Acc_info">
          <h2>Account</h2>
          <div className="Acc_allData">
            <div className="Acc_data">
              <p>Address</p>
              {creatorsAccountData.account}
            </div>
            <div className="Acc_data">
              <p>Balance (SOL)</p>
              {creatorsAccountData.lamports / 1000000000}
            </div>
            <div className="Acc_data">
              <p>Rent Epoch</p>
              {creatorsAccountData.rentEpoch}
            </div>
            <div className="Acc_data">
              <p>Assigned Program Id</p>
              {creatorsAccountData.type}
            </div>
          </div>
        </div>
        <TransactionsHistory transactionHistoryData={creatorsAccountData.account} />
      </div>
      )
    </div>
  );
}

export default CreatorsAccount;
