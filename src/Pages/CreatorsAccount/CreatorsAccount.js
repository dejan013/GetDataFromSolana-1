import React from "react";
import { useSelector } from "react-redux";
import "../../styles/CreatorsAccount/CreatorsAccount.css";
import TransactionsHistory from "../../Components/TransactionsHistory/TransactionsHistory";

function CreatorsAccount() {
  const creatorsAccountData = useSelector((state) => state.allData.creatorsAccountData);

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
