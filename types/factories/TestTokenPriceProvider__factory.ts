/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestTokenPriceProvider } from "../TestTokenPriceProvider";

export class TestTokenPriceProvider__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestTokenPriceProvider> {
    return super.deploy(overrides || {}) as Promise<TestTokenPriceProvider>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestTokenPriceProvider {
    return super.attach(address) as TestTokenPriceProvider;
  }
  connect(signer: Signer): TestTokenPriceProvider__factory {
    return super.connect(signer) as TestTokenPriceProvider__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestTokenPriceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestTokenPriceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getTokenEthPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ab8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063df00018d14602d575b600080fd5b605d60048036036020811015604157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16606f565b60408051918252519081900360200190f35b5060019056fea26469706673582212209a155a212323f235dba309748838fa6ccc802953fccede49776e0c6ae0482da364736f6c63430007030033";
