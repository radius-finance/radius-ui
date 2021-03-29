/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SecuredNonfungibleTokenForge } from "../SecuredNonfungibleTokenForge";

export class SecuredNonfungibleTokenForge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SecuredNonfungibleTokenForge> {
    return super.deploy(
      overrides || {}
    ) as Promise<SecuredNonfungibleTokenForge>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SecuredNonfungibleTokenForge {
    return super.attach(address) as SecuredNonfungibleTokenForge;
  }
  connect(signer: Signer): SecuredNonfungibleTokenForge__factory {
    return super.connect(signer) as SecuredNonfungibleTokenForge__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SecuredNonfungibleTokenForge {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SecuredNonfungibleTokenForge;
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
  "0x608060405234801561001057600080fd5b50610eb3806100206000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806394315334116100d8578063ca3b89f41161008c578063e1652ca411610066578063e1652ca41461038e578063e916228614610396578063fd134927146103ec57610177565b8063ca3b89f41461032a578063d13319c41461037e578063d1cb6ce71461038657610177565b8063b6baffe3116100bd578063b6baffe314610312578063bfa0b1331461031a578063c8bf36991461032257610177565b806394315334146102c0578063a5b96c1b146102c857610177565b806379f388ce1161012f5780638cf4b74c116101145780638cf4b74c146102455780638f928b3d1461028357806393f2d00c1461028b57610177565b806379f388ce1461021e57806385ea2e421461023d57610177565b806322326ebb1161016057806322326ebb1461019e57806351208fb3146101bb5780635aca86d9146101e757610177565b80630ca1c5c91461017c5780631cbc7deb14610196575b600080fd5b6101846103f4565b60408051918252519081900360200190f35b6101846103fa565b610184600480360360208110156101b457600080fd5b5035610400565b610184600480360360408110156101d157600080fd5b506001600160a01b038135169060200135610403565b61020a600480360360408110156101fd57600080fd5b50803590602001356104f3565b604080519115158252519081900360200190f35b61023b6004803603602081101561023457600080fd5b50356104f9565b005b610184610559565b61023b600480360360a081101561025b57600080fd5b506001600160a01b03813516906020810135906040810135906060810135906080013561055f565b6101846105dc565b61020a600480360360408110156102a157600080fd5b50803590602001356fffffffffffffffffffffffffffffffff1661063f565b610184610691565b61020a600480360360808110156102de57600080fd5b5080359060208101356001600160a01b031690604081013590606001356fffffffffffffffffffffffffffffffff16610697565b6101846106a1565b6101846106a7565b610184610705565b61035f6004803603604081101561034057600080fd5b50803590602001356fffffffffffffffffffffffffffffffff1661070b565b6040805169ffffffffffffffffffff9092168252519081900360200190f35b610184610713565b610184610719565b61018461071f565b61023b600480360360c08110156103ac57600080fd5b506001600160a01b03813516906020810135906fffffffffffffffffffffffffffffffff6040820135169060608101359060808101359060a00135610725565b61018461076c565b600c5490565b600b5490565b90565b600060024340848460405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106104735780518252601f199092019160209182019101610454565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156104b2573d6000803e3d6000fd5b5050506040513d60208110156104c757600080fd5b505160408051602081810193909352815180820384018152908201909152805191012090505b92915050565b81161490565b610501610801565b6003546001600160a01b0390811691161461054d5760405162461bcd60e51b815260040180806020018281038252602c815260200180610e2e602c913960400191505060405180910390fd5b61055681610805565b50565b60095490565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03969096169590951790945560019283556004919091556005819055600692909255633b9aca009091026008556000600d55600280546fffffffffffffffffffffffffffffffff19169091179055565b60006105e6610801565b6003546001600160a01b039081169116146106325760405162461bcd60e51b815260040180806020018281038252602c815260200180610e2e602c913960400191505060405180910390fd5b61063a61090e565b905090565b6004546000906fffffffffffffffffffffffffffffffff83168101908110610667578061066b565b6000195b905061067f60045482868785891614610935565b61068984826104f3565b949350505050565b60065490565b6000949350505050565b60045490565b60006106b1610801565b6003546001600160a01b039081169116146106fd5760405162461bcd60e51b815260040180806020018281038252602c815260200180610e2e602c913960400191505060405180910390fd5b61063a6109cd565b600a5490565b600092915050565b600e5490565b60055490565b60075490565b610732868685858561055f565b5050600280546fffffffffffffffffffffffffffffffff19166fffffffffffffffffffffffffffffffff9390931692909217909155505050565b600080610777610719565b633b9aca00029050600061079d633b9aca00600b546001016109e890919063ffffffff16565b905060006107ac826002610a48565b9050633b9aca00830260006107c18284610a48565b905060006107d3633b9aca0083610aaf565b905060006107e082610b14565b90506107f5816509184e72a00061ffff610b2b565b97505050505050505090565b3390565b600c546108129082610b79565b600c556006546007544203101561083857600b546108309082610b79565b600b55610556565b60075461084d57600b81905542600755610556565b600954600b5461085e908290610b79565b6009819055600b541461087d57600954610879906002610a48565b6009555b600b5460009061088d9083610aaf565b600a5490915061089d9082610bd3565b600a81905581146108ba57600a546108b6906002610c38565b600a555b6108c261090e565b50600b8390554260078190556040805191825260208201859052805130927f231c3155e8d0ce8d9b94db643290298d4be929217a2465e6ece1dcaf591737b692908290030190a2505050565b60008061091961076c565b905061092b4260015460045484610d0c565b6004819055905090565b604080516001600160a01b0380871660248301528086166044830152841660648201528215156084808301919091528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0e378994000000000000000000000000000000000000000000000000000000001790526109c790610d8c565b50505050565b600d546000906109de906001610b79565b600d819055905090565b6000826109f7575060006104ed565b82820282848281610a0457fe5b0414610a415760405162461bcd60e51b8152600401808060200182810382526021815260200180610e0d6021913960400191505060405180910390fd5b9392505050565b6000808211610a9e576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610aa757fe5b049392505050565b6000818303818312801590610ac45750838113155b80610ad95750600083128015610ad957508381135b610a415760405162461bcd60e51b8152600401808060200182810382526024815260200180610e5a6024913960400191505060405180910390fd5b600080821215610b2757816000036104ed565b5090565b600082841115610b3757fe5b81610b3e57fe5b6000610b4983610dad565b90506000838581610b5657fe5b0490506000818781610b6457fe5b0460001990931b929092179695505050505050565b600082820183811015610a41576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000828201818312801590610be85750838112155b80610bfd5750600083128015610bfd57508381125b610a415760405162461bcd60e51b8152600401808060200182810382526021815260200180610dcb6021913960400191505060405180910390fd5b600081610c8c576040805162461bcd60e51b815260206004820181905260248201527f5369676e6564536166654d6174683a206469766973696f6e206279207a65726f604482015290519081900360640190fd5b81600019148015610cbc57507f800000000000000000000000000000000000000000000000000000000000000083145b15610cf85760405162461bcd60e51b8152600401808060200182810382526021815260200180610dec6021913960400191505060405180910390fd5b6000828481610d0357fe5b05949350505050565b6040805160248101869052604481018590526064810184905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5ca0ad3e000000000000000000000000000000000000000000000000000000001790526109c7905b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006001815b83821015610a415760029190910290600101610db356fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f775369676e6564536166654d6174683a206469766973696f6e206f766572666c6f77536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f742074686520636f6e74726f6c6c696e6720746f6b656e5369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a26469706673582212203b89b18de8cc6c6b3b26723376d4797c1d2654928d90620345993e99ec516dba64736f6c63430007030033";