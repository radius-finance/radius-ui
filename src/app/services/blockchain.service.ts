import { Injectable } from '@angular/core';
import Web3 from "web3";
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { Subject, } from 'rxjs';
import {ethers} from 'ethers';
const {BigNumber, utils} = ethers;

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  web3: any;
  ethers: any;
  provider: any;
  accounts: any;
  web3Modal

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          // TODO: Update
          infuraId: '1ecc817aeb624f00a3507b2c597ff6f9', // required
          //qrcode: false
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();

    this.provider = await this.web3Modal.connect(); // set provider

    this.web3 = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3.eth.getAccounts(); 

    console.log(this.accounts);
    //this.accountStatusSource.next(this.accounts)
  }
}

