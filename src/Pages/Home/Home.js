import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getNftData, getCreatorsAccountData, getAccountTransactionsHistory } from "../../features/allData";
import { setSpinner } from "../../features/controls";
import TransactionsHistory from "../../Components/TransactionsHistory/TransactionsHistory";

import "../../styles/Home.css";

function Home() {
  const dispatch = useDispatch();
  const [searchData, setSearchData] = useState("");
  const nftData = useSelector((state) => state.allData.nftData);
  const accountTransactionsHistory = useSelector((state) => state.allData.accountTransactionsHistory);
  const creatorsAccountData = useSelector((state) => state.allData.creatorsAccountData);
  console.log(nftData);

  const searchNft = (e) => {
    e.preventDefault();
    axios.get(`https://public-api.solscan.io/account/${searchData}`).then((res) => {
      console.log(res.data);
      const newMetaData = {
        priceSol: res.data.lamports / 1000000000,
        ownerProgram: res.data.ownerProgram,
        account: res.data.account,
        mint: res.data.metadata.mint,
        rentEpoch: res.data.rentEpoch,
        updateAuthority: res.data.metadata.updateAuthority,
        type: res.data.metadata.type,
        primarySaleHappened: res.data.metadata.primarySaleHappened,
        attributes: res.data.metadata.data.attributes,
        collection: res.data.metadata.data.collection,
        description: res.data.metadata.data.description,
        external_url: res.data.metadata.data.external_url,
        image: res.data.metadata.data.image,
        name: res.data.metadata.data.name,
        seller_fee_basis_points: res.data.metadata.data.seller_fee_basis_points,
        symbol: res.data.metadata.data.symbol,
        supply: res.data.tokenInfo.supply,
        tokenAuthority: res.data.tokenInfo.tokenAuthority,
        creators: res.data.metadata.data.properties.creators,
      };
      dispatch(getNftData(newMetaData));
      dispatch(setSpinner(true))
    });
  };

  const getCreatorsAccountDataHandler = () => {
    const accountData = axios.get("https://public-api.solscan.io/account/3SSeYf1MsfTpbzTauFRyyTe5C9dVcqmmNydSHKLHKWUz");
    const accountTransactionsHistory = axios.get(
      "https://public-api.solscan.io/account/transactions?account=3SSeYf1MsfTpbzTauFRyyTe5C9dVcqmmNydSHKLHKWUz&limit=50"
    );

    axios.all([accountData, accountTransactionsHistory]).then(
      axios.spread(function (res1, res2) {
        if (res1 && res2) {
          dispatch(getAccountTransactionsHistory(res2.data));
          dispatch(getCreatorsAccountData(res1.data));
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="App_container">
        <form className="App_searchBar" onSubmit={(e) => searchNft(e)}>
          <input onChange={(e) => setSearchData(e.target.value)} placeholder="Search NFT..." />
          <button type="submit">Submit</button>
        </form>
        {nftData ? (
          <div className="App_allMetaData">
            <div className="App_nftMetaData">
              <div className="App_left">
                <img src={nftData.image} />
                <div className="App_nftAttributesContainerDescription">
                  <div className="App_nftAttributesContainer">
                    {nftData.attributes
                      ? nftData.attributes.map((attr) => {
                          return (
                            <div key={attr.trait_type} className="App_nftAttributes">
                              <h4>{attr.trait_type}</h4>
                              <h4>{attr.value}</h4>
                            </div>
                          );
                        })
                      : null}
                  </div>
                  <div className="breakLine"></div>
                  <strong>Description:</strong> {nftData.description}
                </div>
              </div>
              <div className="App_right">
                <div className="App_rightWrapper">
                  <h2>{nftData.name}</h2>
                  {nftData.collection ? (
                    <div>
                      <p>
                        <strong>Collection:</strong> {nftData.collection.name}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className="App_rightWrapper">
                  {nftData.creators ? (
                    <div>
                      <h3>Creator</h3>
                      {nftData?.creators.map((creator) => {
                        return (
                          <div key={creator.address}>
                            <Link onClick={() => getCreatorsAccountDataHandler()} to="/CreatorsAccount">
                              {creator.address}
                            </Link>
                            <p>{creator.share}%</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
                <div className="App_rightWrapper">
                  <h4>tokenAuthority:</h4>
                  <div>
                    <a href={`https://explorer.solana.com/address/${nftData.tokenAuthority}`} target="_blank">
                      {nftData.tokenAuthority}
                    </a>
                  </div>
                </div>
                <div className="App_rightWrapper">
                  <h4>Wiew on Solana:</h4>
                  <div>
                    <a href={`https://explorer.solana.com/address/${nftData.mint}`} target="_blank">
                      {nftData.mint}
                    </a>
                  </div>
                </div>
                <div className="App_rightWrapper">
                  <div>
                    <strong>Price Sol:</strong> {nftData.priceSol}
                  </div>
                  <div>
                    <strong>Rent Epoch:</strong> {nftData.rentEpoch}
                  </div>
                  <div>
                    <strong>Seller Fee Basis Points:</strong> {nftData.seller_fee_basis_points}
                  </div>
                  <div>
                    <strong>Primary Sale Happened:</strong> {nftData.primarySaleHappened}
                  </div>
                </div>
                <div className="App_rightWrapper">
                  <div>
                    <strong>Symbol:</strong> {nftData.symbol}
                  </div>
                  <div>
                    <strong>Supply:</strong> {nftData.supply}
                  </div>
                  <div>
                    <strong>Candy Machine:</strong> {nftData.type}
                  </div>
                </div>
              </div>
            </div>
            <TransactionsHistory transactionHistoryData={nftData.mint} />
          </div>
        ) : (
          <div className="App_nftEmpty">
            <h2>Search your NFT</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
