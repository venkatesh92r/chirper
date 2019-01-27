import {Injectable, OnInit} from '@angular/core';
import { tokenReference } from '@angular/compiler';
//import  Web3 from 'web3';
//import * as web3 from 'web3';
import * as Web3 from 'web3';

declare let require: any;
declare let window: any;

let tokenAbi = require('./Chirper.json');

//let tokenAbi = JSON.parse(data);

@Injectable()
export class ContractsService {
  private _account: string = null;
  //private _web3: any;

  private _tokenContract: any;
 // private _tokenContractAddress: string = "0x3eaff2ef14bb80f13283be9cb2d6bd5f17e6e913";
 private _tokenContractAddress: string = "0x9af7593e517be2d115a81fc4740d35507cfbbdf9";
//  private _tokenContractAddress: string = "0x5B4754C995c8aE63d2bf40D20aF70965261228E3";
  
  constructor() {
    if (typeof window.web3 !== 'undefined') {
      
     // console.log(window.web3.currentProvider);
      // Use Mist/MetaMask's provider
      //this._web3 = new Web3(window.web3.currentProvider);
      //Web3.setProvider(Web3.givenProvider);
      //this._web3 = new Web3(Web3.givenProvider);
      //const web35 = new Web3(Web3.givenProvider);
      //console.log(this._web3);
      // if (this._web3.version.network !== '4') {
      //   alert('Please connect to the Rinkeby network');
      // }
    } else {
      console.warn(
        'Please use a dapp browser like mist or MetaMask plugin for chrome'
      );
    }


  // var web3js = new Web3(window.ethereum);
  // window.ethereum.enable();
  // this._tokenContract = new web3js.eth.Contract(tokenAbi.abi, this._tokenContractAddress);

  var web3Html = new Web3("http://localhost:8545");
  console.log(web3Html);
  console.log(web3Html.eth.getAccounts());
  this._tokenContract = new web3Html.eth.Contract(tokenAbi.abi);
  
  }

  // private async getAccount(): Promise<string> {
  //   if (this._account == null) {
  //     this._account = await new Promise((resolve, reject) => {
  //       this._web3.eth.getAccounts((err, accs) => {
  //         if (err != null) {
  //           alert('There was an error fetching your accounts.');
  //           return;
  //         }

  //         if (accs.length === 0) {
  //           alert(
  //             'Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.'
  //           );
  //           return;
  //         }
  //         resolve(accs[0]);
  //       })
  //     }) as string;

  //     this._web3.eth.defaultAccount = this._account;
  //   }

  //   return Promise.resolve(this._account);
  // }

  // public async getUserBalance(): Promise<number> {
  //   let account = await this.getAccount();
  //   return new Promise((resolve, reject) => {
  //     let _web3 = this._web3;
  //     this._tokenContract.balanceOf.call(account, function (err, result) {
  //       if(err != null) {
  //         reject(err);
  //       }

  //       resolve(_web3.fromWei(result));
  //     });
  //   }) as Promise<number>;
  // }

  public async getChirps(){
  //  let account = await this.getAccount();
//    var ot = this._tokenContract.getAllChirps.call();

    return new Promise((resolve,reject)=>{
      console.log("promise 2");
      this._tokenContract.methods.getAllChirps.call(function (err, result){
        console.log("promise 3");
        if(err != null) {
          reject(err);
        }
        console.log(result);
        var op = resolve(result);
        
      })
    })
    
  }
}