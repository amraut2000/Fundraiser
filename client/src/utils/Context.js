import React, {useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/constants';

export const Context = React.createContext();

const { ethereum }= window;

const getEthereumContract= () =>{
  const provider=new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const fundraiserContract= new ethers.Contract(contractAddress,contractABI,signer);

  console.log({
    provider,
    signer,
    fundraiserContract
  })
}

export const ContextProvider =({children}) => {
  return (
    <Context.Provider
      value={{ web3, accounts, contract, fundraisers, updateFundraisers }}
    >
      {children}
    </Context.Provider>
  )
}