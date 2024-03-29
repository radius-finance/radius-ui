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

interface RadiusMineLibInterface extends ethers.utils.Interface {
  functions: {
    "CATALYST()": FunctionFragment;
    "EARNEDPERPERIOD()": FunctionFragment;
    "EARNEDPERTOKEN()": FunctionFragment;
    "GAS()": FunctionFragment;
    "LOTTERY()": FunctionFragment;
    "PERIOD()": FunctionFragment;
    "RADIUS()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "CATALYST", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "EARNEDPERPERIOD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EARNEDPERTOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "GAS", values?: undefined): string;
  encodeFunctionData(functionFragment: "LOTTERY", values?: undefined): string;
  encodeFunctionData(functionFragment: "PERIOD", values?: undefined): string;
  encodeFunctionData(functionFragment: "RADIUS", values?: undefined): string;

  decodeFunctionResult(functionFragment: "CATALYST", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "EARNEDPERPERIOD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EARNEDPERTOKEN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GAS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LOTTERY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PERIOD", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RADIUS", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "Mined(address,uint256)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
    "WithdrawnMined(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WithdrawnMined"): EventFragment;
}

export class RadiusMineLib extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: RadiusMineLibInterface;

  functions: {
    CATALYST(overrides?: CallOverrides): Promise<[BigNumber]>;

    "CATALYST()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    EARNEDPERPERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "EARNEDPERPERIOD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    EARNEDPERTOKEN(overrides?: CallOverrides): Promise<[BigNumber]>;

    "EARNEDPERTOKEN()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    GAS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "GAS()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOTTERY(overrides?: CallOverrides): Promise<[BigNumber]>;

    "LOTTERY()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    PERIOD(overrides?: CallOverrides): Promise<[BigNumber]>;

    "PERIOD()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    RADIUS(overrides?: CallOverrides): Promise<[BigNumber]>;

    "RADIUS()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  CATALYST(overrides?: CallOverrides): Promise<BigNumber>;

  "CATALYST()"(overrides?: CallOverrides): Promise<BigNumber>;

  EARNEDPERPERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "EARNEDPERPERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  EARNEDPERTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

  "EARNEDPERTOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

  GAS(overrides?: CallOverrides): Promise<BigNumber>;

  "GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

  LOTTERY(overrides?: CallOverrides): Promise<BigNumber>;

  "LOTTERY()"(overrides?: CallOverrides): Promise<BigNumber>;

  PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

  "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

  RADIUS(overrides?: CallOverrides): Promise<BigNumber>;

  "RADIUS()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    CATALYST(overrides?: CallOverrides): Promise<BigNumber>;

    "CATALYST()"(overrides?: CallOverrides): Promise<BigNumber>;

    EARNEDPERPERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "EARNEDPERPERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    EARNEDPERTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "EARNEDPERTOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    GAS(overrides?: CallOverrides): Promise<BigNumber>;

    "GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY(overrides?: CallOverrides): Promise<BigNumber>;

    "LOTTERY()"(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    RADIUS(overrides?: CallOverrides): Promise<BigNumber>;

    "RADIUS()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Deposited(account: string | null, amount: null): EventFilter;

    Mined(account: string | null, amount: null): EventFilter;

    Withdrawn(account: string | null, amount: null): EventFilter;

    WithdrawnMined(account: string | null, amount: null): EventFilter;
  };

  estimateGas: {
    CATALYST(overrides?: CallOverrides): Promise<BigNumber>;

    "CATALYST()"(overrides?: CallOverrides): Promise<BigNumber>;

    EARNEDPERPERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "EARNEDPERPERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    EARNEDPERTOKEN(overrides?: CallOverrides): Promise<BigNumber>;

    "EARNEDPERTOKEN()"(overrides?: CallOverrides): Promise<BigNumber>;

    GAS(overrides?: CallOverrides): Promise<BigNumber>;

    "GAS()"(overrides?: CallOverrides): Promise<BigNumber>;

    LOTTERY(overrides?: CallOverrides): Promise<BigNumber>;

    "LOTTERY()"(overrides?: CallOverrides): Promise<BigNumber>;

    PERIOD(overrides?: CallOverrides): Promise<BigNumber>;

    "PERIOD()"(overrides?: CallOverrides): Promise<BigNumber>;

    RADIUS(overrides?: CallOverrides): Promise<BigNumber>;

    "RADIUS()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    CATALYST(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "CATALYST()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EARNEDPERPERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "EARNEDPERPERIOD()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    EARNEDPERTOKEN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "EARNEDPERTOKEN()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GAS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "GAS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOTTERY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "LOTTERY()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERIOD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PERIOD()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RADIUS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "RADIUS()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
