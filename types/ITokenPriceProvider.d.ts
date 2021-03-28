/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ITokenPriceProviderInterface extends ethers.utils.Interface {
  functions: {
    "getTokenEthPrice(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getTokenEthPrice",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getTokenEthPrice",
    data: BytesLike
  ): Result;

  events: {};
}

export class ITokenPriceProvider extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ITokenPriceProviderInterface;

  functions: {
    getTokenEthPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTokenEthPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getTokenEthPrice(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTokenEthPrice(address)"(
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getTokenEthPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenEthPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getTokenEthPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenEthPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTokenEthPrice(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenEthPrice(address)"(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
