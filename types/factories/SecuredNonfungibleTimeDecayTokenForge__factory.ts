/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SecuredNonfungibleTimeDecayTokenForge } from "../SecuredNonfungibleTimeDecayTokenForge";

export class SecuredNonfungibleTimeDecayTokenForge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides
  ): Promise<SecuredNonfungibleTimeDecayTokenForge> {
    return super.deploy(
      overrides || {}
    ) as Promise<SecuredNonfungibleTimeDecayTokenForge>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SecuredNonfungibleTimeDecayTokenForge {
    return super.attach(address) as SecuredNonfungibleTimeDecayTokenForge;
  }
  connect(signer: Signer): SecuredNonfungibleTimeDecayTokenForge__factory {
    return super.connect(
      signer
    ) as SecuredNonfungibleTimeDecayTokenForge__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SecuredNonfungibleTimeDecayTokenForge {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SecuredNonfungibleTimeDecayTokenForge;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenDiff",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenForgeRecorded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_range",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_halvingRate",
        type: "uint256",
      },
    ],
    name: "__SecuredNonfungibleTimeDecayTokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_range",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
    ],
    name: "__SecuredNonfungibleTokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
    ],
    name: "__TokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
    ],
    name: "actualForgedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "adjustDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
    ],
    name: "checkAgainst",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "catalystAdjust",
        type: "uint128",
      },
    ],
    name: "checkHash",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "difficultyOvershootIndex",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    name: "forgeItem",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastDifficultyAdjustTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetMintAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetMintSpan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThisPeriodMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimespanMintAverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimespanMintDeviationAverage",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "origin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "___salt",
        type: "uint256",
      },
    ],
    name: "hash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "recordTokenMintEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f60806100206000396000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806394315334116100d8578063ca3b89f41161008c578063e1652ca411610066578063e1652ca4146103d1578063e9162286146103d9578063fd1349271461042657610182565b8063ca3b89f414610376578063d13319c4146103c1578063d1cb6ce7146103c957610182565b8063b6baffe3116100bd578063b6baffe31461035e578063bfa0b13314610366578063c8bf36991461036e57610182565b80639431533414610315578063a5b96c1b1461031d57610182565b806379f388ce1161013a5780638cf4b74c116101145780638cf4b74c146102a35780638f928b3d146102e157806393f2d00c146102e957610182565b806379f388ce1461022957806385ea2e42146102485780638977d59d1461025057610182565b806322326ebb1161016b57806322326ebb146101a957806351208fb3146101c65780635aca86d9146101f257610182565b80630ca1c5c9146101875780631cbc7deb146101a1575b600080fd5b61018f61042e565b60408051918252519081900360200190f35b61018f610435565b61018f600480360360208110156101bf57600080fd5b5035610432565b61018f600480360360408110156101dc57600080fd5b506001600160a01b03813516906020013561043b565b6102156004803603604081101561020857600080fd5b508035906020013561052b565b604080519115158252519081900360200190f35b6102466004803603602081101561023f57600080fd5b5035610531565b005b61018f610591565b610246600480360360e081101561026657600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a08101359060c00135610597565b610246600480360360a08110156102b957600080fd5b506001600160a01b0381351690602081013590604081013590606081013590608001356105b4565b61018f610631565b610215600480360360408110156102ff57600080fd5b50803590602001356001600160801b0316610694565b61018f6106dd565b6102156004803603608081101561033357600080fd5b5080359060208101356001600160a01b031690604081013590606001356001600160801b03166106e3565b61018f6106ed565b61018f6106f3565b61018f610751565b6103a26004803603604081101561038c57600080fd5b50803590602001356001600160801b0316610757565b6040805169ffffffffffffffffffff9092168252519081900360200190f35b61018f61075f565b61018f610765565b61018f6107d5565b610246600480360360c08110156103ef57600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a001356107db565b61018f610819565b600c545b90565b600b5490565b600060024340848460405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106104ab5780518252601f19909201916020918201910161048c565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156104ea573d6000803e3d6000fd5b5050506040513d60208110156104ff57600080fd5b505160408051602081810193909352815180820384018152908201909152805191012090505b92915050565b81161490565b6105396108ae565b6003546001600160a01b039081169116146105855760405162461bcd60e51b815260040180806020018281038252602c815260200180610edb602c913960400191505060405180910390fd5b61058e816108b2565b50565b60095490565b6105a58787878787876107db565b601055505042600f5550505050565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03969096169590951790945560019283556004919091556005819055600692909255633b9aca009091026008556000600d55600280546fffffffffffffffffffffffffffffffff19169091179055565b600061063b6108ae565b6003546001600160a01b039081169116146106875760405162461bcd60e51b815260040180806020018281038252602c815260200180610edb602c913960400191505060405180910390fd5b61068f6109bb565b905090565b6004546000906001600160801b03831681019081106106b357806106b7565b6000195b90506106cb600454828687858916146109e2565b6106d5848261052b565b949350505050565b60065490565b6000949350505050565b60045490565b60006106fd6108ae565b6003546001600160a01b039081169116146107495760405162461bcd60e51b815260040180806020018281038252602c815260200180610edb602c913960400191505060405180910390fd5b61068f610a7a565b600a5490565b600092915050565b600e5490565b60006010546000141561077b5750600554610432565b6000600f5442039050601054811015610798575050600554610432565b60006107bb826107b5601054600554610a9590919063ffffffff16565b90610af5565b9050600081116107cc5760016107ce565b805b9250505090565b60075490565b6107e886868585856105b4565b5050600280546fffffffffffffffffffffffffffffffff19166001600160801b039390931692909217909155505050565b600080610824610765565b633b9aca00029050600061084a633b9aca00600b54600101610a9590919063ffffffff16565b90506000610859826002610af5565b9050633b9aca008302600061086e8284610af5565b90506000610880633b9aca0083610b5c565b9050600061088d82610bc1565b90506108a2816509184e72a00061ffff610bd8565b97505050505050505090565b3390565b600c546108bf9082610c26565b600c55600654600754420310156108e557600b546108dd9082610c26565b600b5561058e565b6007546108fa57600b8190554260075561058e565b600954600b5461090b908290610c26565b6009819055600b541461092a57600954610926906002610af5565b6009555b600b5460009061093a9083610b5c565b600a5490915061094a9082610c80565b600a819055811461096757600a54610963906002610ce5565b600a555b61096f6109bb565b50600b8390554260078190556040805191825260208201859052805130927f231c3155e8d0ce8d9b94db643290298d4be929217a2465e6ece1dcaf591737b692908290030190a2505050565b6000806109c6610819565b90506109d84260015460045484610db9565b6004819055905090565b604080516001600160a01b0380871660248301528086166044830152841660648201528215156084808301919091528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0e37899400000000000000000000000000000000000000000000000000000000179052610a7490610e39565b50505050565b600d54600090610a8b906001610c26565b600d819055905090565b600082610aa457506000610525565b82820282848281610ab157fe5b0414610aee5760405162461bcd60e51b8152600401808060200182810382526021815260200180610eba6021913960400191505060405180910390fd5b9392505050565b6000808211610b4b576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610b5457fe5b049392505050565b6000818303818312801590610b715750838113155b80610b865750600083128015610b8657508381135b610aee5760405162461bcd60e51b8152600401808060200182810382526024815260200180610f076024913960400191505060405180910390fd5b600080821215610bd45781600003610525565b5090565b600082841115610be457fe5b81610beb57fe5b6000610bf683610e5a565b90506000838581610c0357fe5b0490506000818781610c1157fe5b0460001990931b929092179695505050505050565b600082820183811015610aee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000828201818312801590610c955750838112155b80610caa5750600083128015610caa57508381125b610aee5760405162461bcd60e51b8152600401808060200182810382526021815260200180610e786021913960400191505060405180910390fd5b600081610d39576040805162461bcd60e51b815260206004820181905260248201527f5369676e6564536166654d6174683a206469766973696f6e206279207a65726f604482015290519081900360640190fd5b81600019148015610d6957507f800000000000000000000000000000000000000000000000000000000000000083145b15610da55760405162461bcd60e51b8152600401808060200182810382526021815260200180610e996021913960400191505060405180910390fd5b6000828481610db057fe5b05949350505050565b6040805160248101869052604481018590526064810184905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5ca0ad3e00000000000000000000000000000000000000000000000000000000179052610a74905b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006001815b83821015610aee5760029190910290600101610e6056fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f775369676e6564536166654d6174683a206469766973696f6e206f766572666c6f77536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f742074686520636f6e74726f6c6c696e6720746f6b656e5369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a2646970667358221220247d643f489a227fb729f6e0f7ffc3eafc2e7697211511a2ba4181fe7b08691164736f6c63430007030033";
