import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./utils/constants";
import Web3 from "web3";

const Context = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const fundraiserContract = new ethers.Contract(contractAddress, contractABI, signer);
  return fundraiserContract;
};

const ContextProvider = ({ children }) => {
  const [web3, setWeb3] = useState(undefined)
  const [accounts, setAccounts] = useState([])
  const [contract, setContract] = useState([])
  const [fundraisers, setFundraisers] = useState([])


  
  // const checkIfWalletIsConnect = async () => {
  //   try {
  //     if (!ethereum) return alert("Please install MetaMask.");
  //     const accounts = await ethereum.request({ method: "eth_accounts" });
  //     if (accounts.length) {
  //       console.log(accounts[0]);
  //     } else {
  //       console.log("No accounts found");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");
      const accounts = await ethereum.request({ method: "eth_requestAccounts", });
      console.log("Current Account: ",accounts);
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    const init = async () => {
      try {
        //checkIfWalletIsConnect();
        await connectWallet();

        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const contract =  createEthereumContract()

        setWeb3(web3)
        setAccounts(accounts)
        setContract(contract)
        //console.log(web3)
        //console.log(accounts)
        console.log("Contract: ",contract)

        //console.log(contract.method)
        const fundraisersList = await contract.getAll()
        console.log("FundraiserList",fundraisersList)
        setFundraisers(fundraisersList)


      } catch (error) {
        alert(
          "Please install MetaMask extension to have access to complete features of the platform."
        )
        console.error(error)
      }
    }

    init()
  }, []);

  const updateFundraisers = async () => {
    const fundraisersList = await contract.getAll()
    console.log("Updated FundraisersList: ",fundraisersList)
    setFundraisers(fundraisersList)
  }

  return (
    <Context.Provider
      value={{ web3, accounts, contract, fundraisers, updateFundraisers }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context }