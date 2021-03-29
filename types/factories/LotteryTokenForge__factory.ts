/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { LotteryTokenForge } from "../LotteryTokenForge";

export class LotteryTokenForge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<LotteryTokenForge> {
    return super.deploy(overrides || {}) as Promise<LotteryTokenForge>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LotteryTokenForge {
    return super.attach(address) as LotteryTokenForge;
  }
  connect(signer: Signer): LotteryTokenForge__factory {
    return super.connect(signer) as LotteryTokenForge__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryTokenForge {
    return new Contract(address, _abi, signerOrProvider) as LotteryTokenForge;
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
        name: "",
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
    stateMutability: "pure",
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
        name: "hashVal",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "forgingDiffId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "forgee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hashVal",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "catalystAdjust",
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
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b506112da806100206000396000f3fe608060405234801561001057600080fd5b506004361061018d5760003560e01c806394315334116100e3578063ca3b89f41161008c578063e1652ca411610066578063e1652ca414610402578063e91622861461040a578063fd134927146104575761018d565b8063ca3b89f4146103a7578063d13319c4146103f2578063d1cb6ce7146103fa5761018d565b8063bfa0b133116100bd578063bfa0b13314610371578063c4d66de814610379578063c8bf36991461039f5761018d565b80639431533414610320578063a5b96c1b14610328578063b6baffe3146103695761018d565b806379f388ce116101455780638cf4b74c1161011f5780638cf4b74c146102ae5780638f928b3d146102ec57806393f2d00c146102f45761018d565b806379f388ce1461023457806385ea2e42146102535780638977d59d1461025b5761018d565b806322326ebb1161017657806322326ebb146101b457806351208fb3146101d15780635aca86d9146101fd5761018d565b80630ca1c5c9146101925780631cbc7deb146101ac575b600080fd5b61019a61045f565b60408051918252519081900360200190f35b61019a610466565b61019a600480360360208110156101ca57600080fd5b503561046c565b61019a600480360360408110156101e757600080fd5b506001600160a01b038135169060200135610472565b6102206004803603604081101561021357600080fd5b5080359060200135610562565b604080519115158252519081900360200190f35b6102516004803603602081101561024a57600080fd5b5035610568565b005b61019a6105c8565b610251600480360360e081101561027157600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a08101359060c001356105ce565b610251600480360360a08110156102c457600080fd5b506001600160a01b0381351690602081013590604081013590606081013590608001356105eb565b61019a610668565b6102206004803603604081101561030a57600080fd5b50803590602001356001600160801b03166106cb565b61019a610714565b6102206004803603608081101561033e57600080fd5b5080359060208101356001600160a01b031690604081013590606001356001600160801b031661071a565b61019a610785565b61019a61078b565b6102516004803603602081101561038f57600080fd5b50356001600160a01b03166107e9565b61019a610907565b6103d3600480360360408110156103bd57600080fd5b50803590602001356001600160801b031661090d565b6040805169ffffffffffffffffffff9092168252519081900360200190f35b61019a610949565b61019a61094f565b61019a6109bf565b610251600480360360c081101561042057600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a001356109c5565b61019a610a03565b600c545b90565b600b5490565b50600190565b600060024340848460405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106104e25780518252601f1990920191602091820191016104c3565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa158015610521573d6000803e3d6000fd5b5050506040513d602081101561053657600080fd5b505160408051602081810193909352815180820384018152908201909152805191012090505b92915050565b81161490565b610570610a98565b6003546001600160a01b039081169116146105bc5760405162461bcd60e51b815260040180806020018281038252602c815260200180611255602c913960400191505060405180910390fd5b6105c581610a9c565b50565b60095490565b6105dc8787878787876109c5565b601055505042600f5550505050565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03969096169590951790945560019283556004919091556005819055600692909255633b9aca009091026008556000600d55600280546fffffffffffffffffffffffffffffffff19169091179055565b6000610672610a98565b6003546001600160a01b039081169116146106be5760405162461bcd60e51b815260040180806020018281038252602c815260200180611255602c913960400191505060405180910390fd5b6106c6610ba5565b905090565b6004546000906001600160801b03831681019081106106ea57806106ee565b6000195b905061070260045482868785891614610bcc565b61070c8482610562565b949350505050565b60065490565b6000610724610a98565b6003546001600160a01b039081169116146107705760405162461bcd60e51b815260040180806020018281038252602c815260200180611255602c913960400191505060405180910390fd5b61077c85858585610c64565b95945050505050565b60045490565b6000610795610a98565b6003546001600160a01b039081169116146107e15760405162461bcd60e51b815260040180806020018281038252602c815260200180611255602c913960400191505060405180910390fd5b6106c6610d91565b600054610100900460ff16806108025750610802610dac565b80610810575060005460ff16155b61084b5760405162461bcd60e51b815260040180806020018281038252602e8152602001806111e5602e913960400191505060405180910390fd5b600054610100900460ff16158015610876576000805460ff1961ff0019909116610100171660011790555b6000610880610dbd565b90506001600160a01b0381166108bf576001600160a01b037fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103556108d4565b336001600160a01b038216146108d457600080fd5b6108f083612000600062ffffff196001630114db0060006105ce565b508015610903576000805461ff00191690555b5050565b600a5490565b6000825b69ffffffffffffffffffff811660009081526011602052604090205460ff1615156001141561094257600202610911565b9392505050565b600e5490565b6000601054600014156109655750600554610463565b6000600f5442039050601054811015610982575050600554610463565b60006109a58261099f601054600554610de290919063ffffffff16565b90610e3b565b9050600081116109b65760016109b8565b805b9250505090565b60075490565b6109d286868585856105eb565b5050600280546fffffffffffffffffffffffffffffffff19166001600160801b039390931692909217909155505050565b600080610a0e61094f565b633b9aca000290506000610a34633b9aca00600b54600101610de290919063ffffffff16565b90506000610a43826002610e3b565b9050633b9aca0083026000610a588284610e3b565b90506000610a6a633b9aca0083610ea2565b90506000610a7782610f07565b9050610a8c816509184e72a00061ffff610f1e565b97505050505050505090565b3390565b600c54610aa99082610f6c565b600c5560065460075442031015610acf57600b54610ac79082610f6c565b600b556105c5565b600754610ae457600b819055426007556105c5565b600954600b54610af5908290610f6c565b6009819055600b5414610b1457600954610b10906002610e3b565b6009555b600b54600090610b249083610ea2565b600a54909150610b349082610fc6565b600a8190558114610b5157600a54610b4d90600261102b565b600a555b610b59610ba5565b50600b8390554260078190556040805191825260208201859052805130927f231c3155e8d0ce8d9b94db643290298d4be929217a2465e6ece1dcaf591737b692908290030190a2505050565b600080610bb0610a03565b9050610bc242600154600454846110ff565b6004819055905090565b604080516001600160a01b0380871660248301528086166044830152841660648201528215156084808301919091528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0e37899400000000000000000000000000000000000000000000000000000000179052610c5e9061117f565b50505050565b6000610c6e610a98565b6003546001600160a01b03908116911614610cba5760405162461bcd60e51b815260040180806020018281038252602c815260200180611255602c913960400191505060405180910390fd5b6000610cc6848461090d565b69ffffffffffffffffffff8116600081815260116020526040808220805460ff1916600190811790915560035482517f156e29f60000000000000000000000000000000000000000000000000000000081526001600160a01b038c81166004830152958d0160248201526044810192909252915194955092169263156e29f692606480820193929182900301818387803b158015610d6357600080fd5b505af1158015610d77573d6000803e3d6000fd5b50505050610d856001610568565b50600195945050505050565b600d54600090610da2906001610f6c565b600d819055905090565b6000610db7306111a0565b15905090565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b600082610df15750600061055c565b82820282848281610dfe57fe5b04146109425760405162461bcd60e51b81526004018080602001828103825260218152602001806112346021913960400191505060405180910390fd5b6000808211610e91576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610e9a57fe5b049392505050565b6000818303818312801590610eb75750838113155b80610ecc5750600083128015610ecc57508381135b6109425760405162461bcd60e51b81526004018080602001828103825260248152602001806112816024913960400191505060405180910390fd5b600080821215610f1a578160000361055c565b5090565b600082841115610f2a57fe5b81610f3157fe5b6000610f3c836111a6565b90506000838581610f4957fe5b0490506000818781610f5757fe5b0460001990931b929092179695505050505050565b600082820183811015610942576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000828201818312801590610fdb5750838112155b80610ff05750600083128015610ff057508381125b6109425760405162461bcd60e51b81526004018080602001828103825260218152602001806111c46021913960400191505060405180910390fd5b60008161107f576040805162461bcd60e51b815260206004820181905260248201527f5369676e6564536166654d6174683a206469766973696f6e206279207a65726f604482015290519081900360640190fd5b816000191480156110af57507f800000000000000000000000000000000000000000000000000000000000000083145b156110eb5760405162461bcd60e51b81526004018080602001828103825260218152602001806112136021913960400191505060405180910390fd5b60008284816110f657fe5b05949350505050565b6040805160248101869052604481018590526064810184905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5ca0ad3e00000000000000000000000000000000000000000000000000000000179052610c5e905b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b3b151590565b60006001815b8382101561094257600291909102906001016111ac56fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f77496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a65645369676e6564536166654d6174683a206469766973696f6e206f766572666c6f77536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f742074686520636f6e74726f6c6c696e6720746f6b656e5369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a264697066735822122010c144de986747d6e2f65ec69ebe93246db33d9a5ee11ad22df0ae191c2f033064736f6c63430007030033";